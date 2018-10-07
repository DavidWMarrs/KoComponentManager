//import * as ko from "knockout";
import FieldSetBindingBuilder from "./builders/FieldsetBindingBuilder";
import TextInputBindingBuilder from "./builders/TextInputBindingBuilder";
import MultiStepBindingBuilder from "./builders/MultiStepBindingBuilder";
import FormStepBindingBuilder from "./builders/FormStepBindingBuilder";
import { createDurationFieldsetBinding, createDurationDescriptionListBinding } from "./builders/factories";
import { SummaryStepBindingBuilder } from "./builders/SummaryStepBindingBuilder";

const bootstrapperViewModel = {
    formComponent: () => {
        const activeStep: KnockoutObservable<number> = ko.observable<number>(1);
        const operatorName: KnockoutObservable<string> = ko.observable<string>();
        const postCode: KnockoutObservable<string> = ko.observable<string>();
        const start: KnockoutObservable<Date> = ko.observable<Date>();
        const end: KnockoutObservable<Date> = ko.observable<Date>();

        const builder = new MultiStepBindingBuilder({
                activeStep: activeStep,
                stepTitles: ["Pilot Details", "Flight Details", "Summary"],
                steps: []
            })
            .appendToSteps(new FormStepBindingBuilder({
                    fieldSets: [],
                    proceedCallback: () => {
                        activeStep(2);
                    }
                })
                .appendToFieldSets(new FieldSetBindingBuilder({
                        legend: "Contact Details",
                        fields: []
                    })
                    .appendToFields(new TextInputBindingBuilder({
                            label: "Operator Name",
                            value: operatorName
                        })
                    )
                    .appendToFields(new TextInputBindingBuilder({
                            label: "Post Code",
                            value: postCode
                        })
                    )))
            .appendToSteps(new FormStepBindingBuilder({
                    fieldSets: [createDurationFieldsetBinding(start, end)],
                    goBackCallback: () => {
                        activeStep(1);
                    },
                    proceedCallback: () =>{
                        activeStep(3);
                    }
                })
            )
            .appendToSteps(new SummaryStepBindingBuilder({
                    descriptionLists: [createDurationDescriptionListBinding(start, end)],
                    goBackCallback: () => {
                        activeStep(2);
                    },
                    proceedCallback: () => {
                        alert('Details submitted');
                    }
                })
            );

        return builder.generateBinding();
    }
}

ko.applyBindings(bootstrapperViewModel);