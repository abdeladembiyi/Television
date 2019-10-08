import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormErrorStateMatcher } from 'src/app/core/handlers/form-error-state-matcher';
import { MatDialogRef } from '@angular/material';
import { DataService } from 'src/app/shared/service/data.service';
import { take } from 'rxjs/operators';
import { RegleCmsService } from 'src/app/core/services/regleCms/regle-cms.service';

@Component({
  selector: 'app-add-reglecms',
  templateUrl: './add-reglecms.component.html',
  styleUrls: ['./add-reglecms.component.scss']
})
export class AddReglecmsComponent implements OnInit {
  regleForm: FormGroup;
  fileToUpload;
  matcher = new FormErrorStateMatcher();
  isLoadingResults = false;
  fileData: File = null;
  previewUrl: any = null;

  constructor(private formBuilder: FormBuilder,
              private regleCmsService: RegleCmsService,
              private dialogRef: MatDialogRef<AddReglecmsComponent>,
              private ruleDataService: DataService) { }

  ngOnInit() {
    this.ruleDataService.currentRuleDataSource.subscribe();

    this.regleForm = this.formBuilder.group({
      numOrdre: [null, [Validators.required, Validators.min(1)]],
      nom: [null, [Validators.required]],
      description: [null, [Validators.required]],
      // file: [null, Validators.required],
      show: [null, [Validators.required]]
    });
  }

  onFormSubmit(form) {
    console.log(form.value);
    const data = {
      numOrdre: form.value.numOrdre,
      nom: form.value.nom,
      description: form.value.description,
      image: this.previewUrl,
      show: (form.value.show) ? 1 : 0
    };

    this.regleCmsService.addRule(data).subscribe(async res => {
      console.log('add regle: ', res);
      // tslint:disable-next-line:no-shadowed-variable
      await this.regleCmsService.getRules().pipe(take(1)).toPromise().then(data => this.ruleDataService.changeRuleDataSource(data));
    });
    this.regleForm.reset();
    this.close();
    // this.dialogRef.afterClosed().subscribe(res => this.updateDataSource());
  }

  public upload(event: any): void {
    this.fileData = event.target.files[0];
    console.log('FileName: ', this.fileData.name);
    this.preview();
  }

  preview() {
    // Show preview 
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (event) => {
      this.previewUrl = reader.result;
      console.log('Result: ', reader.result);
      console.log('Reader: ', this.previewUrl);
    };
  }

  /*updateDataSource() {
    this.ruleDataService.currentRuleDataSource.subscribe();
    this.regleService.getRules().subscribe(res =>  {
      console.log('Add Rule Change DataSource');
      this.ruleDataService.changeRuleDataSource(res);
    });
  }*/

  close() {
    this.dialogRef.close();
  }
}
