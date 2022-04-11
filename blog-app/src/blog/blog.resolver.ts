import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { BlogService } from './blog.service';
import { BlogType } from './types/blog.type';
import { BlogInputType } from './types/blog.input';

@Resolver((of) => BlogType)
export class BlogResolver {
  constructor(private blogService: BlogService) {}

  @Query((returns) => BlogType)
  blogs(@Args('id') id: number) {
    return this.blogService.getBlogById(id);
  }

  @Mutation((returns) => BlogType)
  createBlog(@Args('input') input: BlogInputType) {
    return this.blogService.createBlog(input);
  }

  @Mutation((returns) => BlogType)
  updateBlog(@Args('id') id: number, @Args('input') input: BlogInputType) {
    return this.blogService.updateBlog(id, input);
  }

  @Mutation((returns) => BlogType)
  deleteBlog(@Args('id') id: number) {
    return this.blogService.deleteBlog(id);
  }
}
