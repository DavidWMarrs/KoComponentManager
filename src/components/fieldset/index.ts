import template from "./template.html";
import IFieldsetParams from "./IFieldsetParams";

export const name = "fieldset";

const config : KnockoutComponentTypes.Config = {
    template: template
};

if(!ko.components.isRegistered(name)){
    ko.components.register(name, config);
}

export {IFieldsetParams};