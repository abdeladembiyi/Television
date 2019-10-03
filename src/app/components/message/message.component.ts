import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { MessageService } from 'src/app/core/services/message/message.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
formMessage : FormGroup;
  constructor(private service:MessageService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.formMessage = this.formBuilder.group({
      libelle: [null,[Validators.required]],
      dateMessage: [{value:moment().format('DD/MM/YYYY')},Validators.required],
      titre : [null,[Validators.required]],
      show:[null,[Validators.required]]
    })
  }

  onFormSubmit(form){
    console.log(form.value);
    // const data = {
    //   libelle: form.value.libelle,
    //   dateMessage: form.value.dateMessage,
    //   titre: form.value.titre,
    //   show: (form.value.show) ? 1:0
    // };
    // console.log(data);
    // this.service.AjouterMessage(data).subscribe(res =>{
    //   console.log(res)
    // })
  }
}
