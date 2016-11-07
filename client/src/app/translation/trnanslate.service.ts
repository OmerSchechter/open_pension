/**
 * Created by ranwahle on 10/10/2016.
 */
import {Injectable, Inject} from '@angular/core';
import { TRANSLATIONS } from './translation';
import {AppState} from "../reducers/index";
import {Store} from "@ngrx/store";
import { Observable, Subscription } from 'rxjs/Rx';
import {getTranslateState, getLanguage} from "../selectors/translation.selectors"; // import our opaque token

@Injectable()
export class TranslateService {
  //private _currentLang: string;

  currentLangage:string;

  currentLang$:Observable<string>

  // inject our translations
  constructor(@Inject(TRANSLATIONS) private _translations: any, private _store:Store<AppState>) {
    this.currentLang$ = this._store.let(getTranslateState()).let(getLanguage());
    this.currentLang$.subscribe(value => this.currentLangage = value);
  }

  // public use(lang: string): void {
  //   // set current language
  //   this._currentLang = lang;
  // }

  private translate(key: string): string {
    // private perform translation
    let translation = key;


    if (this._translations[this.currentLangage] && this._translations[this.currentLangage][key]) {
      return this._translations[this.currentLangage][key];
    }

    return translation;
  }

  public instant(key: string) {
    // public perform translation
    return this.translate(key);
  }
}
