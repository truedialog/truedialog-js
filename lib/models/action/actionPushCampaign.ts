/* ================================================================================================================= */

import { ActionBase } from "./actionBase";

/* ================================================================================================================= */

export class ActionPushCampaign extends ActionBase
{
    /**
     * The channels the campaign will be (or was) sent on.
     */
    public Channels: string[];

    /**
     * Set to send message based on contact's AssignedId attribute.
     */
    public RoundRobinById: boolean;

    /**
     * A list of targets this event will be (or was) sent to.
     * 
     * Targets can be a mixture of email addresses, phone numbers, and contact IDs.
     * 
     * Note: In order for ths ystem to differentiate a phone number from a contact ID, phone numbers must be
     * prefixed with their country dialing code. E.g.: {@code (221) 555-0100} should be listed as {@code +12215550100}
     */
    public Targets: string[];

    /**
     * A URL pointing to a list of targets to send to.
     * 
     * Either a target list, contact list Id, or torget URL list is REQUIRED.
     * 
     * The supplied resource at the listed URL needs to be in a specific CSV format.
     */
    public TargetsUrl: string;

    /**
     * Name of column from TargetsUrl file that contains phone numbers.
     */
    public TargetsColumn: string;

    /**
     * The contact lists to use for getting a list of contacts.
     * 
     * Generation of contact lists are not yet supported by this SDK, but they can be created via raw API calls and
     * using our Portal.  If you do create a contact list in this way, you can supply the generated ID here without
     * any issues.
     */
    public ContactListIds: number[];

    /**
     * A contact lists to suppress from contact list. (OPTIONAL)
     */
    public ExcludeListIds: number[];

    /**
     * The campaign to send (or was sent)
     */
    public CampaignId: number;

    /**
     * Ignore a campaign's SingleUse flag.
     * 
     * If a campaign is marked as single use, then it will only get sent to a particular contact once and only once.
     * Setting this value will force the message to get sent regardless of the SingleUse flag setting on the campaign.
     * 
     * This can be handy if you have a particular contact who did not receive the message and you would like to resend
     * it to them.
     */
    public IgnoreSingleUse: boolean;

    /**
     * Forces the contacts to be opted into the subscription defined on the campaign.
     */
    public ForceOptIn: boolean;

    // These fields are only needed for gateway campaigns.  For all other campaign types they will be ignored.

    /**
     * The message text for use on gateway campaigns. (Gateway only)
     */
    public Message: string;

    /**
     * The media file to push. (Gateway only)
     */
    public MediaId?: number;

    /**
     * The "from" line to use for sending to an email channel. (Gateway only)
     * 
     * If it is not filled in, a default from field will be used.s
     */
    public From: string;

    /**
     * The "Subject" line to use when sending to an email channel. (Gateway only)
     * 
     * This field is ignored when being sent to all other types of channels.
     */
    public Subject: string
}

/* ================================================================================================================= */
