/* ================================================================================================================= */

export enum ScheduleType
{
    /**
     * Event is run immediately.
     */
    Now = 1,

    /**
     * Event will run once in the future and stop.
     */
    OneTime = 2,

    /**
     * Event will run every second.
     * 
     * This is a place holder value and is not supported.
     */
    Second  = 3,

    /**
     * Event will run every minute.
     * 
     * This is a place holder value and is not supported.
     */
    Minute  = 4,

    /**
     * The event will run every hour.
     *
     * This is a place holder value and is not supported.
     */
    Hour    = 5,

    /**
     * The event will run once a day.
     */
    Daily   = 6,

    /**
     * The event will run once a week.
     *
     * This is a place holder value and is not supported.
     */
    Weekly  = 7,

    /**
     * The event will run once a month.
     *
     * This is a place holder value and is not supported.
     */
    Monthly = 8,

    /**
     * The event will run once a year.
     *
     * This is a place holder value and is not supported.
     */
    Yearly  = 9
}

/* ================================================================================================================= */
