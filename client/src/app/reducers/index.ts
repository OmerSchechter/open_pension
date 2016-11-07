import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import {translateReducer, trnslateState} from "./translate.reducer";

// import exampleReducer, * as fromExample from './example';

export interface AppState {
  // example: fromExample.ExampleState;
  translate: trnslateState
};


export default compose(combineReducers)({
  // example: exampleReducer
  translate: translateReducer
});
