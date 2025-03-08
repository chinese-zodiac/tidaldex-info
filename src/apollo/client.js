import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://gateway.thegraph.com/api/a3f14d5b725c52a6b8b3c11931007a23/subgraphs/id/82JTsi1Y7mv48GFCwCNE2bN9XetDvN6VSF7ZNYztbwPZ',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/index-node/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://gateway.thegraph.com/api/a3f14d5b725c52a6b8b3c11931007a23/subgraphs/id/9dSPXfKXaqYpoGAPXx96LyDF1VYR8PiT6HA7HRKEGRdS',
  }),
  cache: new InMemoryCache(),
})
