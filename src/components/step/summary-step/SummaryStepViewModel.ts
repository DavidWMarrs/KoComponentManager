import { IKoComponentBinding } from "../../../utilities";
import ISummaryStepParams from "./ISummaryStepParams";
import StepViewModel from "../StepViewModel";

export default class SummaryStepViewModel extends StepViewModel {
    public descriptionLists: Array<IKoComponentBinding<object>>;

    constructor(params: ISummaryStepParams){
        super(params);
        this.descriptionLists = params.descriptionLists;
    }

    public submit(formElement: any){
        // Validation to come
        this.proceedCallback();
    }
}