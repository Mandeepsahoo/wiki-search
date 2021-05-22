import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private wikipediaService: WikipediaService) {}

  pages = [];

  onTerm(term) {
    this.wikipediaService.search(term).subscribe(
      (response: any) => {
        this.pages = response;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
