import template from "./template.html";
import DateInputViewModel from "./DateInputViewModel";
import IDateInputParams from "./IDateInputParams";

export const name = "date-input";

const config : KnockoutComponentTypes.Config = {
    template: template,
    viewModel: {
        createViewModel: (params) => new DateInputViewModel(params)
    }
};

if(!ko.components.isRegistered(name)){
    ko.components.register(name, config);
}

export {IDateInputParams}