/* ================================================================================================================= */

/**
 * Constant defines for question types
 */
export enum QuestionType
{
    /**
     * Question accepts yes/no responses.
     * 
     * A.K.A. boolean question type
     */
    YesNo = 1,

    /**
     * Question has multiple choices
     */
    MultipleChoice = 2,

    /**
     * Question accepts any answer format.
     * 
     * Note that STOP is always handled by the stop processor, so that value will not get handled by an open response
     * question.
     */
    OpenResponse = 3
}

/* ================================================================================================================= */
