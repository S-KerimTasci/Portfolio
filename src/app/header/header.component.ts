import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  scrollAboutMe(){
    document.getElementById('aboutMe')?.scrollIntoView({behavior:'smooth'});
  }

  scrollSkill(){
    document.getElementById('mySkills')?.scrollIntoView({behavior:'smooth'});
  }

  scrollPortfolio(){
    document.getElementById('portfolio')?.scrollIntoView({behavior:'smooth'});
  }

}
