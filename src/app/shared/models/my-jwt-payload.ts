export interface MyJwtPayload {
    userId: number;
    username: string;
    profilePictureUrl: string;
    phoneNumber:any
    firstName: any
    lastName:any
    email:any
    exp: number;
    iat: number;
  }