import { combineReducers } from "redux";

import patience from "./patienceReducer";
import diet from "./dietReducer";
import drawer from "./drawerReducer";
import check from "./checkReducer";

export default combineReducers({
    patience,
    diet,
    drawer,
    check
});