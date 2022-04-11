import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BlogTags } from '../blog.enum';

@ObjectType('Blog')
export class BlogType {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  tags: BlogTags;
}
