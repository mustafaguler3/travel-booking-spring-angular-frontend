import { User } from "./user"

export interface Hotel {
    id:number,
    name:string,
    images: any[],
    amenities: Amenity[],
    city: string,
    description: string,
    location: string,
    averageRating:any
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
    roomType: any,
    capacity: number,
    location: string,
    pricePerNight: any,
    roomNumber: any,
    roomStatus:any
    description: any,
    images: any[],
    availableFrom: any
    availableUntil : any
    hotelId: any,
    amenities: Amenity[]
    adultPrice:any
    childPrice:any
    infantPrice:any

    
}
