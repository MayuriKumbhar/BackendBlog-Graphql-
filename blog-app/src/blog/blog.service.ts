import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogRepository } from './blog.repository';
import { BlogInputType } from './types/blog.input';

@Injectable()
export class BlogService {
  constructor(
    //add the dependency for BlogRepository
    @InjectRepository(BlogRepository)
    private blogRepository: BlogRepository,
  ) {}

  async createBlog(input: BlogInputType) {
    return this.blogRepository.createBlog(input);
  }

  async updateBlog(id: number, input: BlogInputType) {
    return this.blogRepository.updateBlog(id, input);
  }

  //getBlog() {}
  async getBlogById(id: number) {
    // select * from Blog where id = {id}
    const blog = await this.blogRepository.findOne(id);
    if (!blog) {
      throw new NotFoundException('blog not found');
    }

    return blog;
  }

  async deleteBlog(id: number) {
    // try deleting the blog with id
    const result = await this.blogRepository.delete(id);

    // if affected rows are > 0 -> success
    if (result.affected == 0) {
      throw new NotFoundException('blog not found');
    }

    return result;
  }
}
