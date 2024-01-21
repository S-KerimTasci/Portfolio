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

    //"https://@w01eb728.kasserver.com/send_mail/send_mail.php"

    this.disableForm();

    console.log('sending Mail')

    // loading spinner

    let fd = new FormData();
    fd.append('name', this.nameFieldVar.value);
    //fd.append('email', this.emailFieldVar.value)
    fd.append('message', this.messageFieldVar.value + ' ++++email: '+this.emailFieldVar.value) ;
    await fetch('https://kerim-tasci.de/send_mail/send_mail.php', {
      method : 'POST',
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
  }

  enableForm(){
    this.nameFieldVar.disabled = false;
    this.emailFieldVar.disabled = false;
    this.messageFieldVar.disabled = false;
    this.sendButtonVar.disabled = false;
  }


  scrollTop(){
    document.getElementById('ATF')?.scrollIntoView();
  }
}


