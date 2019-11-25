/* ================================================================================================================= */

import { BaseAccount } from "../base";

/* ================================================================================================================= */
/**
 * List definition of external coupon codes.
 */
export class ExternalCouponList extends BaseAccount
{
    /**
     * Name of the external coupon list 
     */
    public Name: string;

    /**
     * Description for the external coupon list
     */
    public Description: string;

    /**
     * Set if external coupon list can be shared with the child accounts or not
     */
    public Inheritable: boolean;

    /**
     * Total number of codes available
     */
    public TotalCodesAvailable: number;

    /**
     * A list of coupon codes
     */
    public CouponCodes: string[];
}

/* ================================================================================================================= */
