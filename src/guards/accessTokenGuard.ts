import { Injectable, CanActivate, ExecutionContext, BadRequestException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AccessTokenGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

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

        const decoded = this.verify(token);
        if(!decoded || decoded.type !== "access") {
            throw new UnauthorizedException({ message: "Invalid token type" });
        }

        request.user = { uid: decoded.sub };
        return true;
    }

    private verify(token: string) {
        try {
            this.jwtService.verify(token, {
                issuer: "IUCyH"
            });

            const decoded = this.jwtService.decode(token);
            return decoded;
        } catch {
            return null;
        }
    }
}