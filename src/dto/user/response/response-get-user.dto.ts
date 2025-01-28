export class ResponseGetUserDto {
    uid: string = "";
    name: string = "";
    email?: string = undefined;

    constructor(uid: string, name: string, email?: string) {
        this.uid = uid;
        this.name = name;
        this.email = email;
    }
}