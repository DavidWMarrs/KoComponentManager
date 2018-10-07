import template from "../template.html";
import ITextDescriptionParams from "./ITextDescriptionParams";

export const name = "text-description";

const config : KnockoutComponentTypes.Config = {
    template: template
};

if(!ko.components.isRegistered(name)){
    ko.components.register(name, config);
}

export {ITextDescriptionParams}