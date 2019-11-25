/* ================================================================================================================= */
/**
 * The status of the coupon.
 */
export enum CouponStatus
{
    /**
     * The coupon has been redeemed
     */
    Redeemed = 0,

    /**
     * The coupon code was not found
     */
    NotFound = 1,

    /**
     * The coupon has expired
     */
    Expired = 2,

    /**
     * The number of times this coupon can be used has been reached.
     */
    LimitReached = 3,

    /**
     * The coupon is not yet valid.
     */
    NotStarted = 4
}

/* ================================================================================================================= */
