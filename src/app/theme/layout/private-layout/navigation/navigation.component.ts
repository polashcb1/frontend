// Angular import
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoleConfigComponent} from "../../../../private/super-admin/role-config/role-config.component";
import {NavigationItem} from "./navigation-item";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {UserDetailsComponent} from "../../../../private/super-admin/user-details/user-details.component";
import {DesignationConfigComponent} from "../../../../private/super-admin/designation-config/designation-config.component";
import {AuthenticationService} from "../../../../_services";
import {MenuService} from "../../../../_services/menu.service";

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
  hashmap = new Map<string, Component>();
  path;

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

  constructor(private route: ActivatedRoute, private authService: AuthenticationService, private menuService: MenuService ) {
    this.route.url.subscribe(u => this.path = u[0].path);
    authService.user.subscribe(u => console.log(u));
    this.menuService.getMenusByUserType('SUPER_ADMIN').subscribe(u => console.log(u));

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
