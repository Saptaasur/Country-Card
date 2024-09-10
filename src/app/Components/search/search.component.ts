import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/Models/api';
import { ApiService } from 'src/app/services/api.service';

const REGION_OPTIONS=['Africa','Americas','Asia','Europe','Oceania'];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  SearchFilter: string = "";
  SelectFilter: string = "";
  country!: Country[];
  @Output() EventFilter: EventEmitter<Country[]>;
  regionOptions = REGION_OPTIONS;
  showOption=false;
  placeholder="Filter By Region";

  constructor(private api: ApiService) {
    this.EventFilter = new EventEmitter<Country[]>();
  }
  ChangeSearch() {
    console.log("1-SearchFilter= ", this.SearchFilter, "\ncountry= ", this.country);
    this.EventFilter.emit(this.countriesFilter());
  }
  ngOnInit(): void {
    this.api.getAllCountry().subscribe(countries => {
      this.country = countries;
      this.EventFilter.emit(this.country);
    });
  }

  
  countriesFilter(){
    // codition? yes:no if,else
    return this.country? 
    this.country.filter(country=> this.SearchFilter?
        country.name.toLowerCase().includes(this.SearchFilter.toLowerCase()):country
    ).filter(country=>
        this.regionOptions?
        country.region.includes(this.SelectFilter)
        :country
      )
    :this.country;

    if(this.SearchFilter!=""){
      return this.country.filter(country => country.name.toLowerCase().includes(this.SearchFilter.toLowerCase()));
    }
    return this.country;
  }

  toggleOptions(){
    this.showOption = !this.showOption;
  }
  select(option:string){
    this.SelectFilter=option;
    this.placeholder=option;
    this.ChangeSearch()
  }


}
