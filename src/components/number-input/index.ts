import template from "./template.html";
import NumberInputViewModel from "./NumberInputViewModel";
import INumberInputParams from "./INumberInputParams";

export const name = "number-input";

const config : KnockoutComponentTypes.Config = {
    template: template,
    viewModel: {
        createViewModel: (params) => new NumberInputViewModel(params)
    }
};

if(!ko.components.isRegistered(name)){
    ko.components.register(name, config);
}

export {INumberInputParams}