/* ================================================================================================================= */

import { BaseAccount } from "../base";

import { ChannelType, LanguageType } from "../../enums";

/* ================================================================================================================= */

export class Channel extends BaseAccount
{
    public AllowVerify: boolean;

    public ChannelType: ChannelType;

    public LanguageType: LanguageType;

    public DefaultLanguageId: number;

    public Description: string;

    public IsActive: boolean;

    public IsMediaEnabled: boolean;

    public Label: string;

    public Name: string;

    public UseLongCodes: boolean;
}

/* ================================================================================================================= */
