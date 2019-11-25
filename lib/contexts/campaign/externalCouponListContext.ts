/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../../interfaces";

import { ExternalCouponList, ExternalCouponCode } from "../../models";

import { BaseContext } from "../baseContext";

/* ================================================================================================================= */

const LIST: string = "/account/{AccountId}/external-couponlist";
const ITEM: string = "/account/{AccountId}/external-couponlist/{Id}";
const CODE_LIST: string = "/account/{AccountId}/external-couponlist/{Id}/code";

/* ================================================================================================================= */

export class ExternalCouponListContext extends BaseContext<ExternalCouponList>
{
    constructor(@inject(IRestClient) client: IRestClient)
    {
        super(client, ITEM, LIST);
    }

    public async getCodes(id: number, accountId?: number): Promise<ExternalCouponCode[]>
    {
        return await this.client
            .asAccount(accountId)
            .get(CODE_LIST, { Id: id });
    }
}

/* ================================================================================================================= */

