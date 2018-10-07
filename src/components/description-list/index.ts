import template from "./template.html";
import IDescriptionListParams from "./IDescriptionListParams";

export const name = "description-list";

const config : KnockoutComponentTypes.Config = {
    template: template
};

if(!ko.components.isRegistered(name)){
    ko.components.register(name, config);
}

export {IDescriptionListParams};