import { IRestClient, IConfigProvider, Map } from "./interfaces";

import fetch from "node-fetch";

// Add atob for node.js

function atob(str: string): string
{
    return Buffer.from(str).toString("base64");
}

export class RestClient implements IRestClient
{
    private baseUri: string;
    private creds: string;
    private accountId: number;
    private asAccountId?: number;
    
    constructor(config: IConfigProvider)
    {
        this.baseUri = config.get("baseUri");

        let key = config.get("apiKey");
        let secret = config.get("secret");

        // TODO: Add more checks on config values.

        if (!this.baseUri)
        {
            throw "Missing baseUri config";
        }

        if (!key || !secret)
        {
            throw "Missing credentials in config";
        }
        
        this.creds = "Basic " + atob(key + ":" + secret);

        this.accountId = config.get("accountId");

        if (!this.accountId)
            throw "Missing accountId in config"

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

    public async get<T>(uri: string, args: any): Promise<T>
    {
        uri = this.subsitute(uri, args);

        console.log("Requesting: " + this.baseUri + uri);

        const response = await fetch(this.baseUri + uri, {
            method: 'GET',
            headers: {
                "Authorization": this.creds,
                "Accept": "application/json"
            }
        });

        return await response.json();
    }

    public async post<S, T>(uri: string, args: any, body: S): Promise<T>
    {
        uri = this.subsitute(uri, args);

        const response = await fetch(this.baseUri + uri, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Authorization": this.creds,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        return await response.json();
    }

    public async put<S, T>(uri: string, args: any, body: S): Promise<T>
    {
        uri = this.subsitute(uri, args);

        const response = await fetch(this.baseUri + uri, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                "Authorization": this.creds,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        return await response.json();
    }

    public async delete<T>(uri: string, args: any): Promise<T>
    {
        uri = this.subsitute(uri, args);

        const response = await fetch(this.baseUri + uri, {
            method: 'DELETE',
            headers: {
                "Authorization": this.creds,
                "Accept": "application/json"
            }
        });

        return await response.json();
    }
}