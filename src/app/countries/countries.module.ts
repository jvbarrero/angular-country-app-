import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountiesRoutingModule } from './counties-routing.module';
import { SearchBoxComponent } from '../shared/components/searchBox/searchBox.component';
import { SharedModule } from '../shared/shared.module';
import { CountriesTableComponent } from './components/countryTable/countryTable.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountriesTableComponent
  ],
  imports: [
    CommonModule,
    CountiesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
