import { combineReducers } from 'redux'

const movies = function(movies = [], action) {
    switch(action.type) {
        case "FETCHED_MOVIES": {
            return [...action.payload];
        }
        default:
            return movies;
        
    }
}

export default combineReducers({
    movies,
})