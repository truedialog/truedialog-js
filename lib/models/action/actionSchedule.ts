/* ================================================================================================================= */

import { BaseAudited } from "../base";

import { ScheduleType } from "../../enums";

/* ================================================================================================================= */

export class ActionSchedule extends BaseAudited
{
    /**
     * The action ID this schedule is for
     */
    public ActionId: number;

    /**
     * The type of schedule this is.
     */
    public ScheduleTypeId: number;

    /**
     * Time of day to start run at
     *  
     * @example 17:04:40
     */
    public RunAt: string;

    /**
     * Date and time from which schedule will start.
     */
    public StartFrom: Date;

    /**
     * Day(s) of week to run the action on.
     */
    public WeekDay: string;

    /**
     * Day(s) of month to run the action on.
     */
    public MonthDay: string;

    /**
     * The type of schedule this is.
     * 
     * This is an enumerated alias for ScheduleTypeId
     */
    public get ScheduleType(): ScheduleType
    {
        return this.ScheduleTypeId;
    }

    public set ScheduleType(type: ScheduleType)
    {
        this.ScheduleTypeId = type;
    }
}

/* ================================================================================================================= */
