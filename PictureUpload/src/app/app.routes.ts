import { Routes } from '@angular/router';
import { PictureUploadComponent } from './picture-upload/picture-upload.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'upload'},
    { path: 'upload', component: PictureUploadComponent }
];
