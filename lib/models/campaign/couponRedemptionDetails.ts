/* ================================================================================================================= */

import { CouponRedemption } from "./couponRedemption";

/* ================================================================================================================= */
/**
 * Statics about a coupons redemption rates.
 */
export class CouponRedemptionDetails
{
    /**
     * Total redemptions count
     */
    public RedemptionCount: number;

    /**
     * Count of redemptions performed too early
     */
    public TooEarlyCount: number;

    /**
     * Count of redemptions performed too late
     */
    public TooLateCount: number;

    /**
     * Count of redemptions over MaxUses count
     */
    public TooManyCount: number;

    /**
     * Total bad redemptions count
     */
    public TotalBadCount: number;

    /**
     * First successful redemption
     */
    public FirstSuccessful: CouponRedemption;

    /**
     * Last successful redemption
     */
    public LastSuccessful: CouponRedemption;
}

/* ================================================================================================================= */
