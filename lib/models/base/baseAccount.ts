/* ================================================================================================================= */

import { Base } from "./base";

/* ================================================================================================================= */

/**
 * An item that is owned by an account
 */
export class BaseAccount extends Base
{
    /**
     * The account which owns this object.
     */
    public AccountId: number;
}

/* ================================================================================================================= */
