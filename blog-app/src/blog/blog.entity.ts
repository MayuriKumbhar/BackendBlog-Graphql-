import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BlogTags } from './blog.enum';

@Entity('Blog')
export class BlogEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  tags: BlogTags;
}
