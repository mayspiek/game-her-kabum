import { IWelcomeRepository } from "../repositories/WelcomeRepository";

export class WelcomeService {
    private welcomeRepository: IWelcomeRepository;

    constructor(welcomeRepository: IWelcomeRepository) {
        this.welcomeRepository = welcomeRepository;
    }

    async getWelcomeMessage() {
        return await this.welcomeRepository.getWelcomeMessage();
    }
}