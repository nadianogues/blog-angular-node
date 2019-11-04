import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  constructor(private loginService: LoginService) { }

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
    window.open("https://github.com/rodrigoAMF", "_blank");
  } 

  ngOnInit() {
  }

}
