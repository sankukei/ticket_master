import { Collection, Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Ticket } from 'src/ticket/entities/ticket.entity';

@Entity()
export class Event {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  date!: Date;

  @Property()
  location!: string;

//   @Collection(() => Ticket)
  tickets = new Collection<Ticket>(this);

}
