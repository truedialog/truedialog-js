import { IRestClient } from "../interfaces";
import { Base } from "../models";

export class BaseContext<T extends Base>
{
    protected readonly client: IRestClient;

    protected constructor(client: IRestClient)
    {
        this.client = client;
    }
}