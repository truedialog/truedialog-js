/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../interfaces";

import { Keyword, KeywordId } from "../models";
import { Campaign, CampaignId } from "../models";
import { Contact } from "../models";

import { IKeywordContext } from "./interfaces";

/* ================================================================================================================= */

const ALL_LIST: string = "account/{AccountId}/keyword";
const LIST: string = "account/{AccountId}/channel/{Channel}/keyword";
const ITEM: string = "account/{AccountId}/channel/{Channel}/keyword/{Keyword}";
const KEYWORD_CONTACT: string = "account/{AccountId}/keyword/{Id}/contact";
const KEYWORD_CAMPAIGN: string = "account/{AccountId}/channel/{Channel}/keyword/{Keyword}/campaign";

/* ================================================================================================================= */

export class KeywordContext implements IKeywordContext
{
    public constructor(@inject(IRestClient) private readonly client: IRestClient)
    {
    }

    private condenceId(keyword: KeywordId): string
    {
        if (typeof keyword === "string")
            return keyword;

        return keyword.Name;
    }

    private expandId(keyword: KeywordId): Keyword
    {
        if (typeof keyword === "string")
        {
            let k = new Keyword;
            k.Name = keyword;
            return k;
        }

        return keyword;
    }

    public async getAll(accountId?: number): Promise<Keyword[]>
    {
        return await this.client
            .asAccount(accountId)
            .get(ALL_LIST, {});
    }

    public async getAllOnChannel(channel: string, accountId?: number): Promise<Keyword[]>
    {
        return await this.client
            .asAccount(accountId)
            .get(LIST, { Channel: channel });
    }

    public async get(channel: string, keyword: string, accountId?: number): Promise<Keyword>
    {
        return await this.client
            .asAccount(accountId)
            .get(ITEM, { Channel: channel, Keyword: keyword });
    }

    public async getContacts(channel: string, keyword: KeywordId, accountId?: number): Promise<Contact[]>
    {
        let keywordId: number;

        if (typeof keyword !== "string" && keyword.Id)
            keywordId = keyword.Id;
        else
        {
            keyword = this.condenceId(keyword);
            keyword = await this.get(channel, keyword);

            keywordId = keyword.Id;
        }

        return await this.client
            .asAccount(accountId)
            .get(KEYWORD_CONTACT, { KeywordId: keywordId });
    }

    public async create(channel: string, keyword: KeywordId, accountId?: number): Promise<Keyword>
    {
        keyword = this.expandId(keyword);

        return await this.client
            .asAccount(accountId)
            .post(LIST, { Channel: channel }, keyword);
    }

    public async delete(channel: string, keyword: KeywordId, accountId?: number): Promise<void>
    {
        keyword = this.condenceId(keyword);

        await this.client
            .asAccount(accountId)
            .delete(ITEM, { Channel: channel, Keyword: keyword });
    }

    public async getAttachedCampaign(channel: string, keyword: KeywordId, accountId?: number): Promise<Campaign>
    {
        keyword = this.condenceId(keyword);

        return await this.client
            .asAccount(accountId)
            .get(KEYWORD_CAMPAIGN, { Channel: channel, Keyword: keyword });
    }

    public async attachCampaign(campaign: CampaignId, channel: string, keyword: KeywordId, accountId?: number):
        Promise<void>
    {
        keyword = this.condenceId(keyword);

        if (typeof campaign !== "number")
            campaign = campaign.Id;

        await this.client
            .asAccount(accountId)
            .post(KEYWORD_CAMPAIGN, { Channel: channel, Keyword: keyword }, campaign);
    }

    public async detachCampaign(channel: string, keyword: KeywordId, accountId?: number): Promise<void>
    {
        keyword = this.condenceId(keyword);

        await this.client
            .asAccount(accountId)
            .delete(KEYWORD_CAMPAIGN, { Channel: channel, Keyword: keyword });
    }
}

/* ================================================================================================================= */
