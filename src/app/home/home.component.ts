import { Component, OnInit } from '@angular/core';
import { PostsService} from '../posts.service'
import { Post } from '../shared/post.model'
import { User } from '../shared/user.model'
import { Comment } from '../shared/comment.model'
import { LoginService } from '../login.service'
import { CommentService } from '../comment.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ PostsService, CommentService ]
})
export class HomeComponent implements OnInit {

  public posts: Post[]

  constructor(private postsService: PostsService,
              private loginService: LoginService,
              private commentService: CommentService) { }

  ngOnInit() {
    this.postsService.getLastTenPosts()
      .subscribe(( posts: Post[] ) => {
        this.posts = posts
      })
      
      /*let comment = new Comment()
      comment.author_id = 4
      comment.author = "Rodrigo Araújo Marinho Franco"
      comment.content = "Lorem ipsum sit dolor amet"
      this.commentService.addComment(comment, 11).subscribe(
        (error:boolean)=>{
          if(!error){
            alert("Comment added successfully!")
          } else {
            alert("Failed to add comment")
          }
        }
      )*/
  }

}
