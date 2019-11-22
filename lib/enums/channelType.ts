/* ================================================================================================================= */

/**
 * The type of messages that can be sent on a channel.
 */
export enum ChannelType
{
    /**
     * Channel is for sending plain text SMS messages.
     */
    Sms     = 0,

    /**
     * Channel supports sending large format messages such as images.
     */
    Mms     = 1,

    /**
     * Channel is for sending email messages.
     */
    Email   = 2,

    /**
     * Channel is for voice/audio messages.
     */
    Voice   = 3,

    /**
     * The channel is for testing and the messages will be discarded after being logged.
     * 
     * This channel behaves the same as the SMS channel type, but messages are not delivered to the target.
     */
    Null    = 4
}

/* ================================================================================================================= */
