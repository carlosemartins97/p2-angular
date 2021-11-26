import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarlosHomeComponent } from './carlos-home/carlos-home.component';
import { CarlosTasksComponent } from './carlos-tasks/carlos-tasks.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: CarlosHomeComponent, pathMatch: 'full' },
      { path: 'tasks', component: CarlosTasksComponent },
    ]),
  ],
  declarations: [AppComponent, CarlosHomeComponent, CarlosTasksComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
