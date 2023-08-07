import * as Amount from "./Amount";
import * as Contribution from "./Contribution";
import * as DueDate from "./DueDate";
import * as Energy from "./Energy";
import * as NumberClient from "./NumberClient";
import * as ReferenceMonth from "./ReferenceMonth";


export const Validate = {
    ...Amount,
    ...DueDate,
    ...Contribution,
    ...Energy,
    ...NumberClient,
    ...ReferenceMonth
}