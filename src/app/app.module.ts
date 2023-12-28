import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PrivateLayoutComponent} from './theme/layout/private-layout/private-layout.component';
import {NavBarComponent} from './theme/layout/private-layout/nav-bar/nav-bar.component';
import {NavLeftComponent} from './theme/layout/private-layout/nav-bar/nav-left/nav-left.component';
import {NavRightComponent} from './theme/layout/private-layout/nav-bar/nav-right/nav-right.component';
import {NavigationComponent} from './theme/layout/private-layout/navigation/navigation.component';
import {NavLogoComponent} from './theme/layout/private-layout/nav-bar/nav-logo/nav-logo.component';
import {NavContentComponent} from './theme/layout/private-layout/navigation/nav-content/nav-content.component';
import {NavGroupComponent} from './theme/layout/private-layout/navigation/nav-content/nav-group/nav-group.component';
import {NavCollapseComponent} from './theme/layout/private-layout/navigation/nav-content/nav-collapse/nav-collapse.component';
import {NavItemComponent} from './theme/layout/private-layout/navigation/nav-content/nav-item/nav-item.component';
import {SharedModule} from './theme/shared/shared.module';
import {PublicLayoutComponent} from './theme/layout/public-layout/public-layout.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PrivateLayoutComponent,
    NavBarComponent,
    NavLeftComponent,
    NavRightComponent,
    NavigationComponent,
    NavLogoComponent,
    NavContentComponent,
    NavGroupComponent,
    NavItemComponent,
    NavCollapseComponent,
    PublicLayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
