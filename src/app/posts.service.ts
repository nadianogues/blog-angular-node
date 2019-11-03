import { Injectable } from '@angular/core'
import { Post } from './shared/post.model'
import { Comment } from './shared/comment.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Injectable()
export class PostsService {

    constructor(private http: HttpClient){}

    public getLastTenPosts(): Observable<Post[]> {
        /*
            Get data from the last ten posts on the database

            Return:
                Promise with a list with ten post objects
        */
        return this.http.get<Post[]>("http://localhost:3000/posts/10")
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
                Promise with a list with ten post objects
        */
        return this.http.get<Post>("http://localhost:3000/post/" + id)
            .pipe(
                retry(1),
                map((answer: any) => {
                    return answer.data[0]   
                })
            )
        /*return this.http.get("http://localhost:3000/post/" + id)
            .toPromise()
            .then((answer : any) => answer.data)*/
    }

    public getCommentsFromPost(post_id: number): Observable<Comment[]> {
        /*
            Get a list with data from the comments of a specific post

            Args:
                post_id - Id of the post who the comments will be getted
            Return:
                Promise with a list of the comments
        */
        return this.http.get<Comment[]>("http://localhost:3000/comments/" + post_id)
            .pipe(
                retry(1),
                map((answer: any) => {
                    return answer.data  
                })
            )
    }
}
