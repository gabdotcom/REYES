import { Component } from '@angular/core';
import { ThemeService } from './theme.service'; // Import the theme service

interface Post {
  id: number;
  title: any;
  content: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reyes';

  constructor(private themeService: ThemeService) { }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  // storedPosts: Post[] = [];
  // onPostAdded(post: any): void {
  //   this.storedPosts.push(post);
  // }
}
