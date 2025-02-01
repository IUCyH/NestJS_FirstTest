# NestJS_FirstTest
~~~
src
├── main.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── auth
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   └── dto
│       └── signin.dto.ts
├── user
│   ├── dto
│   │   ├── create-user.dto.ts
│   │   ├── response-create-user.dto.ts
│   │   └── response-get-user.dto.ts
│   ├── entities
│   │   └── user.entity.ts
│   ├── interfaces
│   │   └── user-service.interface.ts
│   ├── user.controller.ts
│   ├── user.module.ts
│   └── user.service.ts
├── common
│   ├── decorators
│   │   └── current-user.decorator.ts
│   ├── guards
│   │   ├── access-token.guard.ts
│   │   └── refresh-token.guard.ts
│   ├── helpers
│   │   └── token-helper.service.ts
│   ├── interceptors
│   │   └── response-validation.interceptor.ts
│   └── types
│       ├── express.d.ts
│       ├── tokenPayload.d.ts
│       └── user.d.ts
├── configs
│   └── orm.config.ts
├── shared
    └── auth-shared.module.ts
~~~

## AuthShared
### Providers
- `TokenHelperService`
- `AccessTokenGuard`
- `RefreshTokenGuard`

### Exports
- `TokenHelperService`
- `AccessTokenGuard`
- `RefreshTokenGuard`
