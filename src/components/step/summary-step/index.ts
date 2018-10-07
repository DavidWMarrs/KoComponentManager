import template from "./template.html";
import ISummaryStepParams from "./ISummaryStepParams";
import SummaryStepViewModel from "./SummaryStepViewModel";

export const name = "summary-step";

const config : KnockoutComponentTypes.Config = {
    template: template,
    viewModel: {
        createViewModel: (params) => new SummaryStepViewModel(params)
    }
};

if(!ko.components.isRegistered(name)){
    ko.components.register(name, config);
}

export {ISummaryStepParams};