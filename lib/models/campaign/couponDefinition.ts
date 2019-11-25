/* ================================================================================================================= */

import { CouponType, ValidDateType } from "../../enums";

import { ExternalCouponList } from "./externalCouponList";

/* ================================================================================================================= */

export class CouponDefinition
{
    public constructor()
    {
        this.MaxUses = 1;
    }

    /**
     * The account this coupon belongs to
     */
    public AccountId: number;

    /**
     * The campaign this coupon belongs to
     */
    public CampaignId: number;

    /**
     * The type of coupon that's being defined, Static or Dynamic. (REQUIRED)
     */
    public CouponTypeId: number;

    /**
     * The prefix code for the coupon. (OPTIONAL)
     */
    public Prefix: string;

    /**
     * The static code for the coupon.
     * 
     * This field is required if the coupon type is Static
     */
    public StaticCode: string;

    /**
     * A user definable ID value. (OPTIONAL)
     */
    public ExternalId1: string;

    /**
     * A second user definable ID value. (OPTIONAL)
     */
    public ExternalId2: string;

    /**
     * The date we should start allowing coupons to be redeemed. (OPTIONAL)
     * 
     * NULL indicates no start date.  I.e. accept immediately.
     */
    public ValidFrom?: Date;

    /**
     * The date we should stop allowing coupons to be redeemed. (OPTIONAL)
     * 
     * NULL indicates no expiration date.
     */
    public ValidTo?: Date;

    /**
     * The maximum number of allowed uses per customer. (OPTIONAL)
     * 
     * Zero indicates that there is no maximum.  Default is 1 if not specified.
     */
    public MaxUses: number;

    /**
     * Coupon Code valid DateTypeId i.e. None or Static or Rolling (OPTIONAL)
     */
    public ValidDateTypeId?: number;

    /**
     * Number of days that coupon code is valid for the Rolling date type Coupon Code 
     * 
     * This property is required if ValidDateType is Rolling
     */
    public ValidRollingDays?: number;

    /**
     * Rolling offset days of the coupon code
     * 
     * This property is required if ValidDateType is Rolling
     */
    public ValidRollingOffset?: number;

    /**
     * External Coupon List Id value
     * 
     * Either ExternalListId or ExternalCouponList is Required if the CouponType is External
     */
    public ExternalListId?: number;

    /**
     * External Coupon List details
     * 
     * Either ExternalCouponList or ExternalListId is Required if the CouponType is External
     */
    public ExternalCouponList: ExternalCouponList;

    /**
     * User definable name for this coupon. (OPTIONAL)
     */
    public Name: string;

    /**
     * User definable coupon description. (OPTIONAL)
     */
    public Description: string;

    /**
     * Enumeration mapping for CouponTypeId
     */
    public get CouponType(): CouponType
    {
        return this.CouponTypeId;
    }

    public set CouponType(type: CouponType)
    {
        this.CouponTypeId = type;
    }

    /**
     * Enumeration mapping for ValidDateTypeId
     */
    public get ValidDateType(): ValidDateType
    {
        return this.ValidDateTypeId;
    }

    public set ValidDateType(type: ValidDateType)
    {
        this.ValidDateTypeId = type;
    }
}

/* ================================================================================================================= */
