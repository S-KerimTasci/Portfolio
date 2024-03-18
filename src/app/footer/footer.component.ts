import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  activeRoute :ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((data) => {
        this.scrollToSection(data)
    }
    )
  }

  scrollToSection(section:any){
    document.documentElement.style.setProperty('--scroll-padding', 400 + 'px')
    document.getElementById(section)?.scrollIntoView();
  }

  navigateToRoute(route: string) {
    this.router.navigateByUrl(route);
  }

  async scrollBottom(){
    await this.navigateToRoute('')
    document.getElementById('contact')?.scrollIntoView();
  }

}
