import { Artist } from "./Artist.model";
import { Room } from "./Room.model";

export class Artwork{
    inscription_code: number;
    name : string;
    price: number;
    artist: Artist = new Artist();
    room: Room= new Room();
    getArtist(){
        return this.artist;
    }
    getRoom(){
        return this.room;
    }
}