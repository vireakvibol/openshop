import { Query, Resolver } from '@nestjs/graphql';
import { AppModel } from './app.model';

@Resolver()
export class AppResolver {
  @Query(returns => AppModel)
  async App(): Promise<AppModel> {
    return { name: 'test name' };
  }
}
