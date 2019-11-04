import { Component, OnInit } from '@angular/core';
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

  public formulario:FormGroup = new FormGroup
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
  constructor(private contactService:ContactService){ }

  public sendMessage(): void
  {
    console.log(this.formulario)
    let contact: Contact = new Contact(this.formulario.value.name, this.formulario.value.email, this.formulario.value.message)

    this.contactService.sendMessage(contact).subscribe(
      (error:boolean)=>
      {
        if(!error)
        {
          alert("Message successfully sent")
        }
        else
        {
          alert("ERROR!!!!")
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

  ngOnInit() 
  {
    
  }

}
