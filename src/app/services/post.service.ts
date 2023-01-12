import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  posts: Post[] = [
    {title: "First post", description: "This is a description"},
    {title: "Second post", description: "This is a description"},
  ]

  constructor() { }

  getPosts() {
    return this.posts;
  }

  storePost(data: Post) {
    this.posts.push(data);
  }
}
