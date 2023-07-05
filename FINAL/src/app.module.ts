import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TicketModule } from './ticket/ticket.module';
import { EventModule } from './event/event.module';


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
    UsersModule,
    TicketModule, 
    EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
