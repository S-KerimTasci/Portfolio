import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {

  headerHight: any = '';

  
  ngAfterViewInit() {
    this.headerHight = document.getElementById('header')?.offsetHeight;
    document.documentElement.style.setProperty('--scroll-padding', this.headerHight - 1 + 'px')
  }

  scrollAboutMe(){
    document.getElementById('aboutMe')?.scrollIntoView();
  }

  scrollSkill(){
    document.getElementById('mySkills')?.scrollIntoView();
  }

  scrollPortfolio(){
    document.getElementById('portfolio')?.scrollIntoView();
  }

}
