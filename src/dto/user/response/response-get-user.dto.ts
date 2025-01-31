import { IsEmail, IsNotEmpty } from "class-validator";

export class ResponseGetUserDto {
    @IsNotEmpty()
    uid: string = "";

    @IsNotEmpty()
    name: string = "";

    @IsEmail()
    email?: string = undefined;

    constructor(uid: string, name: string, email?: string) {
        this.uid = uid;
        this.name = name;
        this.email = email;
    }
}