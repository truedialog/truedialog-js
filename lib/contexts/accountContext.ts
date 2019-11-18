import { IRestClient, ICollection } from "../interfaces";

import { Account } from "../models";

import { IAccountContext } from "./interfaces";

import { BaseContext } from "./baseContext";

const ITEM = "account/{Id}";
const LIST = "account";

export class AccountContext extends BaseContext<Account> implements IAccountContext
{
    public constructor(client: IRestClient)
    {
        super(client);
    }

    public async get(id: number): Promise<Account>
    {
        return await super.client.get(ITEM, { Id: id });
    }

    public async getAll(): Promise<ICollection<Account>>
    {
        return await super.client.get(LIST, {});
    }

    public async create(account: Account): Promise<Account>
    {
        return await super.client.post(LIST, {}, account);
    }

    public async update(account: Account): Promise<Account>
    {
        return await super.client.put(ITEM, { Id: account.Id }, account);
    }

    public async delete(account: number | Account): Promise<void>
    {
        if (typeof account !== "number")
            account = account.Id;

        await super.client.delete(ITEM, { Id: account });
    }
}
