import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { OpComponent } from './op.component';
import reducer from './reducers';

import {
  HeaderComponent,
  SearchComponent,
  FooterComponent,
  PaiComponent,
  FiltersComponent
} from './components';

import {LogoComponent} from "./components/logo/logo.component";
import {TranslatePipe} from "./translation/transplate.pipe";
import {TranslateService} from "./translation/trnanslate.service";
import {TRANSLATION_PROVIDERS} from "./translation/translation";

// import { ExampleActions } from './actions';

// import { ExapleEffects } from './effects';

// import { ExampleService } from './services';

@NgModule({
  declarations: [
    OpComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    PaiComponent,
    FiltersComponent,
    LogoComponent,
    TranslatePipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    // EffectsModule.run(ExampleEffects),
  ],
  providers: [TranslateService,  ...TRANSLATION_PROVIDERS],
  bootstrap: [OpComponent]
})
export class AppModule { }
