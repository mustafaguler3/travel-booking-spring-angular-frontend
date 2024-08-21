export interface User {
    id: number,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    isEnabled: boolean,
    password: string,
    confirmPassword: string,
    profilePictureUrl: string,
    phoneNumber: string,
    roles: Role[]
}

export interface Role {
    id: number,
    roleName: string
}

export interface SendResetCode {
    email:any
}
