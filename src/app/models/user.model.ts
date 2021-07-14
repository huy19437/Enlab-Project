export interface User {
    id: number;
    type: TypeUser;
    name: string;
    password: string;
}


export enum TypeUser {
    Admin,
    Customer,
}