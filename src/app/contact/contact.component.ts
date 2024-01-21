import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  @ViewChild('formField') formField!: ElementRef;


  nameFieldVar: any;
  emailFieldVar: any;
  messageFieldVar: any;
  sendButtonVar: any;


  ngAfterViewInit(): void {
    this.nameFieldVar = this.nameField.nativeElement;
    this.emailFieldVar = this.emailField.nativeElement;
    this.messageFieldVar = this.messageField.nativeElement;
    this.sendButtonVar = this.sendButton.nativeElement
  }


  async sendMail() {
    this.disableForm();

    let fd = new FormData();
    fd.append('name', this.nameFieldVar.value);
    fd.append('message', this.messageFieldVar.value + ' ++++email: ' + this.emailFieldVar.value);
    await fetch('https://kerim-tasci.de/send_mail/send_mail.php', {
      method: 'POST',
      body: fd
    }
    )

    // Text anzeigen Nachticht gesendet 
    this.enableForm();
  }


  disableForm() {
    this.nameFieldVar.disabled = true;
    this.emailFieldVar.disabled = true;
    this.messageFieldVar.disabled = true;
    this.sendButtonVar.disabled = true;
    document.getElementById('spinner')?.classList.remove('d-none');
  }


  enableForm() {
    this.nameFieldVar.disabled = false;
    this.emailFieldVar.disabled = false;
    this.messageFieldVar.disabled = false;
    this.sendButtonVar.disabled = false;
    document.getElementById('spinner')?.classList.add('d-none');
    this.resetForm();
  }


  resetForm(){
    this.nameFieldVar.value = '';
    this.emailFieldVar.value = '';
    this.messageFieldVar.value = '';
  }


  scrollTop() {
    document.getElementById('ATF')?.scrollIntoView();
  }
}


