/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../../interfaces";

import { Link } from "../../models";

import { ILinkContext } from "../interfaces";

import { BaseContext } from "../baseContext";

/* ================================================================================================================= */

const LIST: string = "account/{AccountId}/link";
const ITEM: string = "account/{AccountId}/link/{Id}";

/* ================================================================================================================= */

export class LinkContext extends BaseContext<Link> implements ILinkContext
{
    constructor(@inject(IRestClient) client: IRestClient)
    {
        super(client, ITEM, LIST);
    }
}

/* ================================================================================================================= */
