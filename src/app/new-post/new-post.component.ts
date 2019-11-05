import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Post } from '../shared/post.model'
import { PostsService } from "../posts.service"

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  providers: [ PostsService ]
})
export class NewPostComponent implements OnInit {

  public formNewPost:FormGroup = new FormGroup
  (
    {
      /*
        FormControl is a function related with the components of the form

        Input: The initial value of the field,
               Array of validators
               Array of asynchronous validators,
      */
      'postTitle': new FormControl(""),
      'postContent': new FormControl("")
    }
  )

  constructor(private postsService:PostsService) { }

  public sendMessage(): void
  {
    let post: Post = new Post()

    post.title = this.formNewPost.value.postTitle
    post.content = this.formNewPost.value.postContent

    this.postsService.sendMessage(post).subscribe(
      (error:boolean)=>
      {
        if(!error)
        {
          alert("New post successfully submit")
        }
        else
        {
          alert("New post isn't submit")
        }
      }
    )
  }

  ngOnInit() {}

}
