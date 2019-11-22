/* ================================================================================================================= */

import { BaseAudited } from "./baseAudited";

import { ResourceStatus } from "../../enums";

/* ================================================================================================================= */

export class SoftDeletable extends BaseAudited
{
    /**
     * Gets the current status of the object. (readonly)
     * 
     * The object's status is not directly settable. Instead it is changed when an HTTP <tt>DELETE</tt> method is made.
     */
    public StatusId: number;

    /**
     * Gets the current status of the object.
     * 
     * The object's status is not directly settable. Instead it is changed when an HTTP DELETE call is made.
     * 
     * This is an enumerated alias for StatusId.
     */
    public get Status(): ResourceStatus
    {
        return this.StatusId;
    }
}

/* ================================================================================================================= */
