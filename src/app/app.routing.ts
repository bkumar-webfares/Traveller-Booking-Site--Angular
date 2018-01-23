import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', loadChildren : 'app/modules/login/login.module#LoginModule' },
    { path: 'flight', loadChildren : 'app/modules/flight/flight.module#FlightModule' },
    { path: 'hotel', loadChildren : 'app/modules/hotel/hotel.module#HotelModule' },
];

const routing =  RouterModule.forRoot(APP_ROUTES, {
});

export {routing};