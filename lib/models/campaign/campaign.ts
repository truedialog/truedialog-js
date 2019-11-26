/* ================================================================================================================= */

import { SoftDeletable } from "../base";

import { CampaignType } from "../../enums";

/* ================================================================================================================= */

export class Campaign extends SoftDeletable
{
    /**
     * The subscription that contacts who espond to this campaign are opted into.
     */
    public SubscriptionId: number;

    /**
     * The campaign's name
     * 
     * This is a free form name.
     */
    public Name: string;

    /**
     * The type of campaign.
     * 
     * See the CampaignType property for a named enumerable of this field.
     */
    public CampaignTypeId: number;

    /**
     * The content that this campaign will send.
     * 
     * Gateway campaigns do not contain content.
     */
    public ContentId: number;

    /**
     * Indicates if this campaign will start a session. (Readonly)
     * 
     * E.g. Chat or dialog campaigns.
     */
    public Session: boolean;

    /**
     * The durration that a session will last for this campaign. (Readonly)
     */
    public SessionLength?: number;

    /**
     * Arbitrary user data field.
     * 
     * This is largely used by the TrueDialog UI to save some additional information about the campaign.
     * You are free to attach any opaque data to the campaign for your own use here.
     */
    public UserData: string;

    /**
     * This flag is for checking single send campaign.
     */
    public SingleUse: boolean;

    /**
     * The content to send if the campaign is used more than once.
     */
    public SingleUseContent?: number;

    /**
     * Enumerated alias for CampaignTypeId
     */
    public get CampaignType(): CampaignType
    {
        return this.CampaignTypeId;
    }

    public set CampaignType(type: CampaignType)
    {
        this.CampaignTypeId = type;
    }
}

/* ================================================================================================================= */

export type CampaignId = Campaign | number;

/* ================================================================================================================= */
