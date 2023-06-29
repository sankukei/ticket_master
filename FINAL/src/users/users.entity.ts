import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from "@mikro-orm/core";

@Entity()
export class Users
{

  @PrimaryKey()
  _id!: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  name!: string;

  @Property()
  email!: string;

  @Property()
  age?: number;

}