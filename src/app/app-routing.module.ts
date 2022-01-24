import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./components/pages/about/about.component";
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { HomeComponent } from './components/pages/home/home.component';
import { EnfoqueComponent } from './components/pages/enfoque/enfoque.component';
import { EducationComponent } from './components/education/education.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'enfoque', component: EnfoqueComponent},
  {path: 'edu', component: EducationComponent},
  {path: 'proyectos', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
