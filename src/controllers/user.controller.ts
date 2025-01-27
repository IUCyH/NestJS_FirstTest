import {
    Controller,
    Get,
    Param,
    NotFoundException
} from "@nestjs/common";
import { UserService } from "../services/user.service";

@Controller("users")
export class UserController {
    constructor(private readonly service: UserService) {}

    @Get(":id")
    async getUserById(@Param("id") id: string) {
        const result = await this.service.getUser(id);
        if(!result) {
            throw new NotFoundException("User not found");
        }

        return result;
    }
}