import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/Models/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
   countryName :string="" ;
   country !:Country;
   borderCountries !:Country[];
   constructor(private activeRoute:ActivatedRoute,
               private api:ApiService){

   }
   ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      res=>{
        this.countryName = String(res.get('Country'));
        this.api.getCountryByName(this.countryName).subscribe(res=>
        {
          this.country=res[0];
          console.log("res=",res);
          console.log("country.borders=",this.country.borders);
          this.api.getCountriesByCodes(this.country.borders).subscribe(
            res=>{
              this.borderCountries=res;
            });
        });
    });
  
      /*
        this.api.getCountriesByCodes(this.country.borders)
      .subscribe(
        res=>{
          this.borderCountries=res;
        }
      );*/


      //this.api.getCountriesByCodes(this.country.borders)
      /*.subscribe(
        res=>{
          this.borderCountries=res;
        }
      );
      console.log("......... ",this.borderCountries[0].name);
      */
  }
   

}
