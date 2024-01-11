import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";


@Injectable({providedIn: "root"})
export class NavigationService{

  private _getMenuEvent$ = new BehaviorSubject<any>([]);
  get getMenuEvent$(): BehaviorSubject<any> {
    return this._getMenuEvent$;
  }
  //
  // set setMenuEvent$(value: BehaviorSubject<any>) {
  //   this._getMenuEvent$ = value;
  // }
}
