import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { constants } from 'src/app/shared/constants';
import { DataService } from 'src/app/shared/service/data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { RegleCmsService } from 'src/app/core/services/regleCms/regle-cms.service';
import { AddReglecmsComponent } from './add-reglecms/add-reglecms.component';
import { EditReglecmsComponent } from './edit-reglecms/edit-reglecms.component';

@Component({
  selector: 'app-reglecms',
  templateUrl: './reglecms.component.html',
  styleUrls: ['./reglecms.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ReglecmsComponent implements OnInit {

  listRegle = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nom', 'numOrdre', 'description', 'image', 'actions'];
  searchKey: string;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private dialog: MatDialog,
              private regleCmsService: RegleCmsService,
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
    this.dialog.open(AddReglecmsComponent, config)
      .afterClosed().subscribe(res => this.refresh());
  }

  refresh() {
    this.regleCmsService.getRules().subscribe((res: any[]) => {
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
    this.dialog.open(EditReglecmsComponent, config)
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
