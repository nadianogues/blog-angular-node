import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PostsService} from '../posts.service'
import { Post } from '../shared/post.model'

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  providers: [ PostsService ]
})
export class PostPageComponent implements OnInit {
  public id: number
  public post: Post

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"))
    this.postsService.getPost(this.id)
      .then(( post: Post ) => {
        this.post = post[0]
      })
  }

}
