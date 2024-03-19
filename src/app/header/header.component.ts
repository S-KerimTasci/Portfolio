import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../shared-data-headerHeight.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  headerHeight: any = '';
  activeRoute :ActivatedRoute = inject(ActivatedRoute);

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.headerHeight = document.getElementById('header')?.offsetHeight;
    this.sharedDataService.setHeaderHeight(this.headerHeight);

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
}
