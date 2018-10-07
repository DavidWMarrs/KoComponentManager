import IDateDescriptionParams from "./IDateDescriptionParams";

export default class DateDescriptionViewModel{
    private rawDetails: KnockoutObservable<Date>;
    public term: string;

    constructor(params: IDateDescriptionParams){
        this.term = params.term;
        this.rawDetails = params.details;
    }

    public details = ko.pureComputed(() => {
        return this.rawDetails().toDateString();
    })
}