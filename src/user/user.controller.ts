import {
    Inject,
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
import { AccessTokenGuard } from "../common/guards/access-token.guard";
import { CurrentUser } from "../common/decorators/current-user.decorator";
import { ResponseDTOValidationInterceptor } from "../common/interceptors/response-validation.interceptor";
import { User } from "../common/types/user";
import { CreateUserDTO } from "./dto/create-user.dto";
import { IUserService } from "./interfaces/user-service.interface";

@Controller("users")
export class UserController {
    constructor(@Inject("IUserService") private readonly service: IUserService) {}

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

        return result;
    }
}