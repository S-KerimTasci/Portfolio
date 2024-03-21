import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitPageService {

  gitHubLink = 'https://github.com/S-KerimTasci';
  linkedInLink = 'https://linkedin.com/in/kerim-tasci'

  visitPage(i: string) {
    const absoluteUrl = i.startsWith('http://') || i.startsWith('https://') ? i : `http://${i}`;
    window.open(absoluteUrl, '_blank');
  }
}
