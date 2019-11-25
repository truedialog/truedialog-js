/* ================================================================================================================= */

export enum ValidDateType
{
    /**
     * Coupon code with no FROM and TO dates.
     */
    None = 0,

    /**
     * Coupon code with static FROM and TO dates.
     */
    Static = 1,

    /**
     * Coupon code with rolling FROM and TO dates.
     */
    Rolling = 2
}

/* ================================================================================================================= */
