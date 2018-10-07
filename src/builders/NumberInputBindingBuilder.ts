import BasicBindingBuilder from "./BasicBindingBuilder";
import * as NumberInput from "../components/number-input";

export default class NumberInputBindingBuilder extends BasicBindingBuilder{
    protected readonly name: string = NumberInput.name;

    constructor(params: NumberInput.INumberInputParams){
        super(params);
    }
}