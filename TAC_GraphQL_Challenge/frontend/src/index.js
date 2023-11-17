import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const FLAG = "TAC{98df942e78b89d3941e9767e73cba98c31ab7e3c40f3b7694d44aa6358385ce9}"

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

client
.query({
  query: gql`
    query serverStatus {
      ping 
    }
  `,
})
.then((result) => console.log(result)).catch((err) => console.log(err));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);

// @TODO fix Auth
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ` : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJuYW1lIjoiQWxleGFuZGVyIEhhcnJpc29uIiwidXNlcm5hbWUiOiJhbGV4X2hhcnJpc29uIiwiZW1haWwiOiJhbGV4YW5kZXIuaGFycmlzb25Ad2lja2VkY29ycC5jb20iLCJyb2xlIjp7ImlkIjoiMSIsIm5hbWUiOiJFbXBsb3llZSJ9LCJpYXQiOjE3MDAwOTA0MDR9.gwBdNrw9jHvpABrwni4xeuc1koycKh39l5xmJUyZ7SE",
//     }
//   }
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });
