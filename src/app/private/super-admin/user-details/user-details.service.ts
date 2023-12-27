import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";


@Injectable({providedIn: "root"})
export class UserDetailsService {

   env = environment.baseUrl;
  constructor(private httpClient: HttpClient) {
  }
      getTest(){
      return this.httpClient.get(`${this.env}/v1/public/test`);
      }
}
