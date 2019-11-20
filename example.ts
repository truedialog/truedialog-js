import { using, Container } from "lepton-di";

import { truedialog, ILogger } from "./lib";
import { ICampaignContext } from "./lib/contexts";
import { IMessageSender } from "./lib/interfaces";

// Using a dependency injection framework.
var container = new Container();

// Uncomment the following block to log calls to the console.
/*
container
    .register(ILogger)
    .toInstance(console);
*/

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
    var campaignCtx: ICampaignContext = scope.resolve(ICampaignContext);
    var msgSender: IMessageSender = scope.resolve(IMessageSender);

    campaignCtx
        .get(0) // <-- Set a valid campaign ID here.
        .then(x => {
            msgSender
                .campaign(x)
                .channel("+1<LONG CODE TO SEND FORM HERE>")
                .message("This is a NodeJS test!")
                .to("+1<PHONE NUMBER TO SEND TO HERE>")
                .send();
        });
});
