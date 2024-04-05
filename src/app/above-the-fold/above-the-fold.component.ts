import { Component, HostListener } from '@angular/core';
import { VisitPageService } from '../visit-page.service';
import { SharedDataService } from '../shared-data-headerHeight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-above-the-fold',
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

  constructor(public visitPageService: VisitPageService, public sharedDataService: SharedDataService, private router: Router) {}

  desktopWith:number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.desktopWith = event.target.innerWidth;
  }
}
