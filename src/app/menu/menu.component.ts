import { Component, OnInit} from '@angular/core';
import { LoginService } from '../login.service'
import { User } from '../shared/user.model'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private loginService: LoginService){ }

  ngOnInit() { }

  logout(): void{
      this.loginService.logout()
  }
}
