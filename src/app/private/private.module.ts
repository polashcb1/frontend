import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SuperAdminComponent} from "./super-admin/super-admin.component";
import {DesignationConfigComponent} from "./super-admin/designation-config/designation-config.component";
import {RoleConfigComponent} from "./super-admin/role-config/role-config.component";
import {UserDetailsComponent} from "./super-admin/user-details/user-details.component";
import {PrivateLayoutComponent} from "../theme/layout/private-layout/private-layout.component";
import {MatTab, MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../theme/shared/shared.module";


const routes: Routes = [
  {
    path: 'super-admin',
    component: PrivateLayoutComponent,
    loadChildren: () => import('./super-admin/super-admin.module').then((m) => m.SuperAdminModule)
  },
];

@NgModule({
  declarations: [
    DesignationConfigComponent,
    RoleConfigComponent,
    UserDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RoleConfigComponent
  ]
})
export class PrivateModule {
}
