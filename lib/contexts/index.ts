export * from "./interfaces";

import { IContainer, Lifetime } from "lepton-di";

import { IAccountContext, IActionContext, IActionPushCampaignContext, ICampaignContext } from "./interfaces";

import { AccountContext } from "./accountContext";
import { ActionContext, ActionPushCampaignContext } from "./action";
import { CampaignContext } from "./campaignContext";

import { tryRegister } from "../utils";

export module tdjs_context
{
    export function register(container: IContainer)
    {
        tryRegister(container, IAccountContext, AccountContext, Lifetime.Scoped);
        tryRegister(container, IActionContext, ActionContext, Lifetime.Scoped);
        tryRegister(container, IActionPushCampaignContext, ActionPushCampaignContext, Lifetime.Scoped);
        tryRegister(container, ICampaignContext, CampaignContext, Lifetime.Scoped);
    }
}
