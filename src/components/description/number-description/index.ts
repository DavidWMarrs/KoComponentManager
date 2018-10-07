import template from "../template.html";
import INumberDescriptionParams from "./INumberDescriptionParams";
import NumberDescriptionViewModel from "./NumberDescriptionViewModel";

export const name = "number-description";

const config : KnockoutComponentTypes.Config = {
    template: template,
    viewModel: {
        createViewModel: (params) => new NumberDescriptionViewModel(params)
    }
};

if(!ko.components.isRegistered(name)){
    ko.components.register(name, config);
}

export {INumberDescriptionParams}