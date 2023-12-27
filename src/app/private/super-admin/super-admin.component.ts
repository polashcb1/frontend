import {Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NavigationService} from "../../theme/layout/private-layout/navigation/nav-content/navigation.service";
import {NavigationItem} from "../../theme/layout/private-layout/navigation/navigation-item";
import {MatTab, MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss']
})
export class SuperAdminComponent {

  @ViewChild(MatTabGroup, {read: MatTabGroup})
  tabGroup!: MatTabGroup;
  @ViewChildren(MatTab, {read: MatTab})
  tabNodes!: QueryList<MatTab>;
  closedTabs: number[] = [];
  tabs: NavigationItem[] = [];
  constructor(private navigationService: NavigationService) {
    this.navigationService.menuEvent$.asObservable().subscribe(u => {
      if (this.tabs.length>0 && this.tabs.find(v => v.title === u.title)) {
        return;
      }
      if(u!==null && u.title){
        this.tabs.push(u);
      }
    });
  }

  closeTab(event: any, index: number) {
    event.stopPropagation();
    this.closedTabs.push(index);
    this.tabGroup.selectedIndex = this.tabNodes.length - 1;
    this.tabs.splice(index, 1);
  }

}
