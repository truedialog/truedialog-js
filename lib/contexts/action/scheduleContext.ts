/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient, ICollection } from "../../interfaces";

import { ActionSchedule } from "../../models";

import { IScheduleContext } from "../interfaces";

/* ================================================================================================================= */

const ITEM: string = "account/{AccountId}/action/{ActionId}/schedule/{Id}";
const LIST: string = "account/{AccountId}/action/{ActionId}/schedule";

/* ================================================================================================================= */

export class ScheduleContext implements IScheduleContext
{
    constructor(@inject(IRestClient) private readonly client: IRestClient)
    {
    }

    public async get(accountId: number, actionId: number, scheduleId: number): Promise<ActionSchedule>
    {
        return await this.client
            .asAccount(accountId)
            .get(ITEM, { AccountId: accountId, ActionId: actionId, id: scheduleId });
    }

    public async getAll(accountId: number, actionId: number): Promise<ICollection<ActionSchedule>>
    {
        return await this.client
            .asAccount(accountId)
            .get(LIST, { AccountId: accountId, ActionId: actionId });
    }

    public async create(item: ActionSchedule, accountId?: number, actionId?: number): Promise<ActionSchedule>
    {
        item.AccountId = accountId || item.AccountId;
        item.ActionId = actionId || item.ActionId;

        if (!item.ActionId)
            throw new Error("Invalid action ID");

        return await this.client
            .asAccount(item.AccountId)
            .post(LIST, { ActionId: item.ActionId }, item);
    }

    public async update(item: ActionSchedule): Promise<ActionSchedule>
    {
        if (!item.ActionId)
            throw new Error("Invalid action ID");

        return await this.client
            .asAccount(item.AccountId)
            .put(ITEM, { Id: item.Id, ActionId: item.ActionId }, item);
    }

    public async delete(item: ActionSchedule | number, accountId?: number, actionId?: number): Promise<void>
    {
        if (typeof item !== "number")
        {
            accountId = accountId || item.AccountId;
            actionId = actionId || item.ActionId;
            item = item.Id;
        }

        if (!item)
            throw new Error("Invalid schedule ID");

        if (!actionId)
            throw new Error("Invalid action ID");

        await this.client
            .asAccount(accountId)
            .delete(ITEM, { Id: item, ActionId: actionId });
    }
}

/* ================================================================================================================= */