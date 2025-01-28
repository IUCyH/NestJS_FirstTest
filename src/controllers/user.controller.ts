import {
    Controller,
    Get,
    Post,
    Param,
    Body,
    UsePipes,
    UseGuards,
    ValidationPipe,
    NotFoundException,
    HttpException, HttpStatus
} from "@nestjs/common";
import { AccessTokenGuard } from "../guards/access-token.guard";
import { CurrentUserDecorator } from "../customDecorators/current-user.decorator";
import { User } from "../types/user";
import { UserService } from "../services/user.service";
import { CreateUserDTO } from "../dto/user/create-user.dto";

@Controller("users")
export class UserController {
    constructor(private readonly service: UserService) {}

    @Get("me")
    @UseGuards(AccessTokenGuard)
    async getMyUser(@CurrentUserDecorator() user: User) {
        const result = await this.service.getUserWithEmail(user.uid);
        if(!result) {
            throw new NotFoundException("User not found");
        }

        return { uid: result.uid, email: result.email, name: result.name };
    }

    @Get(":id")
    async getUser(@Param("id") id: string) {
        const result = await this.service.getUserWithOutEmail(id);
        if(!result) {
            throw new NotFoundException("User not found");
        }

        return { uid: result.uid, name: result.name };
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async createUser(@Body() user: CreateUserDTO) {
        const result = await this.service.createUser(user);
        if(!result) {
            throw new HttpException("Create user failed", HttpStatus.NOT_MODIFIED);
        }

        return { uid: result };
    }
}