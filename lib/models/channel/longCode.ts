/* ================================================================================================================= */

import { SoftDeletable } from "../base";

/* ================================================================================================================= */

export class LongCode extends SoftDeletable
{
    public ChannelId: number;

    public Code: string;

    public ForwardNumber: string;

    public ForwardVerificationCode: string;

    public ForwardStatus?: number;
}

/* ================================================================================================================= */
