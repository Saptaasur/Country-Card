import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme } from 'src/app/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentTheme$: Observable<Theme> = this.themeService.mode$; // Initialize with the mode$ observable
  Theme = Theme; // Enum reference for the template

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // This step is optional since currentTheme$ is already initialized in the declaration
    // this.currentTheme$ = this.themeService.mode$;
  }

  toggleTheme() {
    this.themeService.toggleMode();
  }
}
