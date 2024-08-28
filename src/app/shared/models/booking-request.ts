export interface BookingRequest {
    bookingId: number;
    userId: number;
    roomId: number;
    bookingStatus: any
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    state: string;
    city: string;
    country: string;
    bookingReferenceNumber : string
    children: number;
    adults: number;
    infant: number;
    checkInDate: string;
    checkOutDate: string;
    note: string;
    createdDate: string;
    lastUpdatedDate: string;
    
    paymentAmount:number
    paymentType:any
    paymentStatus:any
    paymentDate:Date
    cardNumber:any;
    cardHolderName:any;
    cardExpiryDate:any;
    cardSecurityCode:any;
    paypalEmail:any;
}

export interface Payment {
    id:any
    paymentAmount:number
    paymentType:any
    paymentStatus:any
    paymentDate:Date
    cardNumber:any;
    cardHolderName:any;
    cardExpiryDate:any;
    cardSecurityCode:any;
    paypalEmail:any;
}

export interface RoomBookingResponse {
    bookingId:any
    firstName:any
    lastName:any
    email:any
    phoneNumber:any
    address:any
    state:any
    city:any
    country:any
    bookingStatus:any
    createdDate:any
    lastUpdatedDate:any
    bookingReferenceNumber:any
    paymentType:any
    totalPrice:any
}