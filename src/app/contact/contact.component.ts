import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'
import { FormGroup, FormControl } from '@angular/forms';
import { ContactService } from "../contact.service"
import { Contact } from '../shared/contact.model'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ ContactService ]
})

export class ContactComponent implements OnInit {
  public form:FormGroup = new FormGroup
  (
    {
      /*
        FormControl is a function related with the components of the form

        Input: The initial value of the field,
               Array of validators
               Array of asynchronous validators,

      */
      'name': new FormControl(null),
      'email': new FormControl(null),
      'message': new FormControl(null)
    }
  )
  constructor(private contactService:ContactService, private loginService: LoginService){ }

  public sendMessage(): void
  {
    let contact: Contact = new Contact(this.form.value.name, this.form.value.email, this.form.value.message)

    this.contactService.sendMessage(contact).subscribe(
      (error:boolean)=>
      {
        if(!error)
        {
          alert("Message successfully sent")
        }
        else
        {
          alert("Message isn't sent")
        }
      }
    )
  }

  redirectLinkedinNadia($event){    
    window.open("https://www.linkedin.com/in/nadianoguesalmeida/");
  }
  
  redirectGitHubNadia($event){    
    window.open("https://github.com/nadianogues");
  } 

  redirectLinkedinRodrigo($event){    
    window.open("https://www.linkedin.com/in/rodrigoamf/");
  }    
  
  redirectGitHubRodrigo($event){    
    window.open("https://github.com/rodrigoAMF");
  } 

  ngOnInit() { }

}
