import {IKoComponentBindingBuilder} from "../utilities";
import * as DescriptionList from "../components/description-list"
import ComponentCollection from "./ComponentCollection";

export default class DescriptionListBindingBuilder implements IKoComponentBindingBuilder {
    private readonly params: DescriptionList.IDescriptionListParams;
    private readonly descriptionComponentsCollection: ComponentCollection;

    constructor(params: DescriptionList.IDescriptionListParams){
        this.params = params;
        this.descriptionComponentsCollection = new ComponentCollection(params.descriptions);
    }

    prependToFields = (bindingBuilder: IKoComponentBindingBuilder) => {
        this.descriptionComponentsCollection.prepend(bindingBuilder);
        return this;
    }

    appendToFields = (bindingBuilder: IKoComponentBindingBuilder) => {
        this.descriptionComponentsCollection.append(bindingBuilder);
        return this;
    }

    generateBinding = () => {
        let params = {...this.params};
        params.descriptions = this.descriptionComponentsCollection.generateBinding();

        return {
            name: DescriptionList.name,
            params: params
        };
    }
}