import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


// now, we have established a route to the heroes component,
// adds routing funcitionality.
// this tells the browser what to display when a certain link is pressed,
// basically creating a web between everything
const routes: Routes = [
  // this constructs a route between localhost:4200/heroes and the 
  // hero component
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  // this redirects a URL that fully matches the empty patht to
  // the route whose path is '/dashboard'
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // colon inidicates that 'id' is a placeholder for an actual id
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
