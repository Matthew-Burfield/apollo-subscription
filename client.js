import React from 'react'
import { render } from 'react-dom'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'

const wsClient = new SubscriptionClient('ws://localhost:3010/subscriptions', {
  reconnect: true
})

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:5000/graphql'
})

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
})

render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
), document.getElementById('app'))