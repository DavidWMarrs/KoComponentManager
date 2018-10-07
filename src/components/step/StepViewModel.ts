import IStepParams from "./IStepParams";

export default abstract class StepViewModel{
    private goBackCallback: () => void;
    protected proceedCallback: () => void;
    
    constructor(params: IStepParams){
        this.goBackCallback = params.goBackCallback;
        this.proceedCallback = params.proceedCallback;
    }

    public showBackButton() : boolean {
        return this.goBackCallback !== undefined;
    }

    public goBack(){
        if (this.goBackCallback){
            this.goBackCallback();
        }
    }
}