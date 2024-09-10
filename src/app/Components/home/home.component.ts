import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/Models/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  Countries!:Country[];

  constructor(private api:ApiService){
    
  }
  getCountryFilter(countries :Country[]){
    console.log("....../////////");
    console.log("country: " , countries);
    this.Countries=countries;
  }
  /*
  ngOnInit(): void {
    this.api.getAllCountry().subscribe(country=>{
      this.Countries=country;
    });
  }
  */
}
