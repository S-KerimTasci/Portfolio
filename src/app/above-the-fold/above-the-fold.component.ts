import { Component, OnInit } from '@angular/core';
import { VisitPageService } from '../visit-page.service';
import { SharedDataService } from '../shared-data-headerHeight.service';
import { Router } from '@angular/router';
import AOS from "aos";

@Component({
  selector: 'app-above-the-fold',
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent implements OnInit{

  constructor(public visitPageService: VisitPageService, public sharedDataService: SharedDataService, private router: Router) { }

  ngOnInit(): void {
    AOS.init();
  }

}
