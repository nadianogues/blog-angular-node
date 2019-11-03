import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core'
import { User } from './shared/user.model'

@Injectable()
export class LoginService implements OnInit {

    public user: User
    public isLogged: boolean

    constructor(private http: HttpClient){  }

    ngOnInit() {
        this.isLogged = false
        this.user = new User()
    }

    public login(username: string, password: string): void{
        // HTTP request
    }

    public logout(): void{
        this.isLogged = false
        this.user = new User()
    }
}
