// translation.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {


  public isGerman: boolean = true; // Starte mit Deutsch


  translate() {
    if (this.isGerman == true) {
      this.translateFromGerman();
    } else {
      this.translateFromEnglish();
    }
    this.toggleTranslationDirection(); // Übersetzungsrichtung umschalten
  }


  translateFromEnglish() {
    document.getElementById('header_AM')!.innerHTML = ('Über mich');
    document.getElementById('res_header_AM')!.innerHTML = ('Über mich');
    document.getElementById('contactHeaderRes')!.innerHTML = ('Kontakt');

    if (document.getElementById('AM_header')) {
    document.getElementById('AM_header')!.innerHTML = ('Über mich');
    document.getElementById('AM_text1')!.innerHTML = ('Hallo, mein Name ist Kerim Tasci und ich bin ein Frontend Entwickler aus München. Mit Leidenschaft für das Programmieren habe ich mich auf Sprachen wie <b>JavaScript</b>, Frameworks wie <b>Angular</b> und die Arbeit mit <b>REST-API</b> spezialisiert.');
    document.getElementById('AM_text2')!.innerHTML = ('Ich sehe Code nicht einfach als Zeilen auf einem Bildschirm, sondern als ein Mittel, um reale Probleme zu lösen. Als engagierter Problemlöser bringe ich Kreativität und Präzision in jedes Projekt ein, das ich angehe.');
    document.getElementById('AM_text3')!.innerHTML = ('Auf dieser Seite präsentiere ich einige meiner Projekte, die meine Fähigkeiten als Frontend Entwickler widerspiegeln. Schreiben Sie mir gerne, wenn Sie auf der Suche nach einem motivierten Junior Frontend Entwickler sind.')

    document.getElementById('MS_text')!.innerHTML = ('Während meiner Arbeit an verschiedenen Einzel- und Gruppenprojekten konnte ich mich mit den folgenden Technologien vertraut machen.');

    document.getElementById('port_text')!.innerHTML = ('Diese Seite zeigt eine Auswahl meiner Arbeit! Scrollen Sie nach unten, um einige meiner Projekte anzusehen.')

    document.getElementById('conatctHeader')!.innerHTML = ('Kontakt');
    document.getElementById('problemHeader')!.innerHTML = ('Auf der Suche nach einer Lösung für Ihr Problem?');
    document.getElementById('contactText')!.innerHTML = ('Kontaktieren Sie mich. Ich freue mich darauf, von Ihnen zu hören. Ich bin gespannt darauf, mehr über Ihre Ideen zu erfahren und dazu beizutragen, Ihre Projekte mit meiner Arbeit voranzubringen.');
    document.getElementById('contactText2')!.innerHTML = ('Brauchen Sie einen Frontend Entwickler? <b>Kontaktieren Sie mich!</b>');

    (<HTMLInputElement>document.getElementById('nameField')!).placeholder = ('Name');
    (<HTMLInputElement>document.getElementById('emailField')!).placeholder = ('Email');
    (<HTMLInputElement>document.getElementById('messageField')!).placeholder = ('Nachricht');

    document.getElementById('sendButton')!.innerHTML = ('Senden');

    document.getElementById('footerImprint')!.innerHTML = ('Impressum');
    document.getElementById('footerImprintRes')!.innerHTML = ('Impressum');
    } 
    else{
      document.getElementById('imprint')!.innerHTML = ('Impressum');
      document.getElementById('privacyPolicy')!.innerHTML = ('Datenschutzerklärung');
    }  
    }

  translateFromGerman() {
    document.getElementById('header_AM')!.innerHTML = ('About me');
    document.getElementById('res_header_AM')!.innerHTML = ('About me');
    document.getElementById('contactHeaderRes')!.innerHTML = ('Contact');

    if (document.getElementById('AM_header')) { 
    document.getElementById('AM_header')!.innerHTML = ('About me');
    document.getElementById('AM_text1')!.innerHTML = ('Hello my name is Kerim Tasci and I am a frontend developer based in Munich, Germany. With a passion for coding, I specialize in languages like <b>JavaScript</b>, frameworks like <b>Angular</b> and working with <b>REST-API</b>.');
    document.getElementById('AM_text2')!.innerHTML = ('I see code not just as lines on a screen, but as a tool to solve real-world problems. As a dedicated problem solver, I bring creativity and precision to every project I undertake.');
    document.getElementById('AM_text3')!.innerHTML = ('On this page, I showcase some of my projects that reflect my skills as a frontend developer. Contact me if you are looking for a junior frontend developer eager to contribute to innovative projects in your team.');

    document.getElementById('MS_text')!.innerHTML = ('While working on several individual and group projects, I was able to familiarize myself with the following technologies.');

    document.getElementById('port_text')!.innerHTML = ('This page is a sample of my work! Scroll down to view other projects I have developed.')

    document.getElementById('conatctHeader')!.innerHTML = ('Contact');  

    document.getElementById('problemHeader')!.innerHTML = ('Got a problem to solve?');
    document.getElementById('contactText')!.innerHTML = ('Contact me through this form. I am looking forward to hearing from you. I would like to learn about your ideas and contribute to your projects with my work.');
    document.getElementById('contactText2')!.innerHTML = ('Need a Frontend developer? <b>Contact me!</b>');
  
    (<HTMLInputElement>document.getElementById('nameField')!).placeholder = ('Your name');
    (<HTMLInputElement>document.getElementById('emailField')!).placeholder = ('Your email');
    (<HTMLInputElement>document.getElementById('messageField')!).placeholder = ('Your message');

    document.getElementById('sendButton')!.innerHTML = ('Send message');

    document.getElementById('footerImprint')!.innerHTML = ('Imprint');
    document.getElementById('footerImprintRes')!.innerHTML = ('Imprint');
    }
    else{
      document.getElementById('imprint')!.innerHTML = ('Imprint');
      document.getElementById('privacyPolicy')!.innerHTML = ('Privacy policy');
    }
  }

  toggleTranslationDirection() {
    this.isGerman = !this.isGerman;
  }
}
