import {IKoComponentBindingBuilder} from "../utilities";
import * as TextInput from "../components/text-input"
import BasicBindingBuilder from "./BasicBindingBuilder";

export default class TextInputBindingBuilder extends BasicBindingBuilder{
    protected readonly name: string = TextInput.name;

    constructor(params: TextInput.ITextInputParams){
        super(params);
    }
}