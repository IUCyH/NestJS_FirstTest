import { User } from "../../../entities/user.entity";

export class ResponseGetUserDto {
    uid: string = "";
    name: string = "";
    email?: string = undefined;

    constructor(user: Partial<User>) {
        Object.assign(this, user);
    }
}