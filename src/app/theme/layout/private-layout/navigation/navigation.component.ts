// Angular import
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoleConfigComponent} from "../../../../private/super-admin/role-config/role-config.component";
import {NavigationItem} from "./navigation-item";
import {Route, Router} from "@angular/router";
import {UserDetailsComponent} from "../../../../private/super-admin/user-details/user-details.component";
import {DesignationConfigComponent} from "../../../../private/super-admin/designation-config/designation-config.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  // public props
  @Output() NavCollapsedMob = new EventEmitter();
  @Input() accessType;
  navCollapsedMob = window.innerWidth;
  windowWidth: number;

  superAdminNavigationItems: NavigationItem[] = [
    {
      id: 'accessControl',
      title: 'Access Control',
      type: 'parent',
      icon: 'icon-navigation',
      component: null,
      children: [
        {
          id: 'configuration',
          title: 'Configuration',
          type: 'group',
          icon: 'ti ti-key',
          component: null,
          children: [
            {
              id: 'roleConfig',
              title: 'Role Config',
              type: 'component',
              icon: null,
              component: RoleConfigComponent,
              children: null
            },
            {
              id: 'userDetails',
              title: 'User details',
              type: 'component',
              icon: null,
              component: UserDetailsComponent,
              children: null
            },
            {
              id: 'designationConfig',
              title: 'Designation Config',
              type: 'component',
              icon: null,
              component: DesignationConfigComponent,
              children: null
            }
          ]
        }
      ]
    }
  ];

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation());
  }

  // public method
  navCollapseMob() {
    if (this.windowWidth < 1025) {
      this.NavCollapsedMob.emit();
    }
  }

  ngOnInit(): void {
  }


}
