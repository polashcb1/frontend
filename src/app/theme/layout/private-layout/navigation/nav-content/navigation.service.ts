import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";


@Injectable({providedIn: "root"})
export class NavigationService{

  private _menuEvent$ = new BehaviorSubject<any>([]);
  get menuEvent$(): BehaviorSubject<any> {
    return this._menuEvent$;
  }

  set menuEvent$(value: BehaviorSubject<any>) {
    this._menuEvent$ = value;
  }
}
