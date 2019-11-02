import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() 
  { 
    // (document).ready(function() {
    //   $("#linkedin-nadia-button").click(function() 
    //   {
    //       window.location = "https://www.linkedin.com/in/nadianoguesalmeida/";
    //   });
    // });

  }

  redirectLinkedinNadia($event){    
    console.log("Save button is clicked!", $event);    
    window.open("https://www.linkedin.com/in/nadianoguesalmeida/");
  }
  
  redirectGitHubNadia($event){    
    console.log("Save button is clicked!", $event);    
    window.open("https://github.com/nadianogues");
  } 

  redirectLinkedinRodrigo($event){    
    console.log("Save button is clicked!", $event);    
    window.open("https://www.linkedin.com/in/rodrigoamf/");
  }    
  
  redirectGitHubRodrigo($event){    
    console.log("Save button is clicked!", $event);    
    window.open("https://github.com/rodrigoAMF", "_blank");
  } 

  ngOnInit() {
  }

}
