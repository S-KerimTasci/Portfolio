import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../shared-data-headerHeight.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  headerHeight: number = 0;
  
  ngAfterViewInit() {
    this.sharedDataService.headerHeight$.subscribe((height) => {
      this.headerHeight = height;
    });
  }

  activeRoute :ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((data) => {
        this.scrollToSection(data)
    })
  }

  async scrollToSection(section:any){
    this.sharedDataService.headerHeight$.subscribe((height) => {
      this.headerHeight = height;
    });
    await document.documentElement.style.setProperty('--scroll-padding', this.headerHeight - 1 + 'px');
    document.getElementById(section)?.scrollIntoView();
  }

  navigateToRoute(route: string) {
    this.router.navigateByUrl(route);
  }
}
