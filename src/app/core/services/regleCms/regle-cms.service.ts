import { Injectable } from '@angular/core';
import { constants } from 'src/app/shared/constants';
import { HttpClient } from '@angular/common/http';


const API=constants.api +'regleCms/'
@Injectable({
  providedIn: 'root'
})
export class RegleCmsService {

  constructor(private http:HttpClient) { }

  getReglesCms(){
    return this.http.get(`${API}`)
  }
}
