import {Observable} from "rxjs/Rx";
import {AppState} from "../reducers/index";

import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';
import '@ngrx/core/add/operator/select';

/**
 * Created by ranwahle on 07/11/2016.
 */
export function getTranslateState(){
  return (state$: Observable<AppState>) => state$.select(s => s.translate);
}

export function getLanguage(){
  return (state$: Observable<any>) => state$.select(s => s.currentLanguage);
}
