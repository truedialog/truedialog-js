/* ================================================================================================================= */

import { IRestClient } from "../interfaces";

import { BaseAccount } from "../models";

/* ================================================================================================================= */

export class BaseContext<T extends BaseAccount>
{
    protected readonly client: IRestClient;
    protected readonly itemUrl: string;
    protected readonly listUrl: string;

    protected constructor(client: IRestClient, itemUrl: string, listUrl: string)
    {
        this.client = client;
        this.itemUrl = itemUrl;
        this.listUrl = listUrl;
    }

    public async get(id: number, accountId?: number): Promise<T>
    {
        return await this.client
            .asAccount(accountId)
            .get(this.itemUrl, { Id: id });
    }

    public async getAll(accountId?: number): Promise<T[]>
    {
        return await this.client
            .asAccount(accountId)
            .get(this.listUrl, {});
    }

    public async create(item: T, accountId?: number): Promise<T>
    {
        return await this.client
            .asAccount(accountId)
            .post(this.listUrl, {}, item);
    }

    public async update(item: T): Promise<T>
    {
        if (!item.Id)
            throw new Error("Invalid item ID");

        return await this.client
            .asAccount(item.AccountId)
            .put(this.itemUrl, { Id: item.Id }, item);
    }

    public async delete(item: T | number, accountId?: number): Promise<void>
    {
        if (typeof item !== "number")
        {
            accountId = item.AccountId || accountId;
            item = item.Id;
        }

        if (!item)
            throw new Error("Invalid item ID");

        await this.client
            .asAccount(accountId)
            .delete(this.itemUrl, { id: item, accountId: accountId });
    }
}

/* ================================================================================================================= */
