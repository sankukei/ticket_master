import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Event } from 'src/event/entities/event.entity';

@Entity()
export class Ticket {
  @PrimaryKey()
  id!: number;

  @Property()
  available!: boolean;

  @ManyToOne(() => Event)
  event!: Event;

}
