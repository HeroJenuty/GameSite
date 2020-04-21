import {combineReducers} from "redux";
import types from "./action-types";

function games(state = [], action) {
    switch (action.type) {
        case types.SET_GAMES: {
            return [...action.payload];
        }
        case types.ADD_GAME: {
            const currentGames = state.slice();
            currentGames.push(action.payload);
            return [...currentGames];
        }
        case types.DELETE_GAME: {
            return state.filter(item => item._id !== action.payload)
        }
        default:
            return state;
    }
}