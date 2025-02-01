import { UserController } from "../../src/controllers/user.controller";
import { MockUserService } from "../../mocks/user.service";

describe("UserController", () => {
    let userController: UserController;

    beforeEach(() => {
        userController = new UserController(new MockUserService());
    });

    it("should be return user dto", async () => {
        const user = await userController.getUser("abc1234");
        expect(user).not.toHaveProperty("email", "abc@abc.com");
    });
});