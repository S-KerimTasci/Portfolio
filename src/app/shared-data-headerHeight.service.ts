import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private headerHeightSubject = new BehaviorSubject<any>(null);
  public headerHeight$ = this.headerHeightSubject.asObservable();

  headerHeight: any = '';

  constructor (){}


  // setHeaderHeight(height: number) {
  //   this.headerHeightSubject.next(height);
  // }

  async scrollToSection(section: any){
    // this.headerHeight$.subscribe((height) => {
    //   this.headerHeight = height;
    // });
    this.headerHeight = document.getElementById('header')?.offsetHeight;
    await document.documentElement.style.setProperty('--scroll-padding', this.headerHeight - 1 + 'px');
    console.log(this.headerHeight);
    
    document.getElementById(section)?.scrollIntoView();
  }
}
