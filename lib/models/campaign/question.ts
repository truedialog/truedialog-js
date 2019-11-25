/* ================================================================================================================= */

import { BaseAccount } from "../base";

import { QuestionType } from "../../enums";

import { Answer } from "./answer";

/* ================================================================================================================= */

export class Question extends BaseAccount
{
    /**
     * The survey this question belongs to.
     */
    public SurveyId: number;

    /**
     * The question's response type.
     */
    public QuestionTypeId: number;

    /**
     * The contact attribute that answers should be stored in.
     */
    public ContactAttributeDefinitionId: number;

    /**
     * A list of answers for this question. (OPTIONAL)
     */
    public Answers: Answer[];

    /**
     * The label for the question in the UI
     */
    public Label: string;

    /**
     * The description of the question.
     * 
     * Extra field for UI stuff.
     */
    public Description: string;

    /**
     * Enumeration mapping for QuestionTypeId
     */
    public get QuestionType(): QuestionType
    {
        return this.QuestionTypeId;
    }

    public set QuestionType(type: QuestionType)
    {
        this.QuestionTypeId = type;
    }
}

/* ================================================================================================================= */
