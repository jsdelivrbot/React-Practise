export const PLAYER_MOVE = "PLAYER_MOVE";

export default function fetchPlayer(player_info, index){
    return{
        type: PLAYER_MOVE,
        payload : player_info,
        index: index
    }
}
