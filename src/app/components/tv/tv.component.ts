import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/shared/constants';
import { rulecmsService } from 'src/app/core/services/rulecms/rulecms.service';
import { PointeuseService } from 'src/app/core/services/pointeuse/pointeuse.service';
import { MessageService } from 'src/app/core/services/message/message.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  readonly logo: string = constants.img_logo;
  Messages : any;
  imageServer;
  imageLength = 0;
  imageToShow = [];
  data;
  P002;
  P004;
  P006;
  P008;
  P010;
  P012;
  interval: any;
  constructor(private regleCmsService: rulecmsService,private pointeuseService:PointeuseService, private MessageService : MessageService) { }

  ngOnInit() {

    this.MessageService.getAllMessage().subscribe(res => {
      this.Messages = res;
      console.log(this.Messages);
    });
    this.getPointeuseEtat();
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
      this.P002 = res[1];
      this.P004 = res[3];
      this.P006 = res[5];
      this.P008 = res[7];
      this.P010 = res[9];
      this.P012 = res[11];
    })
  }
}
