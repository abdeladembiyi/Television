import { Injectable } from '@angular/core';
import { constants } from 'src/app/shared/constants';
import { HttpClient } from '@angular/common/http';
const API = constants.api+'messages/'
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }


  getAllMessage(){
    return this.http.get(`${API}`);
  }

  AjouterMessage(data){
    return this.http.post(`${API}`,data);
  }
  deleteMessage(id) {
    return this.http.delete(`${API}`+ "/" + id);
  }
  updateMessage(id, data) {
    return this.http.put(`${API}/${id}`, data);
  }
}
