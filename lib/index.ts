export * from "./models";

export * from "./interfaces";
export * from "./restClient";
export * from "./jsonConfig";

export * from "./contexts";

import { IContainer, Lifetime } from "lepton-di";

import { tryRegister } from "./utils";

import { tdjs_context } from "./contexts";

import { ILogger, IRestClient, IConfigProvider } from "./interfaces";

import { NullLogger } from "./nullLogger";
import { JsonConfig } from "./jsonConfig";
import { RestClient } from "./restClient";

export module truedialog
{
    export function register(container: IContainer): void
    {
        tryRegister(container, ILogger, NullLogger, Lifetime.Singleton);

        tryRegister(container, IConfigProvider, JsonConfig, Lifetime.Scoped);

        tryRegister(container, IRestClient, RestClient, Lifetime.Scoped);

        tdjs_context.register(container);
    }
}
