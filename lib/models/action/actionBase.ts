import { SoftDeletable } from "../base";

import { ActionSchedule } from "./actionSchedule";

export class ActionBase extends SoftDeletable
{
    /**
     * This list of schedules associated with the action.
     */
    public Schedules: ActionSchedule[];

    /**
     * Set to true if the action should be executed upon creation.
     */
    public Execute: boolean;
}