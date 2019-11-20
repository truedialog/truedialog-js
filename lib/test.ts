import { using, Container } from "lepton-di";

import { truedialog, ILogger, IActionContext, IMessageContext } from ".";
import { IImportContext, IContactContext } from "./contexts";

var container = new Container();

container
    .register(ILogger)
    .toInstance(console);

truedialog.register(container);

using (container.beginScope(), scope =>
{
    /*
    var msgContext: IMessageContext = scope.resolve(IMessageContext);
    var actContext: IActionContext = scope.resolve(IActionContext);
    
    msgContext.get(22944814)
        .then(x =>
        {
            console.log(x);

            actContext
                .getHistory(x)
                .then(y => console.log(y));

            //actContext.execute(x.Id, x.AccountId);
        });
    */

    /*
    var importCtx: IImportContext = scope.resolve(IImportContext);

    importCtx
        .getAll()
        .then(x => console.log(x));
    */

    var contactCtx: IContactContext = scope.resolve(IContactContext);
    contactCtx
        .getAll()
        .then(x => console.log(x));
});

