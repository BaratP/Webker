import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [

    { path: 'main', component: MainComponent },

    { path: 'gallery', component: GalleryComponent},

    { path: 'signin', component: SigninComponent },

    { path: 'signup', component: SignupComponent },

    { path: 'profile', component: ProfileComponent },

    { path: 'not-found', component: NotFoundComponent },

    { path: '', redirectTo: 'main', pathMatch: 'full' },

     { path: '**', component: NotFoundComponent },
];
