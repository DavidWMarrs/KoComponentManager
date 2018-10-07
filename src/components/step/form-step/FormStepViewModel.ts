import IFormStepParams from "./IFormStepParams";
import { IKoComponentBinding } from "../../../utilities";
import StepViewModel from "../StepViewModel";

export default class FormStepViewModel extends StepViewModel {
    public fieldSets: Array<IKoComponentBinding<object>>;

    constructor(params: IFormStepParams){
        super(params);
        this.fieldSets = params.fieldSets;
    }

    public submit(formElement: any){
        // Validation to come
        this.proceedCallback();
    }
}