import { Injectable } from '@angular/core'
import { Comment } from './shared/comment.model'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Injectable()
export class CommentService {

    constructor(private http: HttpClient) { }

    public addComment(comment: Comment, postId: number): Observable<boolean>{
        const body = new HttpParams()
            .set('content', comment.content)
            .set('userId', comment.author_id.toString())
            .set('postId', postId.toString())

        return this.http.post<string>("http://localhost:3000/comment/add/",
                                       body.toString(),
                                       {
                                           headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                       }
                                     ).pipe(
                                        retry(1),
                                        map( (answer: any) => {
                                            return answer.error
                                        })
                                    )
    }
}