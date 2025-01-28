import { Module } from "@nestjs/common";
import { AccessTokenGuard } from "../guards/access-token.guard";
import { RefreshTokenGuard } from "../guards/refresh-token.guard";
import { TokenHelperService } from "../helpers/token-helper.service";

@Module({
    imports: [],
    controllers: [],
    providers: [
        TokenHelperService,
        AccessTokenGuard,
        RefreshTokenGuard
    ],
    exports: [
        TokenHelperService,
        AccessTokenGuard,
        RefreshTokenGuard
    ]
})
export class AuthSharedModule {}