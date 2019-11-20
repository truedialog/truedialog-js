/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../interfaces";

import { Account } from "../models";

import { IAccountContext } from "./interfaces";

/* ================================================================================================================= */

const ITEM = "account/{Id}";
const LIST = "account";

/* ================================================================================================================= */

export class AccountContext implements IAccountContext
{
    public constructor(@inject(IRestClient) private readonly client: IRestClient)
    {
        this.client = client;
    }

    public async get(id: number): Promise<Account>
    {
        return await this.client.get(ITEM, { Id: id });
    }

    public async getAll(): Promise<Account[]>
    {
        return await this.client.get(LIST, {});
    }

    public async create(account: Account): Promise<Account>
    {
        return await this.client.post(LIST, {}, account);
    }

    public async update(account: Account): Promise<Account>
    {
        return await this.client.put(ITEM, { Id: account.Id }, account);
    }

    public async delete(account: number | Account): Promise<void>
    {
        if (typeof account !== "number")
            account = account.Id;

        await this.client.delete(ITEM, { Id: account });
    }
}

/* ================================================================================================================= */
