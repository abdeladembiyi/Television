import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants } from 'src/app/shared/constants';

const API = constants.api+'demarrages/'
@Injectable({
  providedIn: 'root'
})
export class DemarrageService {

  constructor(private http:HttpClient) { }


  getDateDemarrage(){
    return this.http.get(`${API}/demarrage`);
  }
  getNombreJours(){
    return this.http.get(`${API}/nbrJour`);
  }
}
