import { Resolver, Query } from "@nestjs/graphql";
import { UsersService } from "./users.service";
// import { Query } from "@nestjs/common";

@Resolver()
export class UsersResolver
{
    constructor(private usersService: UsersService){}

    // Queries
    @Query(() => String)
    getStuff() {
        return 'This is working';
    }
}