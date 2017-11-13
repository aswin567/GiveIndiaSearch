import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {
  MatButtonModule, MatInputModule, MatCardModule,
  MatSelectModule, MatProgressBarModule, MatIconModule, MatTooltipModule, MatSnackBarModule
} from '@angular/material';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { DynamicSearchComponent } from './dynamic-search/dynamic-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    DynamicSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
