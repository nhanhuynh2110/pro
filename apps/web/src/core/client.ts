import { ApolloClient, createHttpLink, InMemoryCache, split } from "@apollo/client";
import { createClient } from 'graphql-ws';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from "@apollo/client/utilities";

export const httpLink = createHttpLink({
    uri: "http://localhost:3000/graphql",
});

export const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:3000/graphql',
  }));

const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: splitLink,
  });