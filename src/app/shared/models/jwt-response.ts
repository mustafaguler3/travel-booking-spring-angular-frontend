import { Role } from "./user";

export interface JwtResponse {
    token: string
    firstName: string
    email:string,
    type: string
    role: Role[]
}