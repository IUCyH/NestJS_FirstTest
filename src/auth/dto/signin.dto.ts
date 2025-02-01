import { IsEmail, IsNotEmpty } from "class-validator";

export class SigninDTO {
    @IsEmail()
    email: string = "";

    @IsNotEmpty()
    password: string = "";
}