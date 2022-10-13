import { ApolloClient,InMemoryCache,ApolloProvider,gql,} from "@apollo/client";







export const client = new ApolloClient({
  uri: "link",
  cache: new InMemoryCache(),
});
