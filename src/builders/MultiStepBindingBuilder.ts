import {IKoComponentBindingBuilder, IKoComponentBinding} from "../utilities";
import * as MultiStep from "../components/multi-step"
import ComponentCollection from "./ComponentCollection";

export default class MultiStepBindingBuilder implements IKoComponentBindingBuilder {
    private readonly params: MultiStep.IMultiStepParams;
    private readonly stepComponentsCollection: ComponentCollection;

    constructor(params: MultiStep.IMultiStepParams){
        this.params = params;
        this.stepComponentsCollection = new ComponentCollection(params.steps);
    }

    prependToSteps = (bindingBuilder: IKoComponentBindingBuilder) => {
        this.stepComponentsCollection.prepend(bindingBuilder);
        return this;
    }

    appendToSteps = (bindingBuilder: IKoComponentBindingBuilder) => {
        this.stepComponentsCollection.append(bindingBuilder);
        return this;
    }

    generateBinding = () => {
        let params = {...this.params};
        params.steps = this.stepComponentsCollection.generateBinding();

        return {
            name: MultiStep.name,
            params: params
        };
    }
}