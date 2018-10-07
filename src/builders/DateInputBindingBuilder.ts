import BasicBindingBuilder from "./BasicBindingBuilder";
import * as DateInput from "../components/date-input";

export default class DateInputBindingBuilder extends BasicBindingBuilder{
    protected readonly name: string = DateInput.name;

    constructor(params: DateInput.IDateInputParams){
        super(params);
    }
}