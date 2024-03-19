import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private headerHeightSubject = new BehaviorSubject<any>(null);
  public headerHeight$ = this.headerHeightSubject.asObservable();

  setHeaderHeight(height: number) {
    this.headerHeightSubject.next(height);
  }
}
