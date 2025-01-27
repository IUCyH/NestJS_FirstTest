import {
    Controller,
    Get,
    Post,
    Param,
    Body,
    NotFoundException,
    HttpException, HttpStatus
} from "@nestjs/common";
import { UserService } from "../services/user.service";
import { CreateUserDto } from "../dto/user.dto.create";

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

    @Post()
    async createUser(@Body() user: CreateUserDto) {
        const result = await this.service.createUser(user);
        if(!result) {
            throw new HttpException("Create user failed", HttpStatus.NOT_MODIFIED);
        }
    }
}