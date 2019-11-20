/* ================================================================================================================= */

import { Account } from "../models";

import { Action, ActionBase, ActionPushCampaign, ActionHistory, ActionImport, ActionSchedule } from "../models";

import { BaseAccount, Campaign } from "../models";

import { Contact } from "../models";

/* ================================================================================================================= */

interface IBaseContext<T extends BaseAccount>
{
    get(id: number, accountId?: number): Promise<T>;
    getAll(accountId?: number): Promise<T[]>;
    create(item: T, accountId?: number): Promise<T>;
    update(item: T): Promise<T>;
    delete(item: T | number, accountId?: number): Promise<void>;
}

/* ================================================================================================================= */

export interface IAccountContext
{
    get(id: number): Promise<Account>;
    getAll(): Promise<Account[]>;
    create(account: Account): Promise<Account>;
    update(account: Account): Promise<Account>;
    delete(account: number | Account): Promise<void>;
}

export const IAccountContext: unique symbol = Symbol("td:sdk:context:account");

/* ================================================================================================================= */

export interface CampaignListOptions
{
    accountId?: number;
    onlyMine?: boolean;
}

export interface ICampaignContext
{
    get(id: number, accountId?: number): Promise<Campaign>;
    getAll(options?: CampaignListOptions): Promise<Campaign[]>;
    create(campaign: Campaign, accountId?: number): Promise<Campaign>;
    update(campaign: Campaign): Promise<Campaign>;
    delete(campaign: Campaign | number, accountId?: number): Promise<void>;
}

export const ICampaignContext: unique symbol = Symbol("td:sdk:context:campaign");

/* ================================================================================================================= */

export interface IActionContext extends IBaseContext<Action>
{
    /**
     * Executes an action immediately.
     * 
     * @param item The action or ID to execute.
     * @param accountId The account ID to execute.
     */
    execute(item: Action | ActionBase | number, accountId?: number): Promise<void>;

    /**
     * Fetches the execution history of an action.
     * 
     * @param item The action or ID to fetch the history of.s
     */
    getHistory(item: Action | ActionBase | number): Promise<ActionHistory[]>;
}

export const IActionContext: unique symbol = Symbol("td:sdk:context:action");

/* ================================================================================================================= */

export interface IMessageContext extends IBaseContext<ActionPushCampaign>
{
}

export const IMessageContext: unique symbol = Symbol("td:sdk:context:action:pushCampaign");

/* ================================================================================================================= */

export interface IImportContext extends IBaseContext<ActionImport>
{
}

export const IImportContext: unique symbol = Symbol("td:sdk:context:action:import");

/* ================================================================================================================= */

export interface IScheduleContext
{
    get(accountId: number, actionId: number, id: number): Promise<ActionSchedule>;
    getAll(accountId: number, actionId: number): Promise<ActionSchedule[]>;
    create(item: ActionSchedule, accountId?: number, actionId?: number): Promise<ActionSchedule>;
    update(item: ActionSchedule): Promise<ActionSchedule>;
    delete(item: ActionSchedule | number, accountId?: number, actionId?: number): Promise<void>;
}

export const IScheduleContext: unique symbol = Symbol("td:sdk:context:action:schedule");

/* ================================================================================================================= */

export interface IContactContext extends IBaseContext<Contact>
{
}

export const IContactContext: unique symbol = Symbol("td:sdk:context:contact");

/* ================================================================================================================= */