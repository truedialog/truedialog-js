import { JsonConfig, RestClient } from "./lib";
import { CampaignContext } from "./lib/contexts/campaignContext";
import { MessageContext } from "./lib/contexts/action";
import { MessageSender } from "./lib/messageSender";
import { NullLogger } from "./lib/nullLogger";

// Example without using lepton DI.

let config = new JsonConfig();
let log = new NullLogger();
let client = new RestClient(config, log);
let campaignCtx = new CampaignContext(client);
let messageCtx = new MessageContext(client);
let msgSender = new MessageSender(messageCtx);

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
