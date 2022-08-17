import { ApolloClient,InMemoryCache,ApolloProvider,gql,} from "@apollo/client";







export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl6w0h2cx3s0l01uq26vh0tjr/master",
  cache: new InMemoryCache(),
});
