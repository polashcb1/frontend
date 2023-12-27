import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  component?: any;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [

  {
    id: 'accessControl',
    title: 'Access Control',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'configuration',
        title: 'Configuration',
        type: 'collapse',
        icon: 'ti ti-key',
        children: [
          {
            id: 'roleConfig',
            title: 'Role Config',
            type: 'item',
            url: '/some',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: 'sss',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'designationConfig',
            title: 'Designation Config',
            type: 'item',
            url: 'ttt',
            target: true,
            breadcrumbs: false
          }
        ]
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
