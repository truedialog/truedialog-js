/* ================================================================================================================= */

import { Campaign } from "./models";

/* ================================================================================================================= */

export interface Map<T>
{
    [K: string]: T;
}

/* ================================================================================================================= */
/**
 * Configuration abstraction
 */
export interface IConfigProvider
{
    get(name: string): any;
}

export const IConfigProvider: unique symbol = Symbol("td:sdk:configProvider");

/* ================================================================================================================= */

/**
 * Rest call abstraction
 */
export interface IRestClient
{
    asAccount(id: number): IRestClient;

    get<T>(uri: string, args: any): Promise<T>;
    post<S, T>(uri: string, args: any, body: S): Promise<T>;
    put<S, T>(uri: string, args: any, body: S): Promise<T>;
    delete<T>(uri: string, args: any): Promise<T>;
}

export const IRestClient: unique symbol = Symbol("td:sdk:restClient");

/* ================================================================================================================= */
/**
 * Logging abstraction
 */
export interface ILogger
{
    trace(data: any, ...args: any[]): void;
    debug(data: any, ...args: any[]): void;
    info (data: any, ...args: any[]): void;
    warn (data: any, ...args: any[]): void;
    error(data: any, ...args: any[]): void;
}

export const ILogger: unique symbol = Symbol("td:sdk:logger");

/* ================================================================================================================= */

export interface IMessageSender
{
    campaign(id: number): IMessageSender;
    channel(c: string | string[]): IMessageSender;
    to(target: string | string[]): IMessageSender;
    from(source: string): IMessageSender;
    message(text: string): IMessageSender;
    subject(text: string): IMessageSender;
    send(): Promise<void>;
}

export const IMessageSender: unique symbol = Symbol("td:sdk:messageSender");

/* ================================================================================================================= */
