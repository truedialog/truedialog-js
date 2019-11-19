/* ================================================================================================================= */

import { identifier, IContainer, Lifetime, Type } from "lepton-di";

/* ================================================================================================================= */
/**
 * A wrapper function for conditionally registering items into the DI container.
 *
 * @param container The container to register with.
 * @param name The symbol to bind to.
 * @param klass The class that is to be bound to the symbol.
 * @param lifetime The lifetime for created objects.
 */
export function tryRegister(container: IContainer, name: identifier, klass: Type<unknown>, lifetime: Lifetime)
{
    if (!container.isRegistered(name))
    {
        container
            .register(name)
            .toClass(klass)
            .with(lifetime);
    }
}

/* ================================================================================================================= */

// An atob() for node.js

export function atob(str: string): string
{
    return Buffer.from(str).toString("base64");
}

/* ================================================================================================================= */
