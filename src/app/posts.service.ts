import { Injectable } from '@angular/core'
import { Post } from './shared/post.model'
import { User } from './shared/user.model'
import { LoginService } from './login.service'
import { Comment } from './shared/comment.model'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Injectable()
export class PostsService {

    constructor(private http: HttpClient, private loginService: LoginService){}

    public getPosts(limit: number): Observable<Post[]> {
        /*
            Get ten posts starting by (limit*10)-10 index

            Return:
                Observable with a list with ten post objects
        */
        return this.http.get<Post[]>("http://localhost:3000/posts/" + limit)
            .pipe(
                retry(1),
                map((answer: any) => {
                    return answer.data  
                })
            )
    }

    public getNumberOfPosts(): Observable<number> {
        return this.http.get<number>("http://localhost:3000/number_posts/")
            .pipe(
                retry(1),
                map((answer: any) => {
                    return answer.data  
                })
            )
    }
 
    public getPost(id: number): Observable<Post> {
        /*
            Get data from a post with a specific id from post table on the database

            Args:
                id - Id of the post who the data will be getted
            Return:
                Observable with a post object
        */
        return this.http.get<Post>("http://localhost:3000/post/" + id)
            .pipe(
                retry(1),
                map((answer: any) => {
                    return answer.data[0]   
                })
            )
    }

    public getCommentsFromPost(post_id: number): Observable<Comment[]> {
        /*
            Get a list with data from the comments of a specific post

            Args:
                post_id - Id of the post who the comments will be getted
            Return:
                Observable with a list of the comments from a post
        */
        return this.http.get<Comment[]>("http://localhost:3000/comments/" + post_id)
            .pipe(
                retry(1),
                map((answer: any) => {
                    return answer.data  
                })
            )
    }

    public sendMessage(post: Post): Observable<boolean>
    {
        const body = new HttpParams()
        .set('title', post.title)
        .set('content', post.content)
        .set('userId', this.loginService.user.id.toString());

    return this.http.post<Post>("http://localhost:3000/new-post/",
        body.toString(),
        {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        }
    )
    .pipe(
        retry(1),
        map( (answer: any) => {
            return answer.error
        })
    )
    }
}
