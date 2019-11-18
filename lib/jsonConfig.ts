import { IConfigProvider, Map } from "./interfaces";

import { readFileSync } from "fs";

export class JsonConfig implements IConfigProvider
{
    private config: Map<any>;    

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
