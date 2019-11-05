import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { LoginService } from '../login.service';
import { User } from '../shared/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public login:FormGroup = new FormGroup
  (
    {
      /*
        FormControl is a function related with the components of the form

        Input: The initial value of the field,
               Array of validators
               Array of asynchronous validators,
      */
      'username': new FormControl(""),
      'password': new FormControl("")
    }
  )

  constructor(private loginService: LoginService) 
  {
      // Get the modal
      var modal = document.getElementById('id01');

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) 
      {
          if (event.target == modal) 
          {
              modal.style.display = "none";
          }
      }
   }

  public tryToLogin(): void
  {
      this.loginService.login(this.login.value.username, this.login.value.password)
      .subscribe(( user: User) => {
          if(user === undefined){
              alert("Failed to login! Username or password incorrect!")
              return
          };
          
          this.loginService.user = user
          this.loginService.isLogged = true
      })
  }

  ngOnInit() {}

}