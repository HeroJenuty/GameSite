import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {setContext} from 'apollo-link-context';
import constants from '../constants';


const httpLink = createHttpLink({
    uri: constants.graphQLURL
})

const authLink = setContext((_, {headers}) =>{
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWM2ZDhmODM4ZmEwZDAwMDQ5YWE4NWQiLCJlbWFpbCI6InRlc3RAYWJ2LmJnIiwiaWF0IjoxNTkwMDg5OTc3LCJleHAiOjE1OTAxNzYzNzd9.VEPAe8Udt7QnTst7L4jXg70AlbYpTzo3jsaRJaOcKEM';
    return{
        headers:{
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

export default new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})