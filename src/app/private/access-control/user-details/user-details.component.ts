import {Component, OnInit} from '@angular/core';
import {UserDetailsService} from "./user-details.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{

constructor(private service: UserDetailsService) {
}

  ngOnInit(): void {
    // this.service.getTest().subscribe(u => console.log(u));
  }
}
