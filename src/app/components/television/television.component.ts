import { Component, OnInit } from '@angular/core';
import { RegleService } from 'src/app/core/services/regle/regle.service';
import { constants } from 'src/app/shared/constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.scss']
})
export class TelevisionComponent implements OnInit {

  imageServer;
  imageLength = 0;
  imageToShow = [];
  date = '10-20-2019';
  constructor(private regleService: RegleService, private http: HttpClient) { }

 
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
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    this.http.get(`${proxy}https://api.darksky.net/forecast/893a8e2d39076c8c087ed06a392e75d5/33.478,-7.4322?units=si`)
      .subscribe(res => console.log('Weather: ', res));
  }

  createImagePath(serverPath: string) {
    return `${constants.serverImg}${serverPath}`;
    // return `http://localhost:4772/${serverPath}`;
  }

}
