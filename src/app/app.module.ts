import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponent } from '../child/child/child.component';
import { PracticeComponent } from '../practice0408/practice/practice.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AngularEditorModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ChildComponent,
    PracticeComponent,
  ],
  bootstrap: [PracticeComponent],
})
export class AppModule {}
