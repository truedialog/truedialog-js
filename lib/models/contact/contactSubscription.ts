/* ================================================================================================================= */

export class ContactSubscription
{
    /**
     * The ID of the contact that is opted in.s
     */    
    public ContactId: number;

    /**
     * The subscription ID the contact is a member of.
     */
    public SubscriptionId: number;

    /**
     * Set if the contact wishes to receive SMS messages.
     */
    public SmsEnabled: boolean;

    /**
     * Set if the contact wishes to receive MMS messages.
     * 
     * Not implemented, do not use
     */
    public MmsEnabled: boolean;

    /**
     * Set if the contact wishes to receive email messages.
     */
    public EmailEnabled: boolean;

    /**
     * Set if the contact wishes to receive voice messages.
     */
    public VoiceEnabled: boolean;   
}

/* ================================================================================================================= */
