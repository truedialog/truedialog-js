import { using, Container } from "lepton-di";

import { truedialog, ILogger, IActionContext, IActionPushCampaignContext } from ".";

var container = new Container();

container
    .register(ILogger)
    .toInstance(console);

truedialog.register(container);

using (container.beginScope(), scope =>
{
    var pushContext: IActionPushCampaignContext = scope.resolve(IActionPushCampaignContext);
    var actContext: IActionContext = scope.resolve(IActionContext);
    
    pushContext.get(22944814)
        .then(x =>
        {
            console.log(x);

            actContext
                .getHistory(x)
                .then(y => console.log(y));

            //actContext.execute(x.Id, x.AccountId);
        });
});

