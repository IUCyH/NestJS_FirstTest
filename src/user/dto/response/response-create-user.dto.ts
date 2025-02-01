import { IsNotEmpty } from "class-validator";

export class ResponseCreateUserDto {
    @IsNotEmpty()
    uid: string = "";

    constructor(uid: string) {
        this.uid = uid;
    }
}