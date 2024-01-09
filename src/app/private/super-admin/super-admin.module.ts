import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SuperAdminComponent} from "./super-admin.component";
import {PrivateModule} from "../private.module";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../theme/shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {DesignationConfigComponent} from "./designation-config/designation-config.component";
import {RoleConfigComponent} from "./role-config/role-config.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {CommonModule} from "@angular/common";


const routes: Routes = [
  {
    path: '',
    component: SuperAdminComponent
  },
];

@NgModule({
  declarations: [
    SuperAdminComponent,
    DesignationConfigComponent,
    RoleConfigComponent,
    UserDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
})
export class SuperAdminModule {
}
