import { Injectable } from '@angular/core';
import {RoleConfigComponent} from "../../../../private/super-admin/role-config/role-config.component";

export interface NavigationItem {
  id: string;
  title: string;
  type: 'parent' | 'group' | 'component';
  icon?: string | null;
  // url?: string;
  // classes?: string | null;
  // external?: boolean;
  // target?: boolean;
  // breadcrumbs?: boolean;
  component?: any | null;
  children?: NavigationItem[] | null;
}
