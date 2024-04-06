import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { SharedDataService } from '../shared-data-headerHeight.service';
import { TranslationService } from '../translation.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent  {

  http = inject(HttpClient)
  checkboxClicked:boolean = false;
  emailSent:boolean = false;
  
  contactData = {
    name : "",
    email : "",
    message : "",
  }

  @ViewChild('checkbox') checkbox! :ElementRef;

  checkboxVar:any;

  
  ngAfterViewInit(): void {
    this.checkboxVar = this.checkbox!.nativeElement;
  }

  constructor(public sharedDataService: SharedDataService, public translationService: TranslationService) { }

  sendMail(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
    }
  }

  post = {
    endPoint: 'https://kerim-tasci.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            this.emailComplete();
          }
          ,
        });
    }
  }

  checkCheckbox(){ 
    this.checkboxClicked = !this.checkboxClicked;
  }

  emailComplete(){
    this.checkboxVar.checked = false;
    this.checkboxClicked = false;
    
    this.emailSent = true
    setTimeout(() => {
      this.emailSent = false
    }, 2000);

  }
}


