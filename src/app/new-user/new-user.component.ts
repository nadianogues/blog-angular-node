import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  public formNewUser:FormGroup = new FormGroup
  (
    {
      /*
        FormControl is a function related with the components of the form

        Input: The initial value of the field,
               Array of validators
               Array of asynchronous validators,
      */
      'name': new FormControl(""),
      'username': new FormControl(""),
      'email': new FormControl(""),
      'password': new FormControl("")
    }
  )
  constructor(private loginService: LoginService) 
  {
    // Get the modal
    var modal = document.getElementById('id02');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) 
    {
        if (event.target == modal) 
        {
            modal.style.display = "none";
        }
    }
  }

  public submitNewUser(): void
  {
      this.loginService.user.name = this.formNewUser.value.name
      this.loginService.user.sername = this.formNewUser.value.username
      this.loginService.user.email = this.formNewUser.value.email
      this.loginService.user.password = this.formNewUser.value.password

      this.loginService.submitNewUser().subscribe(
        (error:boolean)=>
        {
          if(!error)
          {
            alert("New user successfully submit")
          }
          else
          {
            alert("New user isn't submit")
          }
        }
      )
  }

  ngOnInit() {}

}
