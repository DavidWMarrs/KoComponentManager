import {IKoComponentBindingBuilder} from "../utilities";
import * as TextDescription from "../components/description/text-description"
import BasicBindingBuilder from "./BasicBindingBuilder";

export default class TextDefinitionBindingBuilder extends BasicBindingBuilder{
    protected readonly name: string = TextDescription.name;

    constructor(params: TextDescription.ITextDescriptionParams){
        super(params);
    }
}