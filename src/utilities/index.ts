export interface IKoComponentBinding<T extends object>{
    name: string;
    params: T;
}

export interface IKoComponentBindingBuilder{
    generateBinding: () => IKoComponentBinding<object>;
}

export interface IBasicValidator {
    form(): boolean;
    resetForm(): void;
    numberOfInvalids(): number;
    destroy(): void;
}