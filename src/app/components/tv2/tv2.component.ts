import { Component, OnInit } from '@angular/core';
import { rulecmsService } from 'src/app/core/services/rulecms/rulecms.service';
import { constants } from 'src/app/shared/constants';
import { PointeuseService } from 'src/app/core/services/pointeuse/pointeuse.service';

@Component({
  selector: 'app-tv2',
  templateUrl: './tv2.component.html',
  styleUrls: ['./tv2.component.scss']
})
export class Tv2Component implements OnInit {

  imageServer;
  imageLength = 0;
  imageToShow = [];
  P001;
  P003;
  P005;
  P007;
  P009;
  P011;
  interval: any;
  constructor(private regleCmsService: rulecmsService,private pointeuseService:PointeuseService) { }

  ngOnInit() {
    this.getPointeuseEtat()
    this.interval = setInterval(() => { 
      this.getPointeuseEtat(); 
  }, 5000);
    this.regleCmsService.getRules().subscribe((res: any[]) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].show) {
          this.imageToShow.push(res[i]);
          this.imageLength++;
        }
      }
      this.imageServer = res;
      console.log(this.imageLength);
    });
  }
  createImagePath(serverPath: string) {
    return `${constants.serverImg}${serverPath}`;
    // return `http://localhost:4772/${serverPath}`;
  }
  getPointeuseEtat(){
    this.pointeuseService.getPointeuseEtat().subscribe((res : any[])=>{
      this.P001 = res[0];
      this.P003 = res[2];
      this.P005 = res[4];
      this.P007 = res[6];
      this.P009 = res[8];
      this.P011 = res[10];
    })
  }

}
