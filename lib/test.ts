import { JsonConfig, RestClient } from ".";
import { ActionPushCampaignContext } from "./contexts/actionPushCampaignContext";

var config = new JsonConfig();
var client = new RestClient(config);
var context = new ActionPushCampaignContext(client);

context.getAll()
    .then(x => console.log(x));

