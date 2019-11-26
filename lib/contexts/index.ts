/* ================================================================================================================= */

export * from "./interfaces";

export * from "./baseContext";

export * from "./action";
export * from "./accountContext";
export * from "./campaign";
export * from "./channel";
export * from "./contactContext";
export * from "./keywordContext";

/* ================================================================================================================= */

import { IContainer, Lifetime } from "lepton-di";

import { IAccountContext, } from "./interfaces";
import { IActionContext, IMessageContext, IImportContext, IScheduleContext } from "./interfaces";
import { ICampaignContext, ISurveyContext, IQuestionContext, IAnswerContext, ICouponContext } from "./interfaces";
import { IExternalCouponListContext, IExternalCouponCodeContext } from "./interfaces";
import { ILinkContext } from "./interfaces";
import { IChannelContext } from "./interfaces";
import { IContactContext } from "./interfaces";
import { ILongCodeContext } from "./interfaces";
import { IKeywordContext } from "./interfaces";

import { AccountContext } from "./accountContext";
import { ActionContext, MessageContext, ImportContext, ScheduleContext } from "./action";
import { CampaignContext, SurveyContext, QuestionContext, AnswerContext, CouponContext } from "./campaign";
import { ExternalCouponListContext, ExternalCouponCodeContext } from "./campaign";
import { LinkContext } from "./campaign";
import { ChannelContext } from "./channel";
import { ContactContext } from "./contactContext";
import { LongCodeContext } from "./channel";
import { KeywordContext } from "./keywordContext";

import { tryRegister } from "../utils";

/* ================================================================================================================= */

export module tdjs_context
{
    export function register(container: IContainer)
    {
        tryRegister(container, IAccountContext           , AccountContext           , Lifetime.Scoped);
        tryRegister(container, IActionContext            , ActionContext            , Lifetime.Scoped);
        tryRegister(container, IMessageContext           , MessageContext           , Lifetime.Scoped);
        tryRegister(container, IImportContext            , ImportContext            , Lifetime.Scoped);
        tryRegister(container, IScheduleContext          , ScheduleContext          , Lifetime.Scoped);
        tryRegister(container, ICampaignContext          , CampaignContext          , Lifetime.Scoped);
        tryRegister(container, ISurveyContext            , SurveyContext            , Lifetime.Scoped);
        tryRegister(container, IQuestionContext          , QuestionContext          , Lifetime.Scoped);
        tryRegister(container, IAnswerContext            , AnswerContext            , Lifetime.Scoped);
        tryRegister(container, ICouponContext            , CouponContext            , Lifetime.Scoped);
        tryRegister(container, IExternalCouponListContext, ExternalCouponListContext, Lifetime.Scoped);
        tryRegister(container, IExternalCouponCodeContext, ExternalCouponCodeContext, Lifetime.Scoped);
        tryRegister(container, ILinkContext              , LinkContext              , Lifetime.Scoped);
        tryRegister(container, IChannelContext           , ChannelContext           , Lifetime.Scoped);
        tryRegister(container, IContactContext           , ContactContext           , Lifetime.Scoped);
        tryRegister(container, ILongCodeContext          , LongCodeContext          , Lifetime.Scoped);
        tryRegister(container, IKeywordContext           , KeywordContext           , Lifetime.Scoped);
    }
}

/* ================================================================================================================= */
