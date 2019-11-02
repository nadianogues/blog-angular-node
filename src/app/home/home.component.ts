import { Component, OnInit } from '@angular/core';
import { PostsService} from '../posts.service'
import { Post } from '../shared/post.model'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ PostsService ]
})
export class HomeComponent implements OnInit {

  public posts: Post[]

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getLastTenPosts()
      .then(( posts: Post[] ) => {
        this.posts = posts
      })
  }

}
