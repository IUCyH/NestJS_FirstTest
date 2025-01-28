import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class TokenHelperService {
    constructor(private readonly jwtService: JwtService) {}

    verify(token: string) {
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