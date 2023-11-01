// import Navbar from '../shared/navbar/Navbar';

import 'bulma/css/bulma.min.css';
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createHttpLink } from '@apollo/client/link/http';
import { setContext } from '@apollo/client/link/context';

import Navbar from '../shared/navbar/Navbar';
export default function App({ Component, pageProps }: AppProps) {
  
  const httpLink = createHttpLink({
    uri: 'http://localhost:8080/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    // Adicione os headers personalizados aqui
    const customHeaders = {
      'Access-Control-Allow-Origin': 'true', // Exemplo de token de autorização
    };

    return {
      headers: {
        ...headers,
        ...customHeaders,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
        <Navbar />
        <Component {...pageProps} />
    </ApolloProvider>
  );
}
