import {
    Controller,
    Get,
    Post,
    Param,
    Body,
    UseInterceptors,
    UsePipes,
    UseGuards,
    ValidationPipe,
    NotFoundException,
    HttpException,
    HttpStatus
} from "@nestjs/common";
import { AccessTokenGuard } from "../guards/access-token.guard";
import { CurrentUser } from "../customDecorators/current-user.decorator";
import { ResponseDTOValidationInterceptor } from "../customInterceptors/response-validation.interceptor";
import { User } from "../types/user";
import { UserService } from "../services/user.service";
import { CreateUserDTO } from "../dto/user/create-user.dto";
import { ResponseCreateUserDto } from "../dto/user/response/response-create-user.dto";

@Controller("users")
export class UserController {
    constructor(private readonly service: UserService) {}

    @UseGuards(AccessTokenGuard)
    @UseInterceptors(ResponseDTOValidationInterceptor)
    @Get("me")
    async getMyUser(@CurrentUser() user: User) {
        const result = await this.service.getUserWithEmail(user.uid);
        if(!result) {
            throw new NotFoundException("User not found");
        }

        return result;
    }

    @UseInterceptors(ResponseDTOValidationInterceptor)
    @Get(":id")
    async getUser(@Param("id") id: string) {
        const result = await this.service.getUserWithOutEmail(id);
        if(!result) {
            throw new NotFoundException("User not found");
        }

        return result;
    }

    @UsePipes(new ValidationPipe({ transform: true }))
    @UseInterceptors(ResponseDTOValidationInterceptor)
    @Post()
    async createUser(@Body() user: CreateUserDTO) {
        const result = await this.service.createUser(user);
        if(!result) {
            throw new HttpException("Create user failed", HttpStatus.NOT_MODIFIED);
        }

        return new ResponseCreateUserDto("");
    }
}