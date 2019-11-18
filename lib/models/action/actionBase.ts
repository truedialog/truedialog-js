import { ICollection } from "../../interfaces";
import { SoftDeletable } from "../base";

export class ActionBase extends SoftDeletable
{
    /**
     * This list of schedules associated with the action.
     */
    public Schedules: ICollection<any>;

    /**
     * Set to true if the action should be executed upon creation.
     */
    public Execute: boolean;
}