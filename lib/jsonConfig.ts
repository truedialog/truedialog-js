/* ================================================================================================================= */

import { readFileSync } from "fs";

import { IConfigProvider, Map } from "./interfaces";

/* ================================================================================================================= */
/**
 * This is a very simplistic configuration provider.
 * 
 * It is recommended you create your own to suit your application's needs.
 */
export class JsonConfig implements IConfigProvider
{
    private readonly config: Map<any>;

    constructor()
    {
        let data: Buffer = readFileSync("config.json");
        this.config = JSON.parse(data.toString());
    }

    public get(name: string): any
    {
        return this.config[name];
    }
}

/* ================================================================================================================= */
