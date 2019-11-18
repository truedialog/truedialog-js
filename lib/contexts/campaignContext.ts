import { IRestClient, ICollection } from "../interfaces";

import { Campaign } from "../models";

import { ICampaignContext, CampaignListOptions } from "./interfaces";

const ITEM: string = "account/{AccountId}/campaign/{Id}";
const LIST: string = "account/{AccountId}/campaign?onlyMine={onlyMine}";

export class CampaignContext implements ICampaignContext
{
    private readonly client: IRestClient;

    public constructor(client: IRestClient)
    {
        this.client = client;
    }

    public async get(id: number, accountId?: number): Promise<Campaign>
    {
        return await this.client
            .asAccount(accountId)
            .get(ITEM, { AccountId: accountId, Id: id });
    }

    public async getAll(options?: CampaignListOptions): Promise<ICollection<Campaign>>
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
            .post(LIST, { accountId: accountId }, campaign);
    }

    public async update(campaign: Campaign): Promise<Campaign>
    {
        if (!campaign.Id)
            throw "Invalid campaign ID";

        return await this.client
            .asAccount(campaign.AccountId)
            .put(ITEM, { id: campaign.Id, accountId: campaign.AccountId }, campaign);
    }

    public async delete(campaign: Campaign | number, accountId?: number): Promise<void>
    {
        if (typeof campaign !== "number")
        {
            accountId = campaign.AccountId || accountId;
            campaign = campaign.Id;
        }

        if (!campaign)
            throw "Invalid campaign ID";

        await this.client
            .asAccount(accountId)
            .delete(ITEM, { id: campaign, accountId: accountId });
    }
}