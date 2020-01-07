import { Component, OnInit } from '@angular/core';
import { PointeuseService } from 'src/app/core/services/pointeuse/pointeuse.service';
import { MatTableDataSource } from '@angular/material';
import { Tv2Component } from '../tv2/tv2.component';

@Component({
  selector: 'app-pointeuse',
  templateUrl: './pointeuse.component.html',
  styleUrls: ['./pointeuse.component.scss']
})
export class PointeuseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nom', 'adresse', 'etat', 'actions'];
  datasource;
  constructor(private pointeuseService:PointeuseService) { }

  ngOnInit() {
    this.showConfig();
  }
  showConfig() {
    this.pointeuseService.getAllPointeuse()
      .subscribe((data: any[]) => {
        this.datasource = new MatTableDataSource(data);
      });
  }

  OnDesable(id) {
    if (confirm('Validez la desactivations de la pointeuse ?')) {
      console.log('pointeuse ID: ', id);
      this.pointeuseService.desactiverPointeuse(id).subscribe(res => {
        this.showConfig();
        console.log('desactivation Ok', res);
      },
        err => console.log(err));
    }
  }
  OnEnable(id) {
    if (confirm('Validez la activations de la pointeuse ?')) {
      console.log('pointeuse ID: ', id);
      this.pointeuseService.activerPointeuse(id).subscribe(res => {
        this.showConfig();
        console.log('activation Ok', res);
      },
        err => console.log(err));
    }
  }
}
