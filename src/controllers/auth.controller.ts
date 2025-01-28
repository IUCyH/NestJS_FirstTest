import {
    Controller,
    Post,
    UseGuards
} from "@nestjs/common";
import { CurrentUserDecorator } from "../customDecorators/current-user.decorator";
import { AuthService } from "../services/auth.service";
import { RefreshTokenGuard } from "../guards/refresh-token.guard";
import { User } from "../types/user";

@Controller("auth")
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @Post("access-token")
    @UseGuards(RefreshTokenGuard)
    autoLogin(@CurrentUserDecorator() user: User) {
        const token = this.service.generateAccessToken(user.uid);
        return { access_token: token };
    }
}