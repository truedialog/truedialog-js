/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../../interfaces";

import { ActionImport } from "../../models";

import { IImportContext } from "../interfaces";

import { BaseContext } from "../baseContext";

/* ================================================================================================================= */

const ITEM: string = "account/{AccountId}/action-importContacts/{Id}";
const LIST: string = "account/{AccountId}/action-importContacts";

/* ================================================================================================================= */

export class ImportContext extends BaseContext<ActionImport> implements IImportContext
{
    constructor(@inject(IRestClient) client: IRestClient)
    {
        super(client, ITEM, LIST);
    }
}

/* ================================================================================================================= */
