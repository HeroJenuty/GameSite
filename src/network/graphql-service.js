import gql from 'graphql-tag';
import graphQLClient from './graphql-client';
import { addGameToUser } from '../redux/actions';

export default {
    async getGames(responseFields) {
        const response = await graphQLClient.query({
            query: gql`
                query {
                    games {
                        ${responseFields}
                    }
                }
            `
        })
        return response;
    },
    async addGame(variables, responseFields) {
        const response = await graphQLClient.mutate({
            mutation: gql`mutation($name: String!, $description: String!, $imageURL: String!, $price: Float!){
                addGame(name: $name, description: $description, imageURL: $imageURL, price: $price){
                    ${responseFields}
                }
            }`,
            variables
        })
        return response;
    },

    async addGameToUser(variables, responseFields) {
        const response = await graphQLClient.mutate({
            mutation: gql`mutation($_id: String!, $games:[GameInput]!){
                addGameToUser(_id: $_id, games: $games){
                    ${responseFields}
                }
            }`,
            variables
        })
        return response;
    },

    async deleteGame(variables, responseFields) {
        const response = await graphQLClient.mutate({
            mutation: gql`mutation($_id: String!){
                deleteGame(_id: $_id){
                    ${responseFields}
                }
            }`,
            variables
        })
        return response;
    },
    async editUser(variables, responseFields) {
        const response = await graphQLClient.mutate({
            mutation: gql`
            mutation($_id: String!, $username: String, $email: String,
                $password: String, $games: [GameInput]){
               editUser(_id: $_id, username: $username, email: $email, 
                   password: $password, games: $games){
                    games {
                        name
                    }
               }
           }`,
            variables
        })
        return response;
    },

    async addUser(variables) {
        const response = await graphQLClient.mutate({
            mutation: gql`mutation($firstName: String!, $lastName: String!, $email: String!, $userType: String!, $password: String!){
                addUser(firstName: $firstName, lastName: $lastName, email: $email, userType: $userType, password: $password)
            }`,
            variables
        })
        return response;
    },

    async login(variables) {
        const response = await graphQLClient.mutate({
            mutation: gql`mutation($email: String!, $password: String!){
                login(email: $email, password: $password)
            }`,
            variables
        })
        return response;
    },

    async logout() {
        graphQLClient.clearStore();
    },

    async currentUser(responseFields = "_id firstName lastName email userType games {name}") {
        const response = await graphQLClient.query({
            query: gql`
                query {
                    currentUser {
                        ${responseFields}
                    }
                }
            `
        })
        return response;
    }

}

