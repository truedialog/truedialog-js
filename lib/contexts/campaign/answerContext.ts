/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../../interfaces";

import { IAnswerContext } from "../interfaces";

import { Answer } from "../../models";

/* ================================================================================================================= */

const ITEM: string = "account/{accountId}/campaign/{campaignId}/question/answer/{Id}";
const LIST: string = "account/{accountId}/campaign/{campaignId}/question/answer";

/* ================================================================================================================= */

export class AnswerContext implements IAnswerContext
{
    public constructor(@inject(IRestClient) private readonly client: IRestClient)
    {
    }

    public async getAll(campaignId: number, accountId?: number): Promise<Answer[]>
    {
        return await this.client
            .asAccount(accountId)
            .get(LIST, { CampaignId: campaignId });
    }

    public async get(id: number, campaignId: number, accountId?: number): Promise<Answer>
    {
        return await this.client
            .asAccount(accountId)
            .get(ITEM, { CampaignId: campaignId, Id: id });
    }

    public async create(campaignId: number, answer: Answer, accountId?: number): Promise<Answer>
    {
        return await this.client
            .asAccount(accountId)
            .post(LIST, { CampaignId: campaignId }, answer);
    }

    public async update(answer: Answer, accountId?: number): Promise<Answer>
    {
        return await this.client
            .asAccount(accountId || answer.AccountId)
            .put(ITEM, { CampaignId: answer.CampaignId, Id: answer.Id }, answer);
    }

    public async delete(answer: Answer, accountId?: number): Promise<void>
    {
        await this.client
            .asAccount(accountId || answer.AccountId)
            .delete(ITEM, { CampaignId: answer.CampaignId, Id: answer.Id });
    }
}

/* ================================================================================================================= */
