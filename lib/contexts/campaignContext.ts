import { IRestClient, ICollection } from "../interfaces";

import { Campaign } from "../models";

import { ICampaignContext, CampaignListOptions } from "./interfaces";

const ITEM: string = "account/{AccountId}/campaign/{Id}";
const LIST: string = "account/{AccountId}/campaign?onlyMine={onlyMine}";

export class CampaignContext implements ICampaignContext
{
    private client: IRestClient;

    public constructor(client: IRestClient)
    {
        this.client = client;
    }

    private get CurrentAccountId(): number
    {
        return 0; // TODO: Get Current account here
    }

    public async get(id: number, accountId?: number): Promise<Campaign>
    {
        accountId = accountId || this.CurrentAccountId;

        return await this.client.get(ITEM, { AccountId: accountId, Id: id });
    }

    public async getAll(options?: CampaignListOptions): Promise<ICollection<Campaign>>
    {
        if (options)
        {
            options.accountId = options.accountId || this.CurrentAccountId;
            options.onlyMine = options.onlyMine || false;
        }
        else
            options = { accountId: this.CurrentAccountId, onlyMine: false };

        return await this.client.get(LIST, options);
    }

    public async create(campaign: Campaign, accountId?: number): Promise<Campaign>
    {
        accountId = accountId || this.CurrentAccountId;

        return await this.client.post(LIST, { accountId: accountId }, campaign);
    }

    public async update(campaign: Campaign): Promise<Campaign>
    {
        if (!campaign.Id)
            throw "Invalid campaign ID";

        campaign.AccountId = campaign.AccountId || this.CurrentAccountId;

        return await this.client.put(ITEM, { id: campaign.Id, accountId: campaign.AccountId }, campaign);
    }

    public async delete(campaign: Campaign | number, accountId?: number): Promise<void>
    {
        if (typeof campaign !== "number")
        {
            accountId = campaign.AccountId || accountId || this.CurrentAccountId;
            campaign = campaign.Id;
        }

        if (!campaign)
            throw "Invalid campaign ID";

        await this.client.delete(ITEM, { id: campaign, accountId: accountId });
    }
}