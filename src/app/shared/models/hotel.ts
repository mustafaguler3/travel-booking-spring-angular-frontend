import { User } from "./user"

export interface Hotel {
    id:number,
    name:string,
    images: any[],
    amenities: Amenity[],
    city: string,
    description: string,
    location: string,
    rooms: Room[]
    country: string,
    pricePerPerson: any,
    roomNumber: number,
    reviews: Review[]
}

export interface Amenity {
    name:any,
    iconUrl: any
}
export interface Review {
    id: any,
    hotelId: any,
    userId: any
    publishedDate: Date
    comment: any
    rating: any
    profilePicture: any,
    username: any
}

export interface Room {
    id:number,
    roomType: string,
    capasity: number,
    pricePerNight: number,
    roomNumber: number,
    roomStatus:any
    description: string,
    images: any[],
    hotelId: any,
    amenities: Amenity[]
}
