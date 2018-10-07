import {IKoComponentBinding} from "../../../utilities";
import IStepParams from "../IStepParams";

export default interface IFormStepParams extends IStepParams{
    fieldSets: Array<IKoComponentBinding<object>>;
}