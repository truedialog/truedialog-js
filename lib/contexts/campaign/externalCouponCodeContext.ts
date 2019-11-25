/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../../interfaces";

import { ExternalCouponCode } from "../../models";

import { IExternalCouponCodeContext } from "../interfaces";

/* ================================================================================================================= */

const ITEM: string = "/account/{AccountId}/external-couponlist/{ListId}/code/{Code}";
const LIST: string = "/account/{AccountId}/external-couponlist/{ListId}/code";

/* ================================================================================================================= */


export class ExternalCouponCodeContext implements IExternalCouponCodeContext
{
    public constructor(@inject(IRestClient) private readonly client: IRestClient)
    {
    }

    public async get(code: string, listId: number, accountId?: number): Promise<ExternalCouponCode>
    {
        return await this.client
            .asAccount(accountId)
            .get(ITEM, { ListId: listId, Code: code });
    }

    public async getAll(listId: number, accountId?: number): Promise<ExternalCouponCode[]>
    {
        return await this.client
            .asAccount(accountId)
            .get(LIST, { ListId: listId });
    }

    public async delete(code: string, listId: number, accountId?: number): Promise<void>
    {
        await this.client
            .asAccount(accountId)
            .delete(ITEM, { ListId: listId, Code: code });
    }
}

/* ================================================================================================================= */
