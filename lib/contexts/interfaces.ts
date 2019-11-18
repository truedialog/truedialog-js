import { ICollection } from "../interfaces";

import { Account, Campaign } from "../models";

export interface IAccountContext
{
    get(id: number): Promise<Account>;
    getAll(): Promise<ICollection<Account>>;
    create(account: Account): Promise<Account>;
    update(account: Account): Promise<Account>;
    delete(account: number | Account): Promise<void>;
}

export const IAccountContext: unique symbol = Symbol("td:sdk:context:account");

export interface CampaignListOptions
{
    accountId?: number;
    onlyMine?: boolean;
}

export interface ICampaignContext
{
    get(id: number, accountId?: number): Promise<Campaign>;
    getAll(options?: CampaignListOptions): Promise<ICollection<Campaign>>;
    create(campaign: Campaign, accountId?: number): Promise<Campaign>;
    update(campaign: Campaign): Promise<Campaign>;
    delete(campaign: Campaign | number, accountId?: number): Promise<void>;
}

export const ICampaignContext: unique symbol = Symbol("td:sdk:context:campaign");
