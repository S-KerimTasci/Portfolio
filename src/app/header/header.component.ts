import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {

  headerHeight: any = '';

  constructor(private router: Router) { }

  navigateToRoute(route: string) {
    this.router.navigateByUrl(route);
  }
  
  ngAfterViewInit() {
    this.headerHeight = document.getElementById('header')?.offsetHeight;
    document.documentElement.style.setProperty('--scroll-padding', this.headerHeight - 1 + 'px')
  }

  openResponsiveMenu(){
    document.getElementById('header_res_menu')?.classList.remove('d-none')
    document.getElementById('body')?.classList.add('overflowHidden')
    document.getElementById('open_menu')?.classList.add('d-none')
    document.getElementById('close_menu')?.classList.remove('d-none')
  }

  closeResponsiveMenu(){
    document.getElementById('header_res_menu')?.classList.add('d-none')
    document.getElementById('body')?.classList.remove('overflowHidden')
    document.getElementById('open_menu')?.classList.remove('d-none')
    document.getElementById('close_menu')?.classList.add('d-none')
  }

  scrollAboutMe(){
    this.navigateToRoute('')
    document.getElementById('aboutMe')?.scrollIntoView();
    this.closeResponsiveMenu();
  }

  scrollSkill(){
    this.navigateToRoute('')
    document.getElementById('mySkills')?.scrollIntoView();
    this.closeResponsiveMenu();
  }

  scrollPortfolio(){
    this.navigateToRoute('')
    document.getElementById('portfolio')?.scrollIntoView();
    this.closeResponsiveMenu();
  }

  scrollBottom(){
    this.navigateToRoute('')
    document.getElementById('contact')?.scrollIntoView();
    this.closeResponsiveMenu();
  }

}
