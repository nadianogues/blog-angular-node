import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core'
import { Observable } from 'rxjs';
import { User } from './shared/user.model'
import { retry, map } from 'rxjs/operators';

@Injectable()
export class LoginService implements OnInit {
    public user: User = new User()
    public isLogged: boolean = false

    constructor(private http: HttpClient){  }

    ngOnInit() { }

    public login(username: string, password: string): Observable<User>{
        const body = new HttpParams()
            .set('username', username)
            .set('password', password);
        
        return this.http.post<User>("http://localhost:3000/login/",
            body.toString(),
            {
                headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            }
        )
        .pipe(
            retry(1),
            map( (answer: any) => {
                return answer.data[0]
            })
        )
    }

    public logout(): void{
        this.isLogged = false
        this.user = new User()
    }

    public submitNewUser(): Observable<boolean>
    {
        const body = new HttpParams()
        .set('name', this.user.name)
        .set('username', this.user.username)
        .set('email', this.user.email)
        .set('password', this.user.password);

    return this.http.post<User>("http://localhost:3000/new-user/",
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
