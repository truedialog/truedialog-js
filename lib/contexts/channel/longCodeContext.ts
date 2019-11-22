/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../../interfaces";

import { LongCode } from "../../models";

import { ILongCodeContext } from "../interfaces";

/* ================================================================================================================= */

const LIST_SIMPLE: string = "account/{accountId}/long-code/";
const LIST_FULL: string = "account/{accountId}/long-code-direct/";
const FORWARDING: string = "/account/{accountId}/long-code/{longCode}/callforwarding";
const FORWARD_VERIFY: string = "account/{accountId}/long-code/{longCode}/callforwardingverification";

/* ================================================================================================================= */

export class LongCodeContext implements ILongCodeContext
{
    public constructor(@inject(IRestClient) private readonly client: IRestClient)
    {
        this.client = client;
    }

    private cleanAni(ani: string): string
    {
        return ani.replace(/[\+-\.\(\)]/g, "");
    }
    
    public async getAllSimple(accountId?: number): Promise<string[]>
    {
        return this.client
            .asAccount(accountId)
            .get(LIST_SIMPLE, {});
    }

    public async getAll(accountId?: number): Promise<LongCode[]>
    {
        return this.client
            .asAccount(accountId)
            .get(LIST_FULL, {});
    }

    public async get(ani: string, accountId?: number): Promise<LongCode>
    {
        return await this.client
            .asAccount(accountId)
            .get(FORWARDING, { longCode: this.cleanAni(ani) });
    }

    public async setForwarding(fromAni: string, toAni: string, accountId?: number): Promise<LongCode>
    {
        return await this.client
            .asAccount(accountId)
            .post(FORWARDING, { longCode: this.cleanAni(fromAni) }, "+" + this.cleanAni(toAni));
    }

    public async removeForwarding(fromAni: string, accountId?: number): Promise<LongCode>
    {
        return await this.client
            .asAccount(accountId)
            .delete(FORWARDING, { longCode: this.cleanAni(fromAni) });
    }

    public async verifyForwarding(fromAni: string, code: string, accountId?: number): Promise<boolean>
    {
        try
        {
            let lc: LongCode = await this.client
                .asAccount(accountId)
                .post(FORWARD_VERIFY, { longCode: this.cleanAni(fromAni) }, code)

            return lc != null;
        }
        catch
        {
            return false;
        }
    }
}

/* ================================================================================================================= */

