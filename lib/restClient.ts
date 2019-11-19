/* ================================================================================================================= */

import fetch from "node-fetch";

import { inject } from "lepton-di";

import { IRestClient, ILogger, IConfigProvider, Map } from "./interfaces";

import { atob } from "./utils";

/* ================================================================================================================= */

const JSON_TYPE: string = "application/json";

/* ================================================================================================================= */

export class RestClient implements IRestClient
{
    private readonly baseUri: string;
    private readonly creds: string;
    private readonly accountId: number;

    private asAccountId?: number;
    
    constructor(@inject(IConfigProvider) config: IConfigProvider, @inject(ILogger) private readonly log?: ILogger)
    {
        this.baseUri = config.get("baseUri");

        let key = config.get("apiKey");
        let secret = config.get("secret");

        if (!this.baseUri)
            throw new Error("Missing baseUri config");

        if (!key || !secret)
            throw new Error("Missing credentials in config");
        
        this.creds = "Basic " + atob(key + ":" + secret);

        this.accountId = config.get("accountId");

        if (!this.accountId)
            throw new Error("Missing accountId in config");

        this.asAccountId = null;
    }

    public asAccount(id: number): IRestClient
    {
        this.asAccountId = id;
        return this;
    }

    private subsitute(uri: string, args: any): string
    {
        args.AccountId = this.asAccountId || this.accountId;
        this.asAccountId = null;

        let dict: Map<any> = args;

        let replacer = function(match: string): string 
        {
            let val = dict[match.substr(1, match.length - 2)];

            if (typeof val === "function")
                val = val.call(args);

            return val?.toString() || "";
        }

        return uri.replace(/(\{.*?\})/g, replacer);
    }

    private parseType(type: string): string
    {
        let idx = type.indexOf(';');

        if (idx === -1)
            return type;

        return type.substr(0, idx);
    }

    private async request<T>(method: string, uri: string, args: any, body?: any): Promise<T>
    {
        uri = this.subsitute(uri, args);

        this.log?.debug(`${method}: ${this.baseUri}${uri}`);

        let headers = {
            "Authorization": this.creds,
            "Content-Type": JSON_TYPE,
            "Accept": JSON_TYPE
        }

        if (body && typeof body !== "string")
            body = JSON.stringify(body);

        const response = await fetch(this.baseUri + uri, {
            method: method,
            body: body,
            headers: headers
        });

        let ct = this.parseType(response.headers.get("Content-type"));

        if (ct == JSON_TYPE)
            return await response.json();

        let text = await response.text();
        this.log?.warn(`Unable to handle ${ct} response data: ${text}`);
    }

    public async get<T>(uri: string, args: any): Promise<T>
    {
        return await this.request<T>("GET", uri, args);
    }

    public async post<S, T>(uri: string, args: any, body: S): Promise<T>
    {
        return await this.request<T>("POST", uri, args, body);
    }

    public async put<S, T>(uri: string, args: any, body: S): Promise<T>
    {
        return await this.request<T>("PUT", uri, args, body);
    }

    public async delete<T>(uri: string, args: any): Promise<T>
    {
        return await this.request<T>("DELETE", uri, args);
    }
}

/* ================================================================================================================= */
