import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  isEdit : boolean = false;
  postId: number = 0;
  title: string = "";
  description: string = "";
  

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']) {
      this.isEdit = true
      this.postId = this.route.snapshot.params['id']
      const post = this.postService.getPost(this.postId)
      this.title = post.title
      this.description = post.description
    }
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
      this.router.navigate(['posts'])
    }
  }

  editPost() {
    if (this.formValidate()) {
      this.postService.editPost({id: this.postId, title: this.title, description: this.description})
      this.router.navigate(['posts'])
    }
  }

}
