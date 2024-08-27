export interface BookingRequest {
    bookingId: number;
    userId: number;
    roomId: number;
  
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    state: string;
    city: string;
    country: string;
  
    children: number;
    adults: number;
    infant: number;
    checkInDate: string;
    checkOutDate: string;
    note: string;
    createdDate: string;
    lastUpdatedDate: string;
    payment: Payment;
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

