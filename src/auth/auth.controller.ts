import {
    Controller,
    Post,
    UsePipes,
    UseGuards,
    ValidationPipe,
    Body,
    NotFoundException
} from "@nestjs/common";
import { CurrentUser } from "../common/decorators/current-user.decorator";
import { AuthService } from "./auth.service";
import { RefreshTokenGuard } from "../common/guards/refresh-token.guard";
import { SigninDTO } from "./dto/signin.dto";
import { User } from "../common/types/user";

@Controller("auth")
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @Post("access-token")
    @UseGuards(RefreshTokenGuard)
    generateAccessToken(@CurrentUser() user: User) {
        const token = this.service.generateAccessToken(user.uid);
        return { access_token: token };
    }

    @Post("signin")
    @UsePipes(new ValidationPipe({ transform: true }))
    async signin(@Body() signin: SigninDTO) {
        const email = signin.email;
        const password = signin.password;

        const user = await this.service.getUid(email, password);
        if(!user) {
            throw new NotFoundException("User not found");
        }

        const uid = user.uid;
        const accessToken = this.service.generateAccessToken(uid);
        const refreshToken = this.service.generateRefreshToken(uid);

        return { access_token: accessToken, refresh_token: refreshToken };
    }
}