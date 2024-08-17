export interface MyJwtPayload {
    userId: number;
    username: string;
    profilePictureUrl: string;
    exp: number;
    iat: number;
  }