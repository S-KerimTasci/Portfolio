import { Component } from '@angular/core';
import { VisitPageService } from '../visit-page.service';

@Component({
  selector: 'app-above-the-fold',
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

  constructor(public visitPageService: VisitPageService) { }

  scrollBottom(){
    document.getElementById('contact')?.scrollIntoView();
  }

}
