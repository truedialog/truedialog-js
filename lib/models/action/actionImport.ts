/* ================================================================================================================= */

import { ICollection } from "../../interfaces";

import { ContactSubscription } from "../contact";

import { ActionBase } from "./actionBase";

/* ================================================================================================================= */

export class ActionImport extends ActionBase
{
    /**
     * Points to a BLOB url that contains the file to parse.
     */
    public Url: string;

    /**
     * A list of subscriptions that should be added or modified for each of the contacts in the supplied file.
     */
    public Subscriptions: ICollection<ContactSubscription>;

    /**
     * If set, creates a contact list from this import.
     */
    public CreateList: boolean;

    /**
     * Set to include contacts that have been created during this import only
     */
    public CreatedOnly: boolean;

    /**
     * Name of contact list to create if CreateList is set.
     */
    public ListName: string;
}

/* ================================================================================================================= */
