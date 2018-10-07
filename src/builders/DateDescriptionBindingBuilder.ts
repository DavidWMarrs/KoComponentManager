import BasicBindingBuilder from "./BasicBindingBuilder";
import * as DateDescription from "../components/description/date-description";

export default class DateDescriptionBindingBuilder extends BasicBindingBuilder{
    protected readonly name: string = DateDescription.name;

    constructor(params: DateDescription.IDateDescriptionParams){
        super(params);
    }
}