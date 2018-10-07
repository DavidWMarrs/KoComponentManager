import INumberDescriptionParams from "./INumberDescriptionParams";

export default class NumberDescriptionViewModel{
    private rawDetails: KnockoutObservable<number>;
    public term: string;

    constructor(params: INumberDescriptionParams){
        this.term = params.term;
        this.rawDetails = params.details;
    }

    public details = ko.pureComputed(() => {
        return this.rawDetails().toFixed(2);
    })
}