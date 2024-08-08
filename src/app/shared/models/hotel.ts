export interface Hotel {
    id:number,
    name:string,
    images: string[],
    amenities: string[],
    city: string,
    description: string,
    location: string,
    country: string,
    pricePerPerson: number,
    rating: string,
    totalRooms: number,
    reviews: Review[]
}

export interface Review {
    id?:number
    comment: string
    rating: string
}
