import { NgModule } from '@angular/core';

import { CountryListModule } from './country-list/country-list.module';
import { CountryModule } from './country/country.module';
import { CountryDetailComponent } from './country-detail/country-detail.component';

@NgModule({

    imports: [ 
        CountryModule,
        CountryListModule
        
    ],

    declarations: [CountryDetailComponent]
})

export class CountriesModule {}
