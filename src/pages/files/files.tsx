import React, { FC } from 'react';
import styles from './files.module.css';

// import { gql, useQuery } from '@apollo/client'

// instanciando o client
// const client = new ApolloClient({
//   uri: 'https://countries.trevorblades.com',
//   cache: new InMemoryCache()
// })

// fazendo uma query
// client.query({
//   query: gql`
//     query GetCountries {
//       countries {
//         name
//         capital
//         phone
//       }
//     }
//   `
// })

import { gql, useQuery } from '@apollo/client'

export default function Files() {
  const { data, loading, error } = useQuery(gql`
    {
      clientes {
        id
        nome
        cpfCpnj
        dataNascimento
        tipoLogradouro
        logradouro
        numero
        complemento
        cidade
        estado
        cep
        email
        telefone
      }
    }
  `)

  if (loading) return <p>Loading...</p>

  if (error) return <p>{error}</p>

  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>

  return <h1>Home Page</h1>
}