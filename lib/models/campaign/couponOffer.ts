/* ================================================================================================================= */

import { SoftDeletable } from "../base";

/* ================================================================================================================= */
/**
 * Holds details of coupon offer (used for landing page)
 */
export class CouponOffer extends SoftDeletable
{
    /**
     * The campaign this offer is for
     */
    public CampaignId: number;

    /**
     * Regular offer (without coupon)
     */
    public RegularOffer: string;

    /**
     * Coupon offer (when coupon applied)
     */
    public NewOffer: string;

    /**
     * Offer image URL
     */
    public ImageURL: string;

    /**
     * Terms and conditions of this offer
     */
    public TermsAndConditions: string;

    /**
     * URL to use as base when sending to user
     */
    public UrlBase: string;
}

/* ================================================================================================================= */
