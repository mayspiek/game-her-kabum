import { UserLogin } from "../../models/User";
import { IUserLoginRepository } from "../repositories/UserLoginRepository";

export class UserLoginService {
    private userLoginRepository: IUserLoginRepository;

    constructor(userLoginRepository: IUserLoginRepository) {
        this.userLoginRepository = userLoginRepository;
    }

    async login(userLogin: UserLogin) {
        return await this.userLoginRepository.login(userLogin);
    }
}