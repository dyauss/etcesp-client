import React, { useState, useEffect, FC } from 'react';
import styles from './ListaClientes.module.css';

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useMutation, useQuery, gql } from '@apollo/client';
import Link from 'next/link';

import { READ_ALL_CLIENTES, DELETE_CLIENTE } from '../../shared/constantes/Constantes';

interface ListaClientesProps {}

const ListaClientes: FC<ListaClientesProps> = () => {
  const [deleteCliente] = useMutation(DELETE_CLIENTE);

  const [idSelected, setIdSelected] = useState<number | null>(null);
  const [filteredList, setFilteredList] = useState<any[]>([]);
  const [post, setPost] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const { data, loading, error } = useQuery(READ_ALL_CLIENTES);

  useEffect(() => {
    if (!loading && !error) {
      setPost(data.clientes);
      setFilteredList(data.clientes);
    }
  }, [data, loading, error]);

  const deleteHandler = () => {
    deleteCliente({ variables: { id: idSelected } })
      .then(() => {
        // A exclusão foi bem-sucedida
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterBySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    const updatedList = [...post];

    const filteredList = updatedList.filter((item) =>
      item.nome.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredList(filteredList);
  };

  const handleClickOpen = (e: React.MouseEvent<HTMLButtonElement>, userId: number) => {
    e.preventDefault();
    setIdSelected(userId);
    setOpen(true);
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(false);
  };

  const renderElement = (post: any[]) => {
    if (post.length === 0) {
      return (
        <a className="panel-block">
          <div>
            <span className="panel-icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <strong>Nenhum cliente cadastrado ou serviço não iniciado</strong>
          </div>
        </a>
      );
    } else {
      return (
        filteredList.map((user, index) => (
          <Link
            className="panel-block"
            href={"/cliente/" + user.id}
            key={index}
          >
            <div>
              <span className="panel-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              {user.nome}
            </div>
            <div>
              <Button variant="outlined" color="error" onClick={(e) => handleClickOpen(e, user.id)}>
                Excluir
              </Button>
            </div>
          </Link>
        ))
      );
    }
  };

  return (
    <div className="container">
      <section className="section is-small">
        <h1 className="title">Lista de clientes</h1>
        <h2 className="subtitle">
          Abaixo estarão listados os <strong>clientes</strong> do sistema.
        </h2>
        <article className="panel is-black">
          <p className="panel-heading">Lista de clientes cadastrados</p>
          <div className="panel-block">
            <p className="control has-icons-left">
              <input id="search-box" className="input is-gray-dark" type="text" placeholder="Buscar" onChange={filterBySearch} />
              <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          {renderElement(post)}
          <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">{"Tem certeza que deseja excluir esse item??"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">Essa é uma ação permanente.</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button onClick={deleteHandler} autoFocus>
                Confirmar
              </Button>
            </DialogActions>
          </Dialog>
        </article>
        <Link className="button is-success" href="/novo-cliente">
          Adicionar cliente
        </Link>
      </section>
    </div>
  );
};

export default ListaClientes;