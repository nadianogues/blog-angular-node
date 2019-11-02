import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PostsService} from '../posts.service'
import { Post } from '../shared/post.model'
import { Comment } from '../shared/comment.model'

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  providers: [ PostsService ]
})

export class PostPageComponent implements OnInit {
  public id: number
  public post: Post
  public comments: Comment[]

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    this.post = new Post()
    this.comments = new Array<Comment>()
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"))
    this.postsService.getPost(this.id)
      .then(( post: Post ) => {
        this.post = post[0]
      })

    this.postsService.getCommentsFromPost(this.id)
      .then(( comments: Comment[] ) => {
        this.comments = comments
      })
  }

}
