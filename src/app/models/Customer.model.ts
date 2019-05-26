import { TypeCustomer } from "./TypeCustomer.model";

export class Customer {
    document : String;
    name : String;
    cellphone: String;
    email: String;
    flag : number;
	typeCustomer : TypeCustomer = new TypeCustomer();
}