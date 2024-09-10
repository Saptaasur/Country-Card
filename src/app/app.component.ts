import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';
import { Theme, ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'country';
  strtheme="";
  theme! : Observable<Theme>;
  constructor(private themeService:ThemeService, private api:ApiService){

  }
  ngOnInit(): void {
    this.theme = this.themeService.mode$;
    // light
    console.log(this.theme.subscribe(res=> this.strtheme=res) );
    console.log(this.strtheme);
    this.api.getAllCountry().subscribe(res => console.log(res));
  }
}
