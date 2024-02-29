import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {

  headerHeight: any = '';

  
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
    document.getElementById('aboutMe')?.scrollIntoView();
  }

  scrollSkill(){
    document.getElementById('mySkills')?.scrollIntoView();
  }

  scrollPortfolio(){
    document.getElementById('portfolio')?.scrollIntoView();
  }

  scrollBottom(){
    document.getElementById('contact')?.scrollIntoView();
  }

}
