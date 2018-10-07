import template from "./template.html";
import IMultiStepParams from "./IMultiStepParams";
import MultiStepViewModel from "./MultiStepViewModel";

export const name = "multi-step";

const config : KnockoutComponentTypes.Config = {
    template: template,
    viewModel: {
        createViewModel: (params) => new MultiStepViewModel(params)
    }
};

if(!ko.components.isRegistered(name)){
    ko.components.register(name, config);
}

export {IMultiStepParams};