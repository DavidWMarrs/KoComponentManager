import ITextInputParams from "./ITextInputParams";

export default class TextInputViewModel{
    constructor(params: ITextInputParams){
        this.label = params.label;
        this.value = params.value;
    }

    public id_fragment: string;
    public label: string;
    public value: KnockoutObservable<string>;
}