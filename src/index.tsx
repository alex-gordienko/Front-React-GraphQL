import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink, InMemoryCache} from 'apollo-client-preset';

const httpLink={
    uri: 'http://homework.nextbil.com/graphql'
  };

  const client = new ApolloClient({
    link: new HttpLink(httpLink),
    cache: new InMemoryCache()
  })

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
