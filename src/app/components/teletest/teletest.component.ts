import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/shared/constants';
import { RegleService } from 'src/app/core/services/regle/regle.service';

@Component({
  selector: 'app-teletest',
  templateUrl: './teletest.component.html',
  styleUrls: ['./teletest.component.scss']
})
export class TeletestComponent implements OnInit {
  imageServer;
  imageToShow = [];
  imageLength = 0;
  constructor( private regleService: RegleService, ) { }

  ngOnInit() {

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
  }


  createImagePath(serverPath: string) {
    return `${constants.serverImg}${serverPath}`;
    // return `http://localhost:4772/${serverPath}`;
  }
}
