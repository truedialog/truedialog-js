// Example without using lepton DI.

import { JsonConfig, RestClient, MessageContext, MessageSender } from "./lib";

let config = new JsonConfig();
let client = new RestClient(config);
let messageCtx = new MessageContext(client);
let msgSender = new MessageSender(messageCtx);

msgSender
    .campaign(0) // <-- Set a valid campaign ID here.
    .channel("+1<LONG CODE TO SEND FORM HERE>")
    .message("This is a NodeJS test!")
    .to("+1<PHONE NUMBER TO SEND TO HERE>")
    .send()
    .then(() => console.log("Message sent"))
    .catch(e => console.log(`Error: ${e}`));
