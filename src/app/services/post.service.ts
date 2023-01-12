import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  posts: Post[] = [
    {id: 1 ,title: "First post", description: "This is a description"},
    {id: 2, title: "Second post", description: "This is a description"},
  ]

  constructor() { }

  getPosts() {
    return this.posts;
  }

  getPost(id:number) {
    var foundIndex = this.posts.findIndex(x => x.id == id);
    return this.posts[foundIndex]
  }

  storePost(data: any) {
    data.id = this.posts.length+1
    this.posts.push(data);
  }

  editPost(data: Post) {
    var foundIndex = this.posts.findIndex(x => x.id == data.id);
    this.posts[foundIndex] = data;
  }

  deletePost(id: number) {
    this.posts = this.posts.filter(function(item) {
        return item.id != id
    })
  }
}
