import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data-headerHeight.service';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  constructor(public sharedDataService: SharedDataService, public translationService: TranslationService) { }

  images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'];
  titles = ['Angular', 'TypeScript', 'Javascript', 'HTML', 'Firebase', 'GIT', 'CSS', 'Rest-API', 'Scrum', 'Material design'];



}
