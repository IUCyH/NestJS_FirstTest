import { Expose } from "class-transformer";

export class ResponseGetUserDto {
    @Expose()
    uid: string = "";

    @Expose()
    name: string = "";

    @Expose({ groups: ["includeEmail"] })
    email: string = "";
}