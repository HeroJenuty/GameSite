import types from './action-types';
import graphQLService from '../network/graphql-service';


export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}


export const getGames = (responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.getGames(responseFields);
        dispatch(setGames(response.data.games));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function setGames (games) {
    return {type: types.SET_GAMES, payload: games}
}

export function addGameToStore (game) {
    return {type: types.ADD_GAME, payload: game}
}

export const addGame = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.addGame(variables, responseFields);
        dispatch(addGameToStore(response.data.addGame));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export const addUser = variables => async dispatch => {
    try {
        const response = await graphQLService.addUser(variables);
        dispatch(getCurrentUser());
        dispatch(saveToken(response.data.addUser));
    } catch(e){
        e.graphQLErrors.forEach(error => {
            console.log(error)
        })
        dispatch(setGraphQLError({request: "addUser", errors: []}))
    }
}


export const editUser = (variables, responseFields = "_id firstName lastName email userType games {name}") => async dispatch => {
    try {
        const response = await graphQLService.editUser(variables, responseFields);
        dispatch(getCurrentUser());
    } catch(e){
        console.log(e);
        dispatch(setGraphQLError({request: "editUser", errors: []}))
    }
}

export const login = variables => async dispatch => {
    try {
        const response = await graphQLService.login(variables);
        dispatch(getCurrentUser());
        dispatch(saveToken(response.data.login));
    } catch(e){
        console.log(e);
        dispatch(setGraphQLError({request: "login", errors: []}))
    }
}
export function saveToken(token){
    return {type: types.SAVE_TOKEN, payload: token}
}

export function setUserLoaded(){
    return {type: types.SET_USER_LOADED, payload: true}
}

export function setGraphQLError (error) {
    return { type: types.ADD_GRAPHQL_ERROR, payload: error };
}

export const getCurrentUser = () => async dispatch => {
    try {
        const response = await graphQLService.currentUser();
        dispatch(saveCurrentUser(response.data.currentUser));
        dispatch(setUserLoaded())
    } catch(e){
        dispatch(saveToken(''));
        dispatch(setUserLoaded())
    }
}

export function saveCurrentUser(user){
    return {type: types.SET_USER, payload: user}
}

export const deleteGame = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.deleteGame(variables, responseFields);
        dispatch(deleteGameFromStore(response.data.deleteGame._id));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function deleteGameFromStore (game) {
    return {type: types.DELETE_GAME, payload: game}
}

export const addGameToUser = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.editUser(variables, responseFields);
        dispatch(saveCurrentUser(response.data.editUser));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};
