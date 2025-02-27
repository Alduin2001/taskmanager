
export interface UserItem{
    name:string
    surname:string
    email:string
}

export interface createUserDto{
    name:string
    surname:string
    email:string
    password:string
}

export interface loginUserDto{
    email:string
    password:string
}