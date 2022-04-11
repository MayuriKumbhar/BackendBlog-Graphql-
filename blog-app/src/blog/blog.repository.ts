import { EntityRepository, Repository } from 'typeorm';

import { BlogEntity } from './blog.entity';
import { BlogInputType } from './types/blog.input';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(BlogEntity)
export class BlogRepository extends Repository<BlogEntity> {
  async createBlog(input: BlogInputType) {
    // create a row in the blog Table (BlogEntity)
    const blog = new BlogEntity();
    blog.title = input.title;
    blog.content = input.content;
    blog.tags = input.tags;

    // create a new row in the blog Table
    await blog.save();

    return blog;
  }

  async getBlogbyId(id: number) {
    const blog = await this.findOne(id);
    if (!blog) {
      throw new NotFoundException('blog not found');
    }
    return blog;
  }

  async updateBlog(id: number, input: BlogInputType) {
    const blog = await this.getBlogbyId(id);
    blog.title = input.title;
    blog.content = input.content;
    blog.tags = input.tags;

    await blog.save();

    return blog;
  }
}
