import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema.js'
// server setup
const server = new ApolloServer({
    // typeDefs -- definitions of types of data EX. game, author, etc.
    typeDefs,
    // resolvers 
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server readt at port', 4000)