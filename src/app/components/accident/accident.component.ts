import { Component, OnInit, ViewChild } from '@angular/core';
import { AccidentService } from '../../core/services/accident/accident.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatSort,MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.scss']
})
export class AccidentComponent implements OnInit {
  accidentForm:FormGroup;
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private service:AccidentService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.accidentForm = this.formBuilder.group({
      libelle:[null,[Validators.required]],
      dateAccident:[null,[Validators.required]],
      nombreMort:[null,[Validators.required]],
      nombreBlessure:[null,[Validators.required]],
      description:[null,[Validators.required]]
    });
    this.service.getAccident().subscribe(res => {
      this.dataSource = new MatTableDataSource(<any> res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res);
    });
  }
  displayedColumns: string[] = [ 'libelle', 'dateAccident' ,'nombreMort', 'nombreBlessure' , 'description','Action'];

  onFormSubmit(form){
    this.service.addAccident(form.value).subscribe(res=>{
      console.log('bien inserer',res);
      this.ngOnInit();
    },
    err => console.log('error')
    )}

    delete(id) {
      if (confirm("etes-vous sur de supprimer cette Accident ?  ")) {
        this.service.deleteAccident(id).subscribe(res => {
          this.service.getAccident();
          this.ngOnInit();
        }
        );this.ngOnInit();
      }
    }   

}


