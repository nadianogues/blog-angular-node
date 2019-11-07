import { Component, OnInit } from '@angular/core';
import { PostsService} from '../posts.service'
import { Post } from '../shared/post.model'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ PostsService ]
})
export class HomeComponent implements OnInit {
  public id: number
  public total_number_posts: number
  public pages: Array<number>
  public posts: Post[]

  constructor(private postsService: PostsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { 

                this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"))

    let limit = (isNaN(this.id)) ? 1: this.id

    this.postsService.getNumberOfPosts()
      .subscribe(( total_number_posts: number ) => {
        this.total_number_posts = total_number_posts

        this.pages = Array.from(Array(Math.floor(this.total_number_posts/10) + 1),(x,i)=>i+1)
      })

    this.postsService.getPosts(limit)
      .subscribe(( posts: Post[] ) => {
        this.posts = posts
      })

  }

}
