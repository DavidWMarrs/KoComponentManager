import {IKoComponentBindingBuilder, IKoComponentBinding} from "../utilities";
import * as Fieldset from "../components/fieldset"
import ComponentCollection from "./ComponentCollection";

export default class FieldsetBindingBuilder implements IKoComponentBindingBuilder {
    private readonly params: Fieldset.IFieldsetParams;
    private readonly fieldComponentsCollection: ComponentCollection;

    constructor(params: Fieldset.IFieldsetParams){
        this.params = params;
        this.fieldComponentsCollection = new ComponentCollection(params.fields);
    }

    prependToFields = (bindingBuilder: IKoComponentBindingBuilder) => {
        this.fieldComponentsCollection.prepend(bindingBuilder);
        return this;
    }

    appendToFields = (bindingBuilder: IKoComponentBindingBuilder) => {
        this.fieldComponentsCollection.append(bindingBuilder);
        return this;
    }

    generateBinding = () => {
        let params = {...this.params};
        params.fields = this.fieldComponentsCollection.generateBinding();

        return {
            name: Fieldset.name,
            params: params
        };
    }
}