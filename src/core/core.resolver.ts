import { Query, Resolver } from '@nestjs/graphql';

@Resolver('root')
export class CoreResolver {
  @Query(() => String)
  async root(): Promise<string> {
    return "Hello world!";
  }
}
