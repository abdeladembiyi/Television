import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants } from 'src/app/shared/constants';

const API = constants.api + 'pointeuses/'
@Injectable({
  providedIn: 'root'
})
export class PointeuseService {

  constructor(private http:HttpClient) { }

  getAllPointeuse(){
    return this.http.get(`${API}`)
  }
  desactiverPointeuse(id: number){
      return this.http.get(`${API}desactiver/${id}`);
  }
  activerPointeuse(id: number){
    return this.http.get(`${API}activer/${id}`);
}
  getPointeuseEtat(){
    return this.http.get(`${API}etat/`)
  }
}
