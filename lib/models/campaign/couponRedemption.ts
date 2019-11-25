/* ================================================================================================================= */

import { CouponStatus } from "../../enums";

/* ================================================================================================================= */
/**
 * Details of a redeemed coupon
 */
export class CouponRedemption
{
    /**
     * The campaign for which the coupon was defined under.
     */
    public CampaignId?: number;

    /**
     * The customer who attempted to redeem the coupon.
     */
    public ContactId?: number;

    /**
     * The actual code submitted for redemption
     */
    public CouponCode: string;

    /**
     * The status of the redemption attempt.
     * 
     * Non zero means failure.
     */
    public CouponStatus: CouponStatus;

    /**
     * When this coupon redemption was created
     */
    public Created: Date;
}

/* ================================================================================================================= */
