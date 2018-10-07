import { IKoComponentBinding } from "../../utilities";
import IMultiStepParams from "./IMultiStepParams";

export default class MultiStepViewModel {
    public activeStep: KnockoutObservable<number>;
    public stepTitles: Array<string>;
    public steps: Array<IKoComponentBinding<object>>

    constructor(params: IMultiStepParams){
        if (params.stepTitles.length != params.steps.length){
            throw new Error("Number of steps and number of titles provided does not match.")
        }

        this.activeStep = params.activeStep;
        this.stepTitles = params.stepTitles;
        this.steps = params.steps;
    }

    //public isActiveStep: KnockoutComputed<boolean> = ko.pureComputed()
}