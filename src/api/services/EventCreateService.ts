import { EventCreate } from "../../models/Event";
import { IEventCreateRepository } from "../repositories/EventCreateRepository";

export class EventCreateService {
    private eventCreateRepository: IEventCreateRepository;

    constructor(eventCreateRepository: IEventCreateRepository) {
        this.eventCreateRepository = eventCreateRepository;
    }

    async eventCreate(eventCreate: EventCreate) {
        return await this.eventCreateRepository.createEvent(eventCreate);
    }
}