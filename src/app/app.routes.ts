import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Photo } from './photo/photo';
import { Rsvp } from './rsvp/rsvp';
import { Registry } from './registry/registry';
import { Faq } from './faq/faq';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'photo', component: Photo},
    {path: 'rsvp', component: Rsvp},
    {path: 'registry', component: Registry},
    {path: 'faq', component: Faq},
    
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    
];
