/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../../interfaces";

import { IQuestionContext } from "../interfaces";

import { Question } from "../../models";

/* ================================================================================================================= */

const ITEM: string = "account/{accountId}/campaign/{Id}/question";

/* ================================================================================================================= */

export class QuestionContext implements IQuestionContext
{
    public constructor(@inject(IRestClient) private readonly client: IRestClient)
    {
    }

    public async get(id: number, accountId?: number): Promise<Question>
    {
        return await this.client
            .asAccount(accountId)
            .get(ITEM, { Id: id });
    }

    public async create(id: number, question: Question, accountId?: number): Promise<Question>
    {
        return await this.client
            .asAccount(accountId)
            .post(ITEM, { Id: id }, question);
    }

    public async update(question: Question, accountId?: number): Promise<Question>
    {
        return await this.client
            .asAccount(accountId || question.AccountId)
            .put(ITEM, { Id: question.Id }, question);
    }
}

/* ================================================================================================================= */
