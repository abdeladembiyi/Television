import { Component, OnInit } from '@angular/core';
import { AccidentService } from '../../core/services/accident/accident.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.scss']
})
export class AccidentComponent implements OnInit {
  accidentForm:FormGroup;
  constructor(private service:AccidentService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.accidentForm = this.formBuilder.group({
      libelle:[null,[Validators.required]],
      dateAccident:[null,[Validators.required]],
      nombreMort:[null,[Validators.required]],
      nombreBlessure:[null,[Validators.required]],
      description:[null,[Validators.required]]
    })
  }
  onFormSubmit(form){
    this.service.addAccident(form.value).subscribe(res=>{
      console.log('bien inserer',res)
    },
    err => console.log('error')
    )}

}
