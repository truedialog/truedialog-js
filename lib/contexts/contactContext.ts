/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../interfaces";

import { Contact } from "../models";

import { IContactContext } from "./interfaces";

import { BaseContext } from "./baseContext";

/* ================================================================================================================= */

const ITEM: string = "account/{AccountId}/contact/{Id}";
const LIST: string = "account/{AccountId}/contact";

/* ================================================================================================================= */

export class ContactContext extends BaseContext<Contact> implements IContactContext
{
    constructor(@inject(IRestClient) client: IRestClient)
    {
        super(client, ITEM, LIST);
    }
}

/* ================================================================================================================= */