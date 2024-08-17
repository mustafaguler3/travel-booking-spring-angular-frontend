import { User } from "./user"

export interface Hotel {
    id:number,
    name:string,
    images: any[],
    amenities: any[],
    city: string,
    description: string,
    location: string,
    country: string,
    pricePerPerson: number,
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
