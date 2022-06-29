import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { InitializeInputType } from './initialize.type';

@Resolver('adminInitialize')
export class InitializeResolver {

  @Mutation(() => String)
  async adminInitialize (@Args('input') initializeInputType: InitializeInputType): Promise<string> {
    return "Success login";
  }
}
