import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EntityManager } from '@mikro-orm/core';

@Injectable()
export class EventService {
  constructor(private readonly em: EntityManager) {}

  async createEvent(eventData: Partial<Event>): Promise<Event> {
    const event = this.em.create(Event, eventData);
    await this.em.persistAndFlush(event);
    console.log(event)
    return event;
  }

  findAll() {
    return `This action returns all event`;
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
