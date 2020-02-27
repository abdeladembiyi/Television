import { Component, OnInit, ModuleWithComponentFactories, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/core/services/message/message.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { MatPaginator, MatSort,MatTableDataSource, MatCheckbox } from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  falseValue = 'false';
  trueValue = 'true';
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
formMessage : FormGroup;
  constructor(private service:MessageService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.formMessage = this.formBuilder.group({
      libelle: [null,[Validators.required]],
      dateMessage: [{value:moment().format('DD/MM/YYYY')},Validators.required],
      titre : [null,[Validators.required]],
      show:[false,[Validators.required]],
      messagearab:[null,[Validators.required]]
    })

    this.service.getAllMessage().subscribe(res => {
      this.dataSource = new MatTableDataSource(<any> res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });

  }

  displayedColumns: string[] = [ 'libelle', 'dateMessage' ,'titre', 'messagearab' , 'Action','etat'];

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
  checkbox.value = checked ? this.trueValue : this.falseValue;
 }

 delete(id) {
  if (confirm("etes-vous sur de supprimer ce message ?  ")) {
    this.service.deleteMessage(id).subscribe(res => {
      this.service.getAllMessage();
      this.ngOnInit();
    }
    );this.ngOnInit();
  }
}

blocked(element, operation) {
  const data = {
    id:element.id,
    libelle: element.libelle,
    dateMessage: element.dateMessage,
    titre: element.titre,
    messagearab : element.messagearab,
    show: operation === 'lock' ? true : false
  }
  this.service.updateMessage(data.id, data).subscribe(res => {
    console.log('Update Message ref', res);
    this.ngOnInit();
  });
  // console.log(`Element: , operation: ${operation}`, element);
  element.etat = operation === 'lock' ? true : false;
 
}


  onFormSubmit(form){
    console.log(form.value);
    const data = {
      libelle: form.value.libelle,
      dateMessage: form.value.dateMessage,
      titre: form.value.titre,
      show: form.value.show,
      messagearab : form.value.messagearab
    };
    console.log(data);
    this.service.AjouterMessage(data).subscribe(res =>{
      console.log(res)
      this.ngOnInit();
    })
  }
}
