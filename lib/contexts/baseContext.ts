import { ICollection, IRestClient } from "../interfaces";
import { IModelBase } from "../models";

export class BaseContext<T extends IModelBase>
{
    protected readonly client: IRestClient;

    protected constructor(client: IRestClient)
    {
        this.client = client;
    }
}