/* ================================================================================================================= */

import { BaseAccount } from "../base";

/* ================================================================================================================= */

export class ContactAttribute extends BaseAccount
{
    /**
     * Contact to which this property belongs.
     */
    public ContactId: number;

    /**
     * The name of the attribute that is set.
     */
    public Name: string;

    /**
     * The value that is set for this attribute.
     */
    public Value: string;
}

/* ================================================================================================================= */
