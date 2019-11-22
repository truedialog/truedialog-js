/* ================================================================================================================= */

import { SoftDeletable } from "../base";

import { ActionType } from "../../enums";

/* ================================================================================================================= */

export class Action extends SoftDeletable
{
    /**
     * The type of action this is.
     */
    public TypeId: number;

    /**
     * The type of action this is.
     * 
     * This is an enumerated alias for TypeId.
     */
    public get Type(): ActionType
    {
        return this.TypeId;
    }

    public set Type(type: ActionType)
    {
        this.TypeId = type;
    }
}

/* ================================================================================================================= */
