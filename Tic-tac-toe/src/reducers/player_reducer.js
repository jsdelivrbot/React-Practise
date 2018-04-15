import playerButtons from "../components/player_buttons";

export default function(state = null, action){

    switch(action.type){
        case "PLAYER_MOVE":
            return action;
    }

    return state;
}
