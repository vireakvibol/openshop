import { Field, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class AppModel {
  @Field(type => String)
  readonly name: string;
}