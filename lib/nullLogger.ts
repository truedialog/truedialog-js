/* ================================================================================================================= */

import { ILogger } from "./interfaces";

/* ================================================================================================================= */

export class NullLogger implements ILogger
{
    public trace(data: any, ...args: any[]): void
    {
    }

    public debug(data: any, ...args: any[]): void
    {
    }

    public info (data: any, ...args: any[]): void
    {
    }

    public warn (data: any, ...args: any[]): void
    {
    }

    public error(data: any, ...args: any[]): void
    {
    }
}

/* ================================================================================================================= */
