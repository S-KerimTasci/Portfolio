import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class SharedDataService {

  headerHeight: any = '';


  scrollToSection(section: any){
    setTimeout(async() => {
      this.headerHeight = document.getElementById('header')?.offsetHeight;
    await document.documentElement.style.setProperty('--scroll-padding', this.headerHeight - 1 + 'px');
    console.log(this.headerHeight);
    
    document.getElementById(section)?.scrollIntoView();
    }, 20);
    
  }
}
