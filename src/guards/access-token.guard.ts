import { Injectable, CanActivate, ExecutionContext, BadRequestException, UnauthorizedException } from "@nestjs/common";
import { TokenHelperService } from "../helpers/token-helper.service";

@Injectable()
export class AccessTokenGuard implements CanActivate {
    constructor(private readonly tokenHelperService: TokenHelperService) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const authorization = request.headers.authorization;

        if (!authorization) {
            throw new BadRequestException({ message: "Authorization header is required" });
        }

        const token = authorization.split(" ")[1];
        if(!token) {
            throw new BadRequestException({ message: "Token is required" });
        }

        const decoded = this.tokenHelperService.verify(token);
        if(!decoded || decoded.type !== "access") {
            throw new UnauthorizedException({ message: "Invalid token type" });
        }

        request.user = { uid: decoded.sub };
        return true;
    }
}