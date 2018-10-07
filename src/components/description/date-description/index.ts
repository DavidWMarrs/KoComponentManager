import template from "../template.html";
import IDateDescriptionParams from "./IDateDescriptionParams";
import DateDescriptionViewModel from "./DateDescriptionViewModel";

export const name = "date-description";

const config : KnockoutComponentTypes.Config = {
    template: template,
    viewModel: {
        createViewModel: (params) => new DateDescriptionViewModel(params)
    }
};

if(!ko.components.isRegistered(name)){
    ko.components.register(name, config);
}

export {IDateDescriptionParams}