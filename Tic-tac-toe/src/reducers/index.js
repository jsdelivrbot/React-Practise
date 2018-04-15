import { combineReducers } from "redux";
import  player from "./player_reducer";


const rootReducer = combineReducers({
    position: player
});

export default rootReducer;
