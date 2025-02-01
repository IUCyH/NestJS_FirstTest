import { Module } from "@nestjs/common";
import { AccessTokenGuard } from "../common/guards/access-token.guard";
import { RefreshTokenGuard } from "../common/guards/refresh-token.guard";
import { TokenHelperService } from "../common/helpers/token-helper.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        JwtModule.register({
            secret: "Lg24_8TrFZ_wvKZ5N2Qj8J9VpXcTQoYmFqL1X9RYsMzlRmtvOaq6UHpQkE3VMTX",
            signOptions: { issuer: "IUCyH", expiresIn: "30m" }
        })
    ],
    controllers: [],
    providers: [
        TokenHelperService,
        AccessTokenGuard,
        RefreshTokenGuard
    ],
    exports: [
        JwtModule,
        TokenHelperService,
        AccessTokenGuard,
        RefreshTokenGuard
    ]
})
export class AuthSharedModule {}