/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../../interfaces";

import { CouponOffer } from "../../models";

import { ICouponOfferContext } from "../interfaces";

/* ================================================================================================================= */

const ITEM: string = "account/{AccountId}/campaign/{Id}/couponOffer";

/* ================================================================================================================= */

export class CouponOfferContext implements ICouponOfferContext
{
    public constructor(@inject(IRestClient) private readonly client: IRestClient)
    {
    }

    public async get(id: number, accountId?: number): Promise<CouponOffer>
    {
        return await this.client
            .asAccount(accountId)
            .get(ITEM, { Id: id });
    }

    public async create(couponOffer: CouponOffer, campaignId: number, accountId?: number): Promise<CouponOffer>
    {
        return await this.client
            .asAccount(accountId)
            .post(ITEM, { Id: campaignId }, couponOffer);
    }

    public async update(couponOffer: CouponOffer, accountId?: number): Promise<CouponOffer>
    {
        return await this.client
            .asAccount(accountId || couponOffer.AccountId)
            .put(ITEM, { Id: couponOffer.CampaignId }, couponOffer);
    }

    public async delete(id: number, accountId?: number): Promise<void>
    {
        return await this.client
            .asAccount(accountId)
            .delete(ITEM, { Id: id });
    }
}

/* ================================================================================================================= */
