import { ResponseDTOValidationInterceptor } from "../../src/customInterceptors/response-validation.interceptor";
import { CallHandler, ExecutionContext, InternalServerErrorException } from "@nestjs/common";
import { of, lastValueFrom } from "rxjs";
import { IsNotEmpty } from "class-validator";

class MockClass {
    @IsNotEmpty()
    uid: string;

    constructor(uid: string) {
        this.uid = uid;
    }
}

describe("ResponseValidateInterceptor", () => {
    let interceptor: ResponseDTOValidationInterceptor;
    let mockExecutionContext: ExecutionContext;
    let mockCallHandler: CallHandler;
    let mockClass: MockClass;

    beforeEach(() => {
        interceptor = new ResponseDTOValidationInterceptor();

        mockClass = new MockClass("");
        mockExecutionContext = {} as ExecutionContext;
        mockCallHandler = {
            handle: jest.fn(() => of(mockClass))
        } as CallHandler;
    });

    it("should be return error object", async () => {
        const result$ = interceptor.intercept(mockExecutionContext, mockCallHandler);
        await expect(lastValueFrom(result$)).rejects.toThrow(InternalServerErrorException);
    });
});