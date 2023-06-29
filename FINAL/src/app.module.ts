import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';


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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
