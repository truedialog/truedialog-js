/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../../interfaces";

import { ICouponContext } from "../interfaces";

import { CouponDefinition, CouponRedemption, CouponRedemptionDetails } from "../../models";

/* ================================================================================================================= */

const ITEM: string = "/account/{AccountId}/campaign/{Id}/coupon";
const REDEEM: string = "/account/{AccountId}/event-redeemcoupon";
const REDEMPTION_DETAILS: string = "/account/{AccountId}/campaign/{Id}/coupon/redemptions";

/* ================================================================================================================= */

export class CouponContext implements ICouponContext
{
    public constructor(@inject(IRestClient) private readonly client: IRestClient)
    {
    }

    public async get(id: number, accountId?: number): Promise<CouponDefinition>
    {
        return await this.client
            .asAccount(accountId)
            .get(ITEM, { Id: id });
    }

    public async create(coupon: CouponDefinition, id: number, accountId?: number): Promise<CouponDefinition>
    {
        return await this.client
            .asAccount(accountId)
            .post(ITEM, { Id: id }, coupon);
    }

    public async update(coupon: CouponDefinition, accountId?: number): Promise<CouponDefinition>
    {
        return await this.client
            .asAccount(accountId || coupon.AccountId)
            .put(ITEM, { Id: coupon.CampaignId }, coupon);
    }

    public async redeem(code: string, accountId?: number): Promise<CouponRedemption>
    {
        return await this.client
            .asAccount(accountId)
            .post(REDEEM, { }, code);
    }

    public async getRedemptionDetails(id: number, accountId?: number): Promise<CouponRedemptionDetails>
    {
        return await this.client
            .asAccount(accountId)
            .get(REDEMPTION_DETAILS, { Id: id });
    }
}

/* ================================================================================================================= */
