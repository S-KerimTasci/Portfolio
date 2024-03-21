import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VisitPageService } from '../visit-page.service';

@Component({
  selector: 'app-portfolio-element',
  templateUrl: './portfolio-element.component.html',
  styleUrl: './portfolio-element.component.scss'
})
export class PortfolioElementComponent {

  constructor(private router: Router, public visitPageService: VisitPageService) { }

  @Input() fd: string = '';
  @Input() imgURL: string = '';
  @Input() imgALT: string = '';
  @Input() title: string = '';
  @Input() skills: string = '';
  @Input() id: string = '';
  @Input() description: string = '';
  @Input() livelink: string = '';
  @Input() githublink: string = '';
}
