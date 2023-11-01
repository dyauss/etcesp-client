import React, { useState, useEffect, FC } from 'react';
import styles from './Cliente.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { useMutation, useQuery, gql } from '@apollo/client';
import { READ_CLIENTE } from '../../shared/constantes/Constantes';
interface ClienteProps {}

const Cliente: FC<ClienteProps> = () => {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState<any[]>([]);

  const { data, loading, error } = useQuery(READ_CLIENTE, {
    variables: { id: id },
  });

  useEffect(() => {
    if (!loading && !error) {
      setPost(data.cliente);
      console.log(post.nome)
    }
  }, [data, loading, error]);

  return (
    <div className="container mt-5">

      <h1 className="is-size-3">Perfil do cliente</h1>
      {/* Outras informações do cliente */}
      <div className="columns is-mobile is-flex-wrap-wrap-reverse has-background-link-light mt-3">
        <div className="column is-one-quarter has-text-centered">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  { post.nome }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  { post.cidade }
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="column">
          <p className="is-size-5">Id: { post.id }</p>
          <p className="is-size-5">CPF / CNPJ: { post.cpfCnpj }</p>
          <p className="is-size-5">Data de nascimento: { post.dataNascimento }</p>
          <p className="is-size-5">E-mail: { post.email }</p>
          <p className="is-size-5">Telefone: { post.telefone }</p>
          <p className="is-size-5">Cidade: { post.cidade }</p>
          <p className="is-size-5">Estado: { post.estado }</p>
          <p className="is-size-5">CEP: { post.cep }</p>
          <p className="is-size-5">Tipo de logradouro: { post.tipoLogradouro }</p>
          <p className="is-size-5">Logradouro: { post.logradouro }</p>
          <p className="is-size-5">Número: { post.numero }</p>
          <p className="is-size-5">Complemento: { post.complemento }</p>
        </div>
      </div>
      <div className="is-flex is-fullwidth is-justify-content-space-between">
        <Link className="button is-primary" href={`/editar-cliente/${post.id}`}>Editar</Link>
        <Link className="button is-danger" href="/lista-clientes">Voltar</Link>
      </div>
    </div>
  );
}

export default Cliente;
