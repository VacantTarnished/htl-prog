import { Routes } from '@angular/router';
import { NumberDisplayTestComponent } from './number-display-test/number-display-test.component';

export const routes: Routes = [
    { path: '', redirectTo: 'number-display-test', pathMatch: 'full' },
    { path: 'number-display-test', component: NumberDisplayTestComponent }
];
