import { Customer } from "./Customer.model";
import { ArtworkSaled } from "./ArtworkSaled.model";

export class Sale{
    id : number;
    customer : Customer = new Customer();
    artworkSaled : ArtworkSaled = new ArtworkSaled();
}