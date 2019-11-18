import { BaseAudited } from "./baseAudited";

export enum ResourceStatus
{
    /**
     * The resource is fully active and can be used per normal.
     */
    Active = 0,

    /**
     * The resource is no longer active and can no longer be used.
     */
    Inactive = 1,

    /**
     * The resource has been deleted and cannot be used.
     */
    Deleted = 2
}

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