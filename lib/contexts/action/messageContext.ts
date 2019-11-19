/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../../interfaces";

import { ActionPushCampaign } from "../../models";

import { IMessageContext } from "../interfaces";

import { BaseContext } from "../baseContext";

/* ================================================================================================================= */

const ITEM: string = "account/{AccountId}/action-pushCampaign/{Id}";
const LIST: string = "account/{AccountId}/action-pushCampaign";

/* ================================================================================================================= */

export class MessageContext extends BaseContext<ActionPushCampaign> implements IMessageContext
{
    constructor(@inject(IRestClient) client: IRestClient)
    {
        super(client, ITEM, LIST);
    }
}

/* ================================================================================================================= */
