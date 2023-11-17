import  fs  from 'fs'
import path from 'path';
import express from 'express'
import dotenv from 'dotenv'
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';

// Resolvers and data
import db from './db.js'
import QueryResolver from './resolvers/Query.js'
import PageSummaryResolver from './resolvers/PageSummary.js';
import PageResolver from './resolvers/Page.js';
import CategoryResolver from './resolvers/Category.js';

// Load env configs
dotenv.config();
const SERVER_PORT = process.env["SERVER_PORT"] || 4000
const SERVER_ENABLE_APOLLO = process.env["SERVER_ENABLE_APOLLO"] || false

// Configure and Start Apolo GraphQL
const typeDefs = fs.readFileSync("./schema.graphql", { encoding: 'utf8', flag: 'r' })

const resolvers = {
  Query: QueryResolver,
  PageSummary: PageSummaryResolver,
  Page: PageResolver,
  Category: CategoryResolver
};

let apolloSettings = SERVER_ENABLE_APOLLO ? { typeDefs, resolvers } : {
  typeDefs,
  resolvers,
  introspection: true, 
  allowBatchedHttpRequests: false, 
  plugins: [ApolloServerPluginLandingPageDisabled()],
}

const server = new ApolloServer(apolloSettings);

await server.start();

// Configure Express
const app = express();

// Leaked tokens
const token_alexander = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJuYW1lIjoiQWxleGFuZGVyIEhhcnJpc29uIiwidXNlcm5hbWUiOiJhbGV4X2hhcnJpc29uIiwiZW1haWwiOiJhbGV4YW5kZXIuaGFycmlzb25Ad2lja2VkY29ycC5jb20iLCJyb2xlIjp7ImlkIjoiMSIsIm5hbWUiOiJFbXBsb3llZSJ9LCJpYXQiOjE3MDAwOTA0MDR9.gwBdNrw9jHvpABrwni4xeuc1koycKh39l5xmJUyZ7SE"
const token_benjamin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMiLCJuYW1lIjoiQmVuamFtaW4gUmV5bm9sZHMiLCJ1c2VybmFtZSI6ImJlbmphbWluX3JleW5vbGRzIiwiZW1haWwiOiJiZW5qYW1pbi5yZXlub2xkc0B3aWNrZWRjb3JwLmNvbSIsInJvbGUiOnsiaWQiOiIzIiwibmFtZSI6IkhSIFNwZWNpYWxpc3QifSwiaWF0IjoxNzAwMDkwNDY4fQ.0_YbkRIRl14QSWJpL-Rd_jcsRrTA7Bsk-rk45nl33e8"
const token_natalie = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgiLCJuYW1lIjoiTmF0YWxpZSBXYWxrZXIiLCJ1c2VybmFtZSI6Im5hdGFsaWVfd2Fsa2VyIiwiZW1haWwiOiJuYXRhbGllLndhbGtlckB3aWNrZWRjb3JwLmNvbSIsInJvbGUiOnsiaWQiOiIxIiwibmFtZSI6IkVtcGxveWVlIn0sImlhdCI6MTcwMDA5MDk3M30.pY3JbwqovOOfYKJzeUnzzkccRWgncae_bTJgtTkw3Z8"

// Set Apollo GraphQL path
app.use('/graphql', express.json(), expressMiddleware(server, {
    context: async ({req, res}) => {
      let token = req.headers.authorization || '';
      token = token.split(' ').pop()

      let userId = token === token_alexander ? 5 : null 
      userId = token === token_benjamin ? 3 : userId
      userId = token === token_natalie ? 8 : userId

      return { db: db, userId: userId } 
    }
  }
));

//Set Static serving files
app.use(express.static('./public'));

app.listen(SERVER_PORT, function () {
  console.log(`🚀 Server ready at port ${SERVER_PORT}`);
});