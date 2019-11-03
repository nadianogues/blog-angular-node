import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Post } from './shared/post.model'
import { Comment } from './shared/comment.model'

@Injectable()
export class PostsService {

    constructor(private http: HttpClient){}

    public getLastTenPosts(): Promise<Post[]> {
        /*
            Get data from the last ten posts on the database

            Return:
                Promise with a list with ten post objects
        */
        return this.http.get("http://localhost:3000/posts/10")
            .toPromise()
            .then((answer : any) => answer.data)
    }

    public getPost(id: number): Promise<Post> {
        /*
            Get data from a post with a specific id from post table on the database

            Args:
                id - Id of the post who the data will be getted
            Return:
                Promise with a list with ten post objects
        */
        return this.http.get("http://localhost:3000/post/" + id)
            .toPromise()
            .then((answer : any) => answer.data)
    }

    public getCommentsFromPost(post_id: number): Promise<Comment[]> {
        /*
            Get a list with data from the comments of a specific post

            Args:
                post_id - Id of the post who the comments will be getted
            Return:
                Promise with a list of the comments
        */
        return this.http.get("http://localhost:3000/comments/" + post_id)
            .toPromise()
            .then((answer : any) => answer.data)
    }
}
