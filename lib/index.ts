/* ================================================================================================================= */

export * from "./models";

export * from "./interfaces";
export * from "./restClient";
export * from "./jsonConfig";

export * from "./contexts";
export * from "./messageSender";

/* ================================================================================================================= */

import { IContainer, Lifetime } from "lepton-di";

import { tryRegister } from "./utils";

import { tdjs_context } from "./contexts";

import { ILogger, IRestClient, IConfigProvider, IMessageSender } from "./interfaces";

import { NullLogger } from "./nullLogger";
import { JsonConfig } from "./jsonConfig";
import { RestClient } from "./restClient";
import { MessageSender } from "./messageSender";

/* ================================================================================================================= */

export module truedialog
{
    export function register(container: IContainer): void
    {
        tryRegister(container, ILogger, NullLogger, Lifetime.Singleton);

        tryRegister(container, IConfigProvider, JsonConfig, Lifetime.Scoped);

        tryRegister(container, IRestClient, RestClient, Lifetime.Scoped);

        tdjs_context.register(container);

        tryRegister(container, IMessageSender, MessageSender, Lifetime.Transient);
    }
}

/* ================================================================================================================= */
