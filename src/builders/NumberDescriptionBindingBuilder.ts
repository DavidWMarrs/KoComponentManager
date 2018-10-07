import BasicBindingBuilder from "./BasicBindingBuilder";
import * as NumberDescription from "../components/description/number-description";

export default class NumberDescriptionBindingBuilder extends BasicBindingBuilder{
    protected readonly name: string = NumberDescription.name;

    constructor(params: NumberDescription.INumberDescriptionParams){
        super(params);
    }
}