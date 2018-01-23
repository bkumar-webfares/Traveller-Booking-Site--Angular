import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightComponent } from './flight.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SearchHeaderComponent } from '../../components/header/search-header.component';
import { SearchFooterComponent } from '../../components/footer/search-footer.component';
import { MobileNavigationComponent } from '../../components/mobile-navigation/mobile-navigation.component';
import { CommonHeaderComponent } from '../../components/header/common-header.component';
import { CommonFooterComponent } from '../../components/footer/common-footer.component'


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path : ''  , component : FlightComponent , children : [
            {path : '' , component : FlightSearchComponent}
            ]}
        ]),
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        FlightComponent,        
        SearchHeaderComponent,
        SearchFooterComponent,
        MobileNavigationComponent,
        CommonHeaderComponent,
        CommonFooterComponent,
        FlightSearchComponent
        
    ],
    providers: [
    ],
})
export class FlightModule { }