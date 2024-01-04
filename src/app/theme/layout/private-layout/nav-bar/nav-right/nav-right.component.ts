// Angular import
import { Component } from '@angular/core';
import {AuthenticationService} from "../../../../../_services";

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent {
  constructor(private authService: AuthenticationService) {
  }
  onLogout(){
    this.authService.logout();
  }
}
