import { Role } from "./user";

export interface JwtResponse {
    token: string
    firstName: string
    email:string,
    isEnabled: boolean,
    type: string
    role: Role[]
}