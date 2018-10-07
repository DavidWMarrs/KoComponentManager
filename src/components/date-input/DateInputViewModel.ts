import IDateInputParams from "./IDateInputParams";

export default class DateInputViewModel{
    constructor(params: IDateInputParams){
        this.label = params.label;
        this.value = params.value;
    }

    public id_fragment: string;
    public label: string;
    public value: KnockoutObservable<Date>;
}