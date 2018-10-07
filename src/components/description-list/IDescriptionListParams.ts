import {IKoComponentBinding} from "../../utilities";

export default interface IDescriptionListParams{
    heading: string;
    descriptions: Array<IKoComponentBinding<object>>;
}