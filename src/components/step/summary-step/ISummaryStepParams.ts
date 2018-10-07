import { IKoComponentBinding } from "../../../utilities";
import IStepParams from "../IStepParams";

export default interface ISummaryStepParams extends IStepParams {
    descriptionLists: Array<IKoComponentBinding<object>>;
}