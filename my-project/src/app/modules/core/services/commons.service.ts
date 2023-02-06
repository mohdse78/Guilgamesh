import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  constructor(private http: HttpClient) {
  }

  getUniversity() {
    return this.http.get(`${environment.apiUrl}/commons/universities`);
  }

  getJobTitles() {
    return this.http.get(`${environment.apiUrl}/commons/jobtitles`);
  }

  getMinority() {
    return this.http.get(`${environment.apiUrl}/commons/minority`);
  }

  getDisability() {
    return this.http.get(`${environment.apiUrl}/commons/disability`);
  }

  post(value: any){
    this.http.post(`${environment.apiUrl}/position/add`, value);
  }
}
