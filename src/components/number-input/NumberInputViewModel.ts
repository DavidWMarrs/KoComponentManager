import INumberInputParams from "./INumberInputParams";

export default class NumberInputViewModel{
    constructor(params: INumberInputParams){
        this.label = params.label;
        this.value = params.value;
    }

    public id_fragment: string;
    public label: string;
    public value: KnockoutObservable<number>;
}