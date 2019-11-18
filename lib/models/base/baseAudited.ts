import { Base } from "./base";

export class BaseAudited extends Base
{
    /**
     * When this object was first created
     */
    public Created: Date;

    /**
     * When this object was last modified
     */
    public Modified: Date;

    /**
     * Who created this object.
     */
    public CreatedBy: string;

    /**
     * Who last modified this object.
     */
    public ModifiedBy: string;
}