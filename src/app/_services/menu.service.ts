import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {User} from "../_models";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class MenuService {
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;
  public menu: Observable<any[]>;

  baseUrl = `${environment.apiUrl}/v1/super-admin/menu`
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User | null>(null);
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  getMenusByModule(modulePath) {
    return this.http.get<any>(`${this.baseUrl}/${modulePath}`);
  }
}
