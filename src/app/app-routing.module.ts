import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'locations',
    loadChildren: () => import('./locations/locations.module').then( m => m.LocationsPageModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('./episodes/episodes.module').then( m => m.EpisodesPageModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./characteres/characteres.module').then( m => m.CharacteresPageModule)
  },
  {
    path: 'character/:id',
    loadChildren: () => import('./character/character.module').then( m => m.CharacterPageModule)
  },
  {
    path: 'episode/:id',
    loadChildren: () => import('./episode/episode.module').then( m => m.EpisodePageModule)
  },
  {
    path: 'location/:id',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'quotes',
    loadChildren: () => import('./quotes/quotes.module').then( m => m.QuotesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
