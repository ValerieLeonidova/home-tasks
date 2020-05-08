export interface Address {
    street: string,
    building: number,
    apartment: number,
}

export interface ProfessionPosition {
    name: string,
    avrSalary: number,
}

export interface Profession {
    name: string,
    salary: number,
    position?: ProfessionPosition,
}

export interface User {
    id: number,
    address: Address,
    profession: Profession,
    name: string,
}

export interface Dog {
    abc: string,
}

export type GenericFunction<T> = (a: T) => T;


// export type MyOwnTypeOfSumFunc = (a: number, b: number) => number;
// export type SpecialString = 'a' | 'b' | 'c';
// export enum  Buttons {
//     UP,
//     DOWN,
// }