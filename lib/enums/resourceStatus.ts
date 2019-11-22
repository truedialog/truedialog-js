/* ================================================================================================================= */

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

/* ================================================================================================================= */
