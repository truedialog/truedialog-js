/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient, ICollection } from "../../interfaces";

import { Action, ActionBase, ActionHistory } from "../../models";

import { IActionContext } from "../interfaces";

import { BaseContext } from "../baseContext";

/* ================================================================================================================= */

const ITEM: string = "account/{AccountId}/action/{Id}";
const LIST: string = "account/{AccountId}/action";

/* ================================================================================================================= */

type ActionItem = Action | ActionBase | number;

/* ================================================================================================================= */

export class ActionContext extends BaseContext<Action> implements IActionContext
{
    constructor(@inject(IRestClient) client: IRestClient)
    {
        super(client, ITEM, LIST);
    }

    public async execute(item: ActionItem, accountId?: number): Promise<void>
    {
        if (typeof item !== "number")
        {
            accountId = accountId || item.AccountId;
            item = item.Id;
        }

        // The response from TD isn't JSON, so this will generate a warning from our rest client.

        await this.client
            .asAccount(accountId)
            .post(ITEM + "/execute", { Id: item }, {});
    }

    public async getHistory(item: ActionItem, accountId?: number): Promise<ICollection<ActionHistory>>
    {
        if (typeof item !== "number")
        {
            accountId = accountId || item.AccountId;
            item = item.Id;
        }

        return await this.client
            .asAccount(accountId)
            .get(ITEM + "/execute", { Id: item });
    }
}

/* ================================================================================================================= */
