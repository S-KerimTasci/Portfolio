import { AfterViewInit, Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { SharedDataService } from '../shared-data-headerHeight.service';
import { TranslationService } from '../translation.service';
import { FormsModule, NgForm } from '@angular/forms';
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

  sendMail(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
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
            this.emailSent = true
            setTimeout(() => {
              this.emailSent = false
            }, 2000);
          }
          ,
        });
    }
  }

  checkCheckbox(){
    
    this.checkboxClicked = !this.checkboxClicked;
    console.log(this.checkboxClicked);
    
  }
  
  
  
  // @ViewChild('nameField') nameField!: ElementRef;
  // @ViewChild('emailField') emailField!: ElementRef;
  // @ViewChild('messageField') messageField!: ElementRef;
  // @ViewChild('sendButton') sendButton!: ElementRef;
  // @ViewChild('formField') formField!: ElementRef;


  // nameFieldVar: any;
  // emailFieldVar: any;
  // messageFieldVar: any;
  // sendButtonVar: any;

  constructor(public sharedDataService: SharedDataService, public translationService: TranslationService) { }


  // ngAfterViewInit(): void {
  //   this.nameFieldVar = this.nameField.nativeElement;
  //   this.emailFieldVar = this.emailField.nativeElement;
  //   this.messageFieldVar = this.messageField.nativeElement;
  //   this.sendButtonVar = this.sendButton.nativeElement
  // }


  // async sendMail() {
  //   this.disableForm();

  //   let fd = new FormData();
  //   fd.append('name', this.nameFieldVar.value);
  //   fd.append('message', this.messageFieldVar.value + ' ++++email: ' + this.emailFieldVar.value);
  //   await fetch('https://kerim-tasci.de/send_mail/send_mail.php', {
  //     method: 'POST',
  //     body: fd
  //   }
  //   )

  //   // Text anzeigen Nachticht gesendet 
  //   this.enableForm();
  // }


  // disableForm() {
  //   this.nameFieldVar.disabled = true;
  //   this.emailFieldVar.disabled = true;
  //   this.messageFieldVar.disabled = true;
  //   this.sendButtonVar.disabled = true;
  //   document.getElementById('spinner')?.classList.remove('d-none');
  // }


  // enableForm() {
  //   this.nameFieldVar.disabled = false;
  //   this.emailFieldVar.disabled = false;
  //   this.messageFieldVar.disabled = false;
  //   this.sendButtonVar.disabled = false;
  //   document.getElementById('spinner')?.classList.add('d-none');
  //   this.resetForm();
  // }


  // resetForm() {
  //   this.nameFieldVar.value = '';
  //   this.emailFieldVar.value = '';
  //   this.messageFieldVar.value = '';
  // }
}


