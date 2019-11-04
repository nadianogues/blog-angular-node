import { Contact } from './shared/contact.model'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Injectable()
export class ContactService 
{
    constructor(private http: HttpClient){  }

    public sendMessage(contact: Contact): Observable<boolean>
    {
        const body = new HttpParams()
        .set('name', contact.name)
        .set('email', contact.email)
        .set('message', contact.message);

    return this.http.post<Contact>("http://localhost:3000/contact/",
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