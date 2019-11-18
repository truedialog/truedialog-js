import { SoftDeletable } from "../base";

export enum ActionType
{
    AttachKeyword = 1,
    SendSMS = 2,
    PushCampaign = 3,
    DialogCallback = 4,
    StopCallback = 5,
    KeywordCallback = 6,
    ChargifyCallback = 7,
    NowAccountCallback = 8,
    ImportContacts = 13,
    KillCampaignPush = 14
}

export class Action extends SoftDeletable
{
    /**
     * The type of action this is.
     */
    public TypeId: number;

    /**
     * The type of action this is.
     * 
     * This is an enumerated alias for TypeId.
     */
    public get Type(): ActionType
    {
        return this.TypeId;
    }

    public set Type(type: ActionType)
    {
        this.TypeId = type;
    }
}
