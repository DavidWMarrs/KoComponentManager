import FieldsetBindingBuilder from "./FieldsetBindingBuilder";
import DateInputBindingBuilder from "./DateInputBindingBuilder";
import DescriptionListBindingBuilder from "./DescriptionListBindingBuilder";
import DateDescriptionBindingBuilder from "./DateDescriptionBindingBuilder";

export function createDurationFieldsetBinding (start: KnockoutObservable<Date>, end: KnockoutObservable<Date>){
    const builder = new FieldsetBindingBuilder({
        legend: "Duration",
        fields:[]
    })
    .appendToFields(new DateInputBindingBuilder({
        label: "Start",
        value: start
    }))
    .appendToFields(new DateInputBindingBuilder({
        label: "End",
        value: end
    }));

    return builder.generateBinding();
}

export function createDurationDescriptionListBinding (start: KnockoutObservable<Date>, end: KnockoutObservable<Date>){
    const builder = new DescriptionListBindingBuilder({
        heading: "Duration",
        descriptions:[]
    })
    .appendToFields(new DateDescriptionBindingBuilder({
        term: "Start",
        details: start
    }))
    .appendToFields(new DateDescriptionBindingBuilder({
        term: "End",
        details: end
    }));

    return builder.generateBinding();
}