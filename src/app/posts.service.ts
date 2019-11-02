import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Post } from './shared/post.model'

@Injectable()
export class PostsService {

    constructor(private http: HttpClient){}

    public getLastTenPosts(): Promise<Post[]> {
        // Efetua uma requisição http
        return this.http.get("http://localhost:3000/posts/10")
            .toPromise()
            .then((answer : any) => answer.data)
    }

    public getPost(id: number): Promise<Post> {
        // Efetua uma requisição http
        return this.http.get("http://localhost:3000/post/" + id)
            .toPromise()
            .then((answer : any) => answer.data)
    }
}