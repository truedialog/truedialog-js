/* ================================================================================================================= */

import { inject } from "lepton-di";

import { IRestClient } from "../../interfaces";

import { Channel } from "../../models";

import { IChannelContext } from "../interfaces";

/* ================================================================================================================= */

const LIST: string = "account/{AccountId}/channel/";

/* ================================================================================================================= */

export class ChannelContext implements IChannelContext
{
    public constructor(@inject(IRestClient) private readonly client: IRestClient)
    {
        this.client = client;
    }

    public async getAll(accountId?: number): Promise<Channel[]>
    {
        return await this.client
            .asAccount(accountId)
            .get(LIST, { });
    }
}

/* ================================================================================================================= */

