import { Component, OnInit } from '@angular/core';
import { PostsService} from '../posts.service'
import { Post } from '../shared/post.model'
import { User } from '../shared/user.model'
import { LoginService } from '../login.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ PostsService ]
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

    /*this.loginService.login("rodrigoamf", "123")
        .subscribe(( user: User) => {
            if(user === undefined) return;
            
            this.loginService.user = user
            this.loginService.isLogged = true
        })
        */
  }

}
