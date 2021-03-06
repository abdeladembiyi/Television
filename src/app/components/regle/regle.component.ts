import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { RegleService } from 'src/app/core/services/regle/regle.service';
import { MatTableDataSource, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { constants } from 'src/app/shared/constants';
import { AddRegleComponent } from './add-regle/add-regle.component';
import { EditRegleComponent } from './edit-regle/edit-regle.component';
import { DataService } from 'src/app/shared/service/data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-regle',
  templateUrl: './regle.component.html',
  styleUrls: ['./regle.component.scss'],
  providers: [NgbCarouselConfig]
})
export class RegleComponent implements OnInit {

  listRegle = new MatTableDataSource();
  displayedColumns: string[] = [ 'nom', 'numOrdre', 'description', 'image', 'actions'];
  searchKey: string;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private dialog: MatDialog,
              private regleService: RegleService,
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
    this.dialog.open(AddRegleComponent, config)
      .afterClosed().subscribe(res => this.refresh());
  }

  refresh() {
    this.regleService.getRules().subscribe((res: any[]) => {
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
    this.dialog.open(EditRegleComponent, config)
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
