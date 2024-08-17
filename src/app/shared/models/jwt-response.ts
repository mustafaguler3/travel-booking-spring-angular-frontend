import { Role } from "./user";

export interface JwtResponse {
    token: string;
    userId?: string;
    username?: string;
    profilePictureUrl?: string;
}