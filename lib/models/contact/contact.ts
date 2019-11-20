/* ================================================================================================================= */

import { SoftDeletable } from "../base";

import { ContactAttribute } from "./contactAttribute";
import { ContactSubscription } from "./contactSubscription";

/* ================================================================================================================= */

export class Contact extends SoftDeletable
{
    /**
     * Mobile number if available
     */
    public PhoneNumber: string;

    /**
     * Email address of the contact.
     */
    public Email: string;

    /**
     * List of attributes set on this contact.
     */
    public Attributes: ContactAttribute[];

    /**
     * List of subscription details for this contact.
     */
    public Subscriptions: ContactSubscription[];
}

/* ================================================================================================================= */
