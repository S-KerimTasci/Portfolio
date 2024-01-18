import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-element',
  templateUrl: './portfolio-element.component.html',
  styleUrl: './portfolio-element.component.scss'
})
export class PortfolioElementComponent {

  constructor(private router: Router) { }

  @Input() fd: string = '';
  @Input() imgURL: string = '';
  @Input() imgALT: string = '';
  @Input() title: string = '';
  @Input() skills: string = '';
  @Input() description: string = '';
  @Input() livelink: string = '';
  @Input() githublink: string = '';
  

  visitPage(i: string) {
    const absoluteUrl = i.startsWith('http://') || i.startsWith('https://') ? i : `http://${i}`;
    window.open(absoluteUrl, '_blank');
  }
}
