import {IKoComponentBindingBuilder, IKoComponentBinding} from "../utilities";
import * as SummaryStep from "../components/step/summary-step"
import ComponentCollection from "./ComponentCollection";

export class SummaryStepBindingBuilder implements IKoComponentBindingBuilder {
    private readonly params: SummaryStep.ISummaryStepParams;
    private readonly descriptionListComponentsCollection: ComponentCollection;

    constructor(params: SummaryStep.ISummaryStepParams){
        this.params = params;
        this.descriptionListComponentsCollection = new ComponentCollection(params.descriptionLists);
    }

    prependToDecriptionLists = (bindingBuilder: IKoComponentBindingBuilder) => {
        this.descriptionListComponentsCollection.prepend(bindingBuilder);
        return this;
    }

    appendToDescriptionLists = (bindingBuilder: IKoComponentBindingBuilder) => {
        this.descriptionListComponentsCollection.append(bindingBuilder);
        return this;
    }

    generateBinding = () => {
        let params = {...this.params};
        params.descriptionLists = this.descriptionListComponentsCollection.generateBinding();

        return {
            name: SummaryStep.name,
            params: params
        };
    }
}