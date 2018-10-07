import { IKoComponentBinding, IKoComponentBindingBuilder } from "../utilities";

export default class ComponentCollection{
    private readonly originalComponents: Array<IKoComponentBinding<object>>;
    private readonly prependedComponentBuilders: Array<IKoComponentBindingBuilder>;
    private readonly appendedComponentBuilders: Array<IKoComponentBindingBuilder>;

    constructor(originalComponents: Array<IKoComponentBinding<object>>){
        this.originalComponents = originalComponents;
    }

    prepend = (bindingBuilder: IKoComponentBindingBuilder) => {
        this.prependedComponentBuilders.push(bindingBuilder);
    }

    append = (bindingBuilder: IKoComponentBindingBuilder) => {
        this.appendedComponentBuilders.push(bindingBuilder);
    }

    generateBinding = () => {
        return this.prependedComponentBuilders
            .map(x => x.generateBinding())
            .concat(
                this.originalComponents,
                this.appendedComponentBuilders.map(x => x.generateBinding()));
    }
}