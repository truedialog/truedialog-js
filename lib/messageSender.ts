/* ================================================================================================================= */

import { inject } from "lepton-di";

import { ActionPushCampaign } from "./models";
import { IMessageContext } from "./contexts";
import { IMessageSender } from "./interfaces";

/* ================================================================================================================= */

export class MessageSender implements IMessageSender
{
    private m_campaignId: number;
    private m_channels: string[] = [];
    private m_to: string[] = [];
    private m_from: string;
    private m_message: string;
    private m_subject: string;

    public constructor(
        @inject(IMessageContext) private readonly msgContext: IMessageContext)
    {
    }

    public campaign(id: number): IMessageSender
    {
        this.m_campaignId = id;
        return this;       
    }

    public channel(c: string | string[]): IMessageSender
    {
        if (typeof c !== "string")
            c.forEach(x => this.m_channels.push(x));
        else
            this.m_channels.push(c);

        return this;
    }

    public to(target: string | string[]): IMessageSender
    {
        if (typeof target !== "string")
            target.forEach(x => this.m_to.push(x));
        else
            this.m_to.push(target);

        return this;
    }

    public from(source: string): IMessageSender
    {
        this.m_from = source;
        return this;
    }

    public message(text: string): IMessageSender
    {
        this.m_message = text;
        return this;
    }

    public subject(text: string): IMessageSender
    {
        this.m_subject = text;
        return this;
    }

    /**
     * Performs some basic santity checks before we send out.
     */
    private validate(): void
    {
        if (!this.m_campaignId)
            throw new Error("No campaign set.");

        if (!this.m_to.length)
            throw new Error("No targets defined.");

        if (!this.m_channels.length)
            throw new Error("No channels added.");
    }

    public async send(): Promise<void>
    {
        this.validate();

        var push = new ActionPushCampaign();
        push.Targets = this.m_to,
        push.CampaignId = this.m_campaignId;
        push.Message = this.m_message;
        push.From = this.m_from;
        push.Subject = this.m_subject;
        push.Channels = this.m_channels;
        push.Execute = true;

        await this.msgContext.create(push);
    }
}

/* ================================================================================================================= */
