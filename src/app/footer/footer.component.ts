import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router: Router) { }

  navigateToRoute(route: string) {
    this.router.navigateByUrl(route);
  }

  scrollBottom(){
    this.navigateToRoute('')
    document.getElementById('contact')?.scrollIntoView();
  }

}
