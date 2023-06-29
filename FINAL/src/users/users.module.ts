import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Users } from './users.entity';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [MikroOrmModule.forFeature([Users])],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
