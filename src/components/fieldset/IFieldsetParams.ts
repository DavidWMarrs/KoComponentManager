import {IKoComponentBinding} from "../../utilities";

export default interface IFieldsetParams{
    legend: string;
    fields: Array<IKoComponentBinding<object>>;
}