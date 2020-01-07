import { Component, OnInit,  ViewChild, ChangeDetectorRef } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { constants } from 'src/app/shared/constants';
import { rulecmsService } from 'src/app/core/services/rulecms/rulecms.service';
import { AddRulecmsComponent } from './add-rulecms/add-rulecms.component';
import { EditRulecmsComponent } from './edit-rulecms/edit-rulecms.component';
@Component({
  selector: 'app-rulecms',
  templateUrl: './rulecms.component.html',
  styleUrls: ['./rulecms.component.scss'],
  providers: [NgbCarouselConfig]
})
export class RulecmsComponent implements OnInit {

  listRegle = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nom', 'numOrdre', 'description', 'image', 'actions'];
  searchKey: string;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private dialog: MatDialog,
              private rulecmsService: rulecmsService,
              private changeDetectorRefs: ChangeDetectorRef,
              private ruleDataService: DataService) { }



  ngOnInit() {
    this.refresh();
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listRegle.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    config.width = '80%';
    this.dialog.open(AddRulecmsComponent, config)
      .afterClosed().subscribe(res => this.refresh());
  }

  refresh() {
    this.rulecmsService.getRules().subscribe((res: any[]) => {
      this.ruleDataService.changeRuleDataSource(res);
    });

    this.ruleDataService.currentRuleDataSource.subscribe(data => {this.listRegle.data = data; this.listRegle.paginator = this.paginator;});
  }

  onEdit(element) {
    console.log(element);
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    config.width = '80%';
    config.data = element;
    this.dialog.open(EditRulecmsComponent, config)
      .afterClosed().subscribe(res => {
        console.log('Close: ', res);
        this.refresh();
      });
  }

  createImagePath(serverPath: string) {
    return `${constants.serverImg}${serverPath}`;
    // return `http://localhost:4772/${serverPath}`;
  }

}
