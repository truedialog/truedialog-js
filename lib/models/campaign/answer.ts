/* ================================================================================================================= */

import { BaseAccount } from "../base";

/* ================================================================================================================= */
/**
 * Campaign question answer definition
 */
export class Answer extends BaseAccount
{
    /**
     * Campaign question answer belogs to
     */
    public CampaignId: number;

    /**
     * The next campaign to run in the survey.
     */
    public NextCampaignId: number;

    /**
     * The ID of the text message content.
     */
    public ContentId?: number;

    /**
     * The content of the answer.
     */
    public Content: string;

    /**
     * A regular expression that is used to validate the user's response to the answer.
     */
    public Validator: string;

    /**
     * A user definable ID to order the answers by on multiple choise questions.
     */
    public OrderingId: number;

    /**
     * The value that is actually saved when we receive this answer.
     */
    public Value: string;

    /**
     * The value that is actually saved when we receive this answer.
     */
    public StartChat: boolean;

    /**
     * List of accounts (or one account) to start chat session with.
     */
    public TargetAccounts: string;

    /**
     * Set to ignore value if AssignedId already exists
     */
    public OverrideAccountId: boolean;

    /**
     * Set to reassign AssignedId to new value
     */
    public ReassignAccountId: boolean;

    /**
     * The lable to display in the user interface.
     */
    public Label: string;

    /**
     * The description of the answer.
     * 
     * Extra field for UI stuff.
     */
    public Description: string;
}

/* ================================================================================================================= */
