import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  title: string = "";
  description: string = "";
  

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
  }

  formValidate(){
    if(this.title == "" || this.description == "") return false;
    return true;
  }

  resetForm(){
    this.title = "";
    this.description = "";
    return true;
  }

  createPost() {
    if (this.formValidate()) {
      this.postService.storePost({title: this.title, description: this.description})
      this.resetForm()
    }
  }

}
