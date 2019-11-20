/* ================================================================================================================= */

export * from "./interfaces";

/* ================================================================================================================= */

import { IContainer, Lifetime } from "lepton-di";

import { IAccountContext, } from "./interfaces";
import { IActionContext, IMessageContext, IImportContext, IScheduleContext } from "./interfaces";
import { ICampaignContext } from "./interfaces";
import { IContactContext } from "./interfaces";

import { AccountContext } from "./accountContext";
import { ActionContext, MessageContext, ImportContext, ScheduleContext } from "./action";
import { CampaignContext } from "./campaignContext";
import { ContactContext } from "./contactContext";

import { tryRegister } from "../utils";

/* ================================================================================================================= */

export module tdjs_context
{
    export function register(container: IContainer)
    {
        tryRegister(container, IAccountContext, AccountContext, Lifetime.Scoped);
        tryRegister(container, IActionContext, ActionContext, Lifetime.Scoped);
        tryRegister(container, IMessageContext, MessageContext, Lifetime.Scoped);
        tryRegister(container, IImportContext, ImportContext, Lifetime.Scoped);
        tryRegister(container, IScheduleContext, ScheduleContext, Lifetime.Scoped);
        tryRegister(container, ICampaignContext, CampaignContext, Lifetime.Scoped);
        tryRegister(container, IContactContext, ContactContext, Lifetime.Scoped);
    }
}

/* ================================================================================================================= */
