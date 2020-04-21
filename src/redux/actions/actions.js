import types from './action-types';
import networkClient from '../network/network-client';
import graphQLService from '../network/graphql-service';

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
        //TODO you can actually connect to redux and render from it
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};