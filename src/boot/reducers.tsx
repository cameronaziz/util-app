import { combineReducers } from "redux"
import { reducer as form } from "redux-form"

import home from "../containers/HomeContainer/reducer"

export default combineReducers({
  form,
  home,
})
