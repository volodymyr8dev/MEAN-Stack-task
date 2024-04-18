import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ButtonsModule, ExpansionPanelModule, LibMapModule, LibMapsComponent, SectionSeparatorComponent, DashedCheckboxModule } from 'nextsapien-component-lib';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { PlacesImageComponent } from './components/placesimage.component';

export const httpLoaderFactory = (http: HttpBackend): TranslateHttpLoader => new TranslateHttpLoader(new HttpClient(http), './assets/i18n/', '.json');

@NgModule({
  declarations: [AppComponent,PlacesImageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ExpansionPanelModule,
    SectionSeparatorComponent,
    DashedCheckboxModule,
    ButtonsModule,
    // LibMapModule.forRoot({ googleMapsKey: environment.googleMapsKey, googleMapsURL: environment.googleMapsURL, }),
    // LibMapsComponent,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpBackend],
      },
    }),
  ],
  providers: [PlacesImageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
