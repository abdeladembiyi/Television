import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { constants } from 'src/app/shared/constants';
import { RegleCmsService } from 'src/app/core/services/regleCms/regle-cms.service';

@Component({
  selector: 'app-list-reglecms',
  templateUrl: './list-reglecms.component.html',
  styleUrls: ['./list-reglecms.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ListReglecmsComponent implements OnInit {

  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  imageServer;
  imageToShow = [];
  constructor(private regleCmsService: RegleCmsService, private ruleDataService: DataService, private config: NgbCarouselConfig) {
    config.interval = null;
  }
 
  ngOnInit() {
    this.refresh();
  }
 
  createImagePath(serverPath: string) {
    return `${constants.serverImg}${serverPath}`;
    // return `http://localhost:4772/${serverPath}`;
  }
 
  refresh() {
    // this.regleService.getRulesByOrder().subscribe(res => { this.regles = res; console.log('Regles: ', this.regles)});
 
    this.ruleDataService.currentRuleDataSource.subscribe(data => {
      this.imageToShow = [];
      data.sort((a, b) => {
        return a.numOrdre - b.numOrdre;
      });
      console.log('Sorted data: ', data);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        if (data[i].show) {
          // console.log('Image push', res[i].nom);
          console.log(data[i].numOrdre);
          this.imageToShow.push(data[i]);
        }
      }
      this.imageServer = data;
      console.log('Rule Data List: ', data);
      console.log('Image To Show 2: ', this.imageToShow);
    });
  }
 
}
