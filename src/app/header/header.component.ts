import { Component} from '@angular/core';
import { SharedDataService } from '../shared-data-headerHeight.service';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{

  constructor(public sharedDataService: SharedDataService,public translationService: TranslationService) { }


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
