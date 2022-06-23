import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AdminGuard } from './admin.guard';

@Resolver('Admin')
export class AdminResolver {


  @Query(() => String)
  async root(): Promise<string> {
    return 'root';
  }

  @UseGuards(AdminGuard)
  @Mutation(() => String)
  async AdminInit(@Args({name: 'username', type: () => String}) username: string, @Args({name: 'password', type: () => String}) password: string): Promise<string> {
    return 'abc';
  }
}
