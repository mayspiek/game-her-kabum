import { User } from "../../models/User";
import { IUserRegisterRepository } from "../repositories/UserRegisterRepository";

export class UserRegisterService {
    private userRegisterRepository: IUserRegisterRepository;

    constructor(userRegisterRepository: IUserRegisterRepository) {
        this.userRegisterRepository = userRegisterRepository;
    }

    async register(user: User) {
        return await this.userRegisterRepository.register(user);
    }
}