
export interface ICollection<T>
{
    [index: number]: T;
}

export interface Map<T>
{
    [K: string]: T;
}

export interface IConfigProvider
{
    get(name: string): any;
}

export const IConfigPorivder: unique symbol = Symbol("td:sdk:configProvider");

export interface IRestClient
{
    asAccount(id: number): IRestClient;

    get<T>(uri: string, args: any): Promise<T>;
    post<S, T>(uri: string, args: any, body: S): Promise<T>;
    put<S, T>(uri: string, args: any, body: S): Promise<T>;
    delete<T>(uri: string, args: any): Promise<T>;
}

export const IRestClient: unique symbol = Symbol("td:sdk:restClient");
