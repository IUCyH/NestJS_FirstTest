# NestJS_FirstTest
```
│   ├── src
│   │   ├── configs
│   │   │   ├── orm.config.ts
│   │   ├── controllers
│   │   │   ├── auth.controller.ts
│   │   │   ├── user.controller.ts
│   │   ├── customDecorators
│   │   │   ├── current-user.decorator.ts
│   │   ├── dto
│   │   │   ├── create-user.dto.ts
│   │   ├── entities
│   │   │   ├── user.entity.ts
│   │   ├── guards
│   │   │   ├── access-token.guard.ts
│   │   │   ├── refresh-token.guard.ts
│   │   ├── helpers
│   │   │   ├── token-helper.service.ts
│   │   ├── modules
│   │   │   ├── auth.module.ts
│   │   │   ├── user.module.ts
│   │   ├── services
│   │   │   ├── auth.service.ts
│   │   │   ├── user.service.ts
│   │   ├── shared
│   │   │   ├── auth-shared.module.ts
│   │   ├── types
│   │   │   ├── express.d.ts
│   │   │   ├── tokenPayload.d.ts
│   │   │   ├── user.d.ts
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── app.service.ts
│   │   ├── main.ts
│   └── tsconfig.json
```

## AuthShared
### Providers
- `TokenHelperService`
- `AccessTokenGuard`
- `RefreshTokenGuard`

### Exports
- `TokenHelperService`
- `AccessTokenGuard`
- `RefreshTokenGuard`
