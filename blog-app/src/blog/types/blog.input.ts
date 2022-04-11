import { Field, InputType } from '@nestjs/graphql';
import { BlogTags } from '../blog.enum';

@InputType()
export class BlogInputType {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  tags: BlogTags;
}
