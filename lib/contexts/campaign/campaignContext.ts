/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../../interfaces";

import { Campaign } from "../../models";

import { ICampaignContext, CampaignListOptions } from "../interfaces";

/* ================================================================================================================= */

const ITEM: string = "account/{AccountId}/campaign/{Id}";
const LIST: string = "account/{AccountId}/campaign?onlyMine={onlyMine}";

/* ================================================================================================================= */

export class CampaignContext implements ICampaignContext
{
    public constructor(@inject(IRestClient) private readonly client: IRestClient)
    {
        this.client = client;
    }

    public async get(id: number, accountId?: number): Promise<Campaign>
    {
        return await this.client
            .asAccount(accountId)
            .get(ITEM, { Id: id });
    }

    public async getAll(options?: CampaignListOptions): Promise<Campaign[]>
    {
        if (options)
            options.onlyMine = options.onlyMine || false;
        else
            options = { accountId: null, onlyMine: false };

        return await this.client
            .asAccount(options.accountId)
            .get(LIST, options);
    }

    public async create(campaign: Campaign, accountId?: number): Promise<Campaign>
    {
        return await this.client
            .asAccount(accountId)
            .post(LIST, { }, campaign);
    }

    public async update(campaign: Campaign): Promise<Campaign>
    {
        if (!campaign.Id)
            throw new Error("Invalid campaign ID");

        return await this.client
            .asAccount(campaign.AccountId)
            .put(ITEM, { id: campaign.Id }, campaign);
    }

    public async delete(campaign: Campaign | number, accountId?: number): Promise<void>
    {
        if (typeof campaign !== "number")
        {
            accountId = campaign.AccountId || accountId;
            campaign = campaign.Id;
        }

        if (!campaign)
            throw new Error("Invalid campaign ID");

        await this.client
            .asAccount(accountId)
            .delete(ITEM, { id: campaign });
    }
}

/* ================================================================================================================= */
