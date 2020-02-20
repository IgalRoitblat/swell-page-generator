import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { ChooseWidgetsComponent } from './choose-widgets/choose-widgets.component';
import { AvailableWidgetsComponent } from './available-widgets/available-widgets.component';
import { AvailableWidgetComponent } from './available-widget/available-widget.component';
import { ProgramGeneratorControlsComponent } from './program-generator-controls/program-generator-controls.component';
import { ConfigureWidgetComponent } from './configure-widget/configure-widget.component';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { CodeOutputComponent } from './code-output/code-output.component';
import { AboutLinkComponent } from './about-link/about-link.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'start', component: GetStartedComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    AboutComponent,
    HomeComponent,
    GetStartedComponent,
    ChooseWidgetsComponent,
    AvailableWidgetsComponent,
    AvailableWidgetComponent,
    ProgramGeneratorControlsComponent,
    ConfigureWidgetComponent,
    EscapeHtmlPipe,
    CodeOutputComponent,
    AboutLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
