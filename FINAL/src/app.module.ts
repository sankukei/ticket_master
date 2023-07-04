import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TicketsController } from './tickets/tickets.controller';
import { EventsController } from './events/events.controller';


@Module({
  imports:
  [
    GraphQLModule.forRoot({
      debug: true,
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    MikroOrmModule.forRoot(),
    UsersModule],
  controllers: [AppController, TicketsController, EventsController],
  providers: [AppService],
})
export class AppModule {}
