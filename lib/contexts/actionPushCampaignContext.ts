import { IRestClient } from "../interfaces";

import { ActionPushCampaign } from "../models";

import { IActionPushCampaignContext } from "./interfaces";

import { BaseContext } from "./baseContext";

const ITEM: string = "account/{AccountId}/action-pushCampaign/{Id}";
const LIST: string = "account/{AccountId}/action-pushCampaign";

export class ActionPushCampaignContext extends BaseContext<ActionPushCampaign> implements IActionPushCampaignContext
{
    constructor(client: IRestClient)
    {
        super(client, ITEM, LIST);
    }
}
