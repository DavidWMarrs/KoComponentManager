export interface IKoComponentBinding<T extends object>{
    name: string;
    params: T;
}

export interface IKoComponentBindingBuilder{
    generateBinding: () => IKoComponentBinding<object>;
}