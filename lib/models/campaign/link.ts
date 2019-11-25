/* ================================================================================================================= */

import { LinkType } from "../../enums";

import { BaseAudited } from "../base";

/* ================================================================================================================= */
/**
 * Describes a link that can be sent in a razor template.
 * 
 * Links are shortened when we send them. This is to save characters when readling with SMS messages.
 */
export class Link extends BaseAudited
{
    /**
     * The campaign this link is part of.
     */
    public CampaignId?: number;

    /**
     * The contact attribute ID to append to the URL if desired.
     */
    public ContactAttributeDefinitionId?: number;

    /**
     * The type of link this is. Either Static or Dynamic
     */
    public LinkTypeId: number;

    /**
     * The name of the link.
     */
    public Name: string;

    /**
     * The URL we should redirect to.
     */
    public RedirectURL: string;

    /**
     * Set if we should request the user's location before redirecting.
     */
    public RequestLocation: boolean;

    /**
     * The short URL to use.
     */
    public ShortBaseURL: string;

    /**
     * The contact attribute ID to be updated.
     */
    public UpdateContactAttributeDefinitionId?: number;

    /**
     * The value to update the contact attribute to.
     */
    public UpdateContactAttributeValue: string;

    /**
     * Enumeration mapping to LinkTypeId
     */
    public get LinkType(): LinkType
    {
        return this.LinkTypeId;
    }

    public set LinkType(type: LinkType)
    {
        this.LinkTypeId = type;
    }
}

/* ================================================================================================================= */
