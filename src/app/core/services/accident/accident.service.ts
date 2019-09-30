import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants } from 'src/app/shared/constants';


const API=constants.api + 'Accidents'
@Injectable({
  providedIn: 'root'
})
export class AccidentService {

  constructor(private http:HttpClient) { }
  
  addAccident(data){
    return this.http.post(`${API}`,data);
  }
}
