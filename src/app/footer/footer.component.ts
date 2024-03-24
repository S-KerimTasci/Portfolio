import { Component,} from '@angular/core';
import { SharedDataService } from '../shared-data-headerHeight.service';
import { VisitPageService } from '../visit-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(public sharedDataService: SharedDataService, public visitPageService: VisitPageService) { }

}
