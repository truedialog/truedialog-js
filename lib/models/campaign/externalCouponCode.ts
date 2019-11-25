/* ================================================================================================================= */

import { BaseAccount } from "../base";

/* ================================================================================================================= */
/**
 * A coupon code assosiated with an external coupon list.
 */
export class ExternalCouponCode extends BaseAccount
{
    /**
     * The customer who received the external coupon code
     */
    public ContactId?: number;

    /**
     * The external coupon code
     */
    public CouponCode: string;

    /**
     * The date when the external coupon code is created
     */
    public Created: Date;

    /**
     * External Coupon list Id associated with this coupon code
     */
    public ListId: number;

    /**
     * Reservation token identifier for this coupon code
     */
    public ReservationToken: string;
}

/* ================================================================================================================= */
