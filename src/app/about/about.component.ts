import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ LoginService ],
})
export class AboutComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
