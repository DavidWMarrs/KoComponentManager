import {IKoComponentBindingBuilder, IKoComponentBinding} from "../utilities";
import * as FormStep from "../components/step/form-step"
import ComponentCollection from "./ComponentCollection";

export default class FormStepBindingBuilder implements IKoComponentBindingBuilder {
    private readonly params: FormStep.IFormStepParams;
    private readonly fieldSetComponentsCollection: ComponentCollection;

    constructor(params: FormStep.IFormStepParams){
        this.params = params;
        this.fieldSetComponentsCollection = new ComponentCollection(params.fieldSets);
    }

    prependToFieldSets = (bindingBuilder: IKoComponentBindingBuilder) => {
        this.fieldSetComponentsCollection.prepend(bindingBuilder);
        return this;
    }

    appendToFieldSets = (bindingBuilder: IKoComponentBindingBuilder) => {
        this.fieldSetComponentsCollection.append(bindingBuilder);
        return this;
    }

    generateBinding = () => {
        let params = {...this.params};
        params.fieldSets = this.fieldSetComponentsCollection.generateBinding();

        return {
            name: FormStep.name,
            params: params
        };
    }
}