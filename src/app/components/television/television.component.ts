import { Component, OnInit } from '@angular/core';
import { RegleService } from 'src/app/core/services/regle/regle.service';
import { constants } from 'src/app/shared/constants';
import { HttpClient } from '@angular/common/http';
import { AccidentService } from 'src/app/core/services/accident/accident.service';
import { DemarrageService } from 'src/app/core/services/demarrage/demarrage.service';

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.scss']
})
export class TelevisionComponent implements OnInit {

  imageServer;
  imageLength = 0;
  imageToShow = [];
  summary = '';
  icon = '';
  contentSummary = '';
  temperature = '';
  nrAccident;
  lastAccident;
  dateDemarrage;
  jourTravail;
  nbrSansAcc;
  constructor(
    private regleService: RegleService, 
    private http: HttpClient,
    private accidentService:AccidentService,
    private demarrageService:DemarrageService
    ) { }


  ngOnInit() {
    this.getDayWithoutAccident();
    this.getNombreJour();
    this.getDateDemarrage();
    this.getAccidentCount();
    this.getAccidentLast();
    this.regleService.getRules().subscribe((res: any[]) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].show) {
          this.imageToShow.push(res[i]);
          this.imageLength++;
        }
      }
      this.imageServer = res;
      console.log(this.imageLength);
    });
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    this.http.get(`${proxy}https://api.darksky.net/forecast/893a8e2d39076c8c087ed06a392e75d5/33.478,-7.4322?units=si&lang=fr`)
      .subscribe((res: any) => {
        console.log('Weather: ', res);
        this.icon = res.currently.icon;
        this.temperature = res.currently.temperature;
        this.summary = res.currently.summary;
        this.contentSummary = res.daily.summary;
        console.log('Summary: ', this.summary);
      });
  }

  createImagePath(serverPath: string) {
    return `${constants.serverImg}${serverPath}`;
    // return `http://localhost:4772/${serverPath}`;
  }
  getAccidentCount(){
    this.accidentService.getAccidentCount().subscribe(
      res=>{
        console.log(res);
        this.nrAccident = res;
      }
    )
  }
  getAccidentLast(){
    this.accidentService.getAccidentLast().subscribe(
      res=>{
        console.log('DernierAccident :',res);
        this.lastAccident = res;
      }
    )
  }
  getDateDemarrage(){
    this.demarrageService.getDateDemarrage().subscribe(
      res=>{
        console.log(res);
        this.dateDemarrage = res;
      }
    )
  }
  getNombreJour(){
    this.demarrageService.getNombreJours().subscribe(
      res=>{
        this.jourTravail = res;
      }
    )
  }
  getDayWithoutAccident(){
    this.accidentService.getCount().subscribe(
      res =>{
        console.log('jour',res);
        this.nbrSansAcc = res;
      }
    )
  }
}
