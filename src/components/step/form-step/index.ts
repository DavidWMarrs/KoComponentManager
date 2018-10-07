import template from "./template.html";
import IFormStepParams from "./IFormStepParams";
import FormStepViewModel from "./FormStepViewModel";

export const name = "form-step";

const config : KnockoutComponentTypes.Config = {
    template: template,
    viewModel: {
        createViewModel: (params) => new FormStepViewModel(params)
    }
};

if(!ko.components.isRegistered(name)){
    ko.components.register(name, config);
}

export {IFormStepParams};