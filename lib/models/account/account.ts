/* ================================================================================================================= */

import { Base } from "../base";

import { AccountAttribute } from "./accountAttribute";

/* ================================================================================================================= */

export class Account extends Base
{
    /**
     * The current status of the account
     */
    public StatusId: number;

    /**
     * The parent account which owns this account.
     */
    public ParentId: number;

    /**
     * The name of the account.
     */
    public Name: string;

    /**
     * When the account was created (readonly)
     */
    public Created: string;

    /**
     * Set if the account is allowed to make callbacks.
     */
    public AllowCallbacks: boolean;

    /**
     * Token that is used when making callbacks.
     */
    public CallbackToken: string;

    /**
     * List of channel IDs this account is able to send and receive on.
     */
    public Channels: [number];

    public Attributes: AccountAttribute[];

    /**
     * 
     */
    public Type: number;

    /**
     * 
     */
    public AccountType: number;

    /**
     * 
     */
    public IsApproved: boolean
}

/* ================================================================================================================= */
