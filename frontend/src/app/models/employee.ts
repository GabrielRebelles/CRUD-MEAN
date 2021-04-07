export interface Employee {
    name: string,
    office: string,
    position: string,
    salary: number,
    createdAt?:string,// '?' significa opcional
    updatedAt?:string,
    _id?:string
}
