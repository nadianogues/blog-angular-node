import { Component, OnInit } from '@angular/core';
import { PostsService} from '../posts.service'
import { Post } from '../shared/post.model'
import { LoginService } from '../login.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ PostsService, LoginService ]
})
export class HomeComponent implements OnInit {

  public posts: Post[]

  constructor(private postsService: PostsService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.postsService.getLastTenPosts()
      .subscribe(( posts: Post[] ) => {
        this.posts = posts
      })
  }

}
