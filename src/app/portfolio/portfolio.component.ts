import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';
import AOS from "aos";
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  constructor(public translationService: TranslationService) { }


  ngOnInit() {
    AOS.init();
  }

}
