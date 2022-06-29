import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class InitializeInputType {
  @Field()
  private readonly username: string;

  @Field()
  private readonly password: string;

  @Field()
  private readonly privateKey: string;
  
}