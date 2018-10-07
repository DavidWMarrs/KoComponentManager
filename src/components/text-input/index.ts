import template from "./template.html";
import TextInputViewModel from "./TextInputViewModel";
import ITextInputParams from "./ITextInputParams";

export const name = "text-input";

const config : KnockoutComponentTypes.Config = {
    template: template,
    viewModel: {
        createViewModel: (params) => new TextInputViewModel(params)
    }
};

if(!ko.components.isRegistered(name)){
    ko.components.register(name, config);
}

export {ITextInputParams}