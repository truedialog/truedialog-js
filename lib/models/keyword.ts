/* ================================================================================================================= */

import { SoftDeletable } from "./base";

/* ================================================================================================================= */
/**
 * A reserved keyword
 * 
 * Keywords provide a way for contacts to text into the system to initiate a campaign.
 */
export class Keyword extends SoftDeletable
{
    /**
     * The channel this keyword is reserved on.
     */
    public ChannelId: number;

    /**
     * The short or long code this keyword is reserved on.
     */
    public ChannelCode: string;

    /**
     * The campaign this keyword is currently attached to.
     * 
     * If this is NULL then the keyword is not attached to any campaign and will not generate a response.
     */
    public CampaignId?: number;

    /**
     * The keyword name to reserve.
     * 
     * Keywords cannot contain spaces.
     *
     * Keywords are shared across a channel, so if someone else has a keyword of the same name you will have to select
     * a different keyword or use a different channel where it is not already reserved.
     */
    public Name: string;

    /**
     * Set if a callback should be generated on this keyword.
     */
    public CallbackRequired: boolean;
}

/* ================================================================================================================= */

export type KeywordId = Keyword | string;

/* ================================================================================================================= */
