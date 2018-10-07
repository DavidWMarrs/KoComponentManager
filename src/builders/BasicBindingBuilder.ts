import { IKoComponentBindingBuilder } from "../utilities";

export default abstract class BasicBindingBuilder implements IKoComponentBindingBuilder{
    protected abstract name: string;

    private params: object;

    constructor(params: object){
        this.params = params;
    }

    generateBinding = () => {
        return {
            name: this.name,
            params: this.params
        };

    }
}