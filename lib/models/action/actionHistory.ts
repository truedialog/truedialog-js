/* ================================================================================================================= */

import { BaseAudited } from "../base";

import { ActionLog } from "./actionLog";

/* ================================================================================================================= */

export class ActionHistory extends BaseAudited
{
    public ActionId: number;

    public ScheduleId: number;

    public Started: Date;

    public Finsihed: Date;

    public Approved: boolean;

    public Declined: boolean;

    public ApprovedBy?: string;

    public TotalItems: number;

    public ProcessedItems: number;

    public ErroredItems: number;

    public StatusId: number;

    public Status: string;

    public Message: string;

    public Logs: ActionLog[];
}

/* ================================================================================================================= */
