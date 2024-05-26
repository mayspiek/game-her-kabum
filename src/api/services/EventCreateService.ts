import { EventCreate } from "../../models/Event";
import { IEventCreateRepository } from "../repositories/EventCreateRepository";

export class EventCreateService {
    [x: string]: any;
    private eventCreateRepository: IEventCreateRepository;

    constructor(eventCreateRepository: IEventCreateRepository) {
        this.eventCreateRepository = eventCreateRepository;
    }

    async eventCreate(eventCreate: EventCreate) {
        return await this.eventCreateRepository.eventCreate(eventCreate);
    }
}