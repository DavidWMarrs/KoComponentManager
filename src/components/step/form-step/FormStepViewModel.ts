import IFormStepParams from "./IFormStepParams";
import { IKoComponentBinding } from "../../../utilities";
import StepViewModel from "../StepViewModel";

interface IBasicValidator {
    form(): boolean;
    resetForm(): void;
    numberOfInvalids(): number;
    destroy(): void;
}

export default class FormStepViewModel extends StepViewModel {
    private validator: IBasicValidator;

    public fieldSets: Array<IKoComponentBinding<object>>;

    constructor(params: IFormStepParams, validator: IBasicValidator){
        super(params);
        this.fieldSets = params.fieldSets;
        this.validator = validator;
    }

    public submit(_formElement: any){
        if (this.validator.form()){
            this.proceedCallback();
        }
    }
}