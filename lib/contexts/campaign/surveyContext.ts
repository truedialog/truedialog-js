/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../../interfaces";

import { ISurveyContext } from "../interfaces";

import { Survey } from "../../models";

/* ================================================================================================================= */

const ITEM: string = "account/{AccountId}/campaign/{Id}/dialog";

/* ================================================================================================================= */

export class SurveyContext implements ISurveyContext
{
    public constructor(@inject(IRestClient) private readonly client: IRestClient)
    {
    }

    public async get(id: number, accountId?: number): Promise<Survey>
    {
        return await this.client
            .asAccount(accountId)
            .get(ITEM, { Id: id })
    }

    public async create(id: number, survey: Survey, accountId?: number): Promise<Survey>
    {
        return await this.client
            .asAccount(accountId)
            .post(ITEM, { Id: id }, survey);
    }

    public async update(survey: Survey, accountId?: number): Promise<Survey>
    {
        return await this.client
            .asAccount(accountId || survey.AccountId)
            .put(ITEM, { Id: survey.Id }, survey);
    }
}

/* ================================================================================================================= */
