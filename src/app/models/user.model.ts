import { Sesion } from "./sesion.model";

export class User {
    id: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    description: string;
    sesion: Sesion;
}