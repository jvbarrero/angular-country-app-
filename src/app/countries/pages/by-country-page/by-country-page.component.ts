import { Component } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

    public countries: Country[] = [];

    constructor(private countriesService: CountriesService){ }

    searchByCountry(term: string): void {
      this.countriesService.searchCountry(term).subscribe( counties => {
        this.countries = counties;
      })
    }

}
