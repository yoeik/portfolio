import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/pages/content/content.component';
import { IconoEditComponent } from './components/icono-edit/icono-edit.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { HomeComponent } from './components/pages/home/home.component';
import { EnfoqueComponent } from './components/pages/enfoque/enfoque.component';
import { FooterComponent } from './components/footer/footer.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { InfiniteScrollExampleComponent } from './components/infinite-scroll-example/infinite-scroll-example.component';
import { EducationComponent } from './components/education/education.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    IconoEditComponent,
    AboutComponent,
    ProjectsComponent,
    HomeComponent,
    EnfoqueComponent,
    FooterComponent,
    InfiniteScrollExampleComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
