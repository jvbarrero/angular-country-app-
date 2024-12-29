import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'countries-table',
  templateUrl: './countryTable.component.html',
  styles: [
    `img {
        width: 25px;
      }
    `
  ],
})
export class CountriesTableComponent {

  @Input()
  public coutries: Country[] = [];

}
