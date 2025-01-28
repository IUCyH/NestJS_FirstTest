import {
    Controller,
    Get,
    Post,
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
import { CreateUserDto } from "../dto/user.dto.create";

@Controller("users")
export class UserController {
    constructor(private readonly service: UserService) {}

    @Get(":id")
    @UseGuards(AccessTokenGuard)
    async getUserById(@CurrentUserDecorator() user: User) {
        const result = await this.service.getUser(user.uid);
        if(!result) {
            throw new NotFoundException("User not found");
        }

        return result;
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async createUser(@Body() user: CreateUserDto) {
        const result = await this.service.createUser(user);
        if(!result) {
            throw new HttpException("Create user failed", HttpStatus.NOT_MODIFIED);
        }

        return { uid: result };
    }
}