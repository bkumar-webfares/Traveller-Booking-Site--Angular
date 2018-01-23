import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelComponent } from './hotel.component';
import { HotelSearchComponent } from './hotel-search/search.component';
import { SearchHeaderComponent } from '../../components/header/search-header.component';
import { SearchFooterComponent } from '../../components/footer/search-footer.component';
import { MobileNavigationComponent } from '../../components/mobile-navigation/mobile-navigation.component';
import { CommonHeaderComponent } from '../../components/header/common-header.component';
import { CommonFooterComponent } from '../../components/footer/common-footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path : ''  , component : HotelComponent , children : [
            {path : '' , component : HotelSearchComponent}
            ]}
        ]),
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        HotelComponent,
        HotelSearchComponent,
        SearchHeaderComponent,
        SearchFooterComponent,
        MobileNavigationComponent,
        CommonHeaderComponent,
        CommonFooterComponent
        
    ],
    providers: [
    ],
})
export class HotelModule { }