import { IKoComponentBinding } from "../../utilities";

export default interface IMultiStepParams{
    activeStep: KnockoutObservable<number>;
    stepTitles: Array<string>;
    steps: Array<IKoComponentBinding<object>>;
}