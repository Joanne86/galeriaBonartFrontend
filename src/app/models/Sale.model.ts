import { Artwork } from "./Artwork.model";
import { Customer } from "./Customer.model";

export class Sale{
    id : number;
    customer : Customer;
    artwork : Artwork;
}