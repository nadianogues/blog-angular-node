import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PostsService} from '../posts.service'
import { Post } from '../shared/post.model'
import { Comment } from '../shared/comment.model'
import { LoginService } from '../login.service'

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  providers: [ PostsService, LoginService ]
})

export class PostPageComponent implements OnInit {
  public id: number
  public post: Post
  public comments: Comment[]

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.post = new Post()
    this.comments = new Array<Comment>()
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"))

    this.postsService.getPost(this.id)
      .subscribe(( post: Post ) => {
        this.post = post
      })

    this.postsService.getCommentsFromPost(this.id)
      .subscribe(( comments: Comment[] ) => {
        this.comments = comments
      })
  }

}
