// Example using lepton dependency injection framework.

import { using, Container } from "lepton-di";

import { truedialog, IMessageSender } from "./lib";

var container = new Container();

/*
 * This step is optional if you're not using the lepton dependency injection framework.
 *
 * If you elect not to use it, then you can manually build up the objects with the constructors.
 * 
 * See the example-nodi.ts file to see how this is done.
 */
truedialog.register(container);

using (container.beginScope(), scope =>
{
    var msgSender: IMessageSender = scope.resolve(IMessageSender);

    msgSender
        .campaign(0) // <-- Set a valid campaign ID here.
        .channel("+1<LONG CODE TO SEND FORM HERE>")
        .message("This is a NodeJS test!")
        .to("+1<PHONE NUMBER TO SEND TO HERE>")
        .send()
        .then(() => console.log("Message sent"))
        .catch(e => console.log(`Error: ${e}`));
});
