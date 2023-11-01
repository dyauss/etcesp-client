// Constantes.ts
import { gql } from "@apollo/client";

export const READ_ALL_CLIENTES = gql`
  {
    clientes {
      id
      nome
      cpfCnpj
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
`;

export const DELETE_CLIENTE = gql`
  mutation DeleteCliente($id: ID!){
    deletarCliente(id: $id)
  }
`;

export const ADD_CLIENTE = gql`
  mutation AddCliente(
    $nome: String,
    $cpfCnpj: String,
    $dataNascimento: String,
    $tipoLogradouro: String,
    $logradouro: String,
    $numero: String,
    $complemento: String,
    $cidade: String,
    $estado: String,
    $cep: String,
    $email: String,
    $telefone: String
  ) {
    criarCliente(cliente: {
      nome: $nome,
      cpfCnpj: $cpfCnpj,
      dataNascimento: $dataNascimento,
      tipoLogradouro: $tipoLogradouro,
      logradouro: $logradouro,
      numero: $numero,
      complemento: $complemento,
      cidade: $cidade,
      estado: $estado,
      cep: $cep,
      email: $email,
      telefone: $telefone
    }) {
      id
      nome
      cpfCnpj
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
`;

export const READ_CLIENTE = gql`
  query ReadCliente($id: ID!){
    cliente(id: $id) {
      id
      nome
      cpfCnpj
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
`;

export const UPDATE_CLIENTE = gql`
  mutation UpdateCliente(
    $id: ID!
    $nome: String
    $cpfCnpj: String
    $dataNascimento: String
    $tipoLogradouro: String
    $logradouro: String
    $numero: String
    $complemento: String
    $cidade: String
    $estado: String
    $cep: String
    $email: String
    $telefone: String
  ) {
    atualizarCliente(id: $id, cliente: {
      nome: $nome
      cpfCnpj: $cpfCnpj
      dataNascimento: $dataNascimento
      tipoLogradouro: $tipoLogradouro
      logradouro: $logradouro
      numero: $numero
      complemento: $complemento
      cidade: $cidade
      estado: $estado
      cep: $cep
      email: $email
      telefone: $telefone
    }) {
      id
      nome
      cpfCnpj
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
`;