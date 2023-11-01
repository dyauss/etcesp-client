import React, { FC, useState } from 'react';
import { useMutation, gql } from "@apollo/client";
import Link from "next/link";
import { useRouter } from 'next/router';

import { ADD_CLIENTE } from '../../shared/constantes/Constantes';

interface NovoClienteProps {}

const NovoCliente: FC<NovoClienteProps> = () => {
  const router = useRouter();

  const [addCliente, { data, loading, error }] = useMutation(ADD_CLIENTE);

  const [nome, setNome] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [tipoLogradouro, setTipoLogradouro] = useState('Rua');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('São Paulo');
  const [estado, setEstado] = useState('São Paulo');
  const [cep, setCep] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addCliente({
        variables: {
          nome: nome,
          cpfCnpj: cpfCnpj,
          dataNascimento: dataNascimento,
          tipoLogradouro: tipoLogradouro,
          logradouro: logradouro,
          numero: numero,
          complemento: complemento,
          cidade: cidade,
          estado: estado,
          cep: cep,
          email: email,
          telefone: telefone,
        },
      });


      if (data.criarCliente) {
        console.log("Cliente criado com sucesso!");
        
        router.push('/lista-clientes');
      }
    } catch (error) {
      console.error("Erro ao adicionar cliente:", error);
    }
  }

  return (
    <form  action="" id="login" method="post" onSubmit={handleSubmit}>
      <div className="container">
        <section className="section is-small">
          <h1 className="title">Adicionar cliente</h1>
          <div className="field">
            <label className="label">Nome</label>
            <div className="control">
              <input className="input" type="text" placeholder="Nome completo"
                value={nome}
                onChange={e => setNome(e.target.value)}
               />
            </div>
          </div>

          <div className="field">
            <label className="label">CPF/CNPJ</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="CPF ou CNPJ" 
                value={cpfCnpj}
                onChange={e => setCpfCnpj(e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Data de nascimento</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="date" placeholder="dd/mm/AAAA" 
                value={dataNascimento}
                onChange={e => setDataNascimento(e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            
          </div>

          <div className="field">
            <label className="label">Tipo de logradouro</label>
            <div className="control">
              <div className="select">
                <select onChange={e => setTipoLogradouro(e.target.value)} value={tipoLogradouro}>
                  <option>Rua</option>
                  <option>Avenida</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Logradouro</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Logradouro" 
                value={logradouro}
                onChange={e => setLogradouro(e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Número</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Numero" 
                value={numero}
                onChange={e => setNumero(e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Complemento</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Complemento" 
                value={complemento}
                onChange={e => setComplemento(e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Estado</label>
            <div className="control">
              <div className="select">
                <select onChange={e => setEstado(e.target.value)} value={estado}>
                  <option>São Paulo</option>
                  <option>Rio de Janeiro</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Cidade</label>
            <div className="control">
              <div className="select">
                <select onChange={e => setCidade(e.target.value)} value={cidade}>
                  <option>São Paulo</option>
                  <option>Campinas</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Cep</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Cep" 
                value={cep}
                onChange={e => setCep(e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">E-mail</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="E-mail" 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Telefone</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Telefone" 
                value={telefone}
                onChange={e => setTelefone(e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />
                &nbsp; Eu concordo com os <a href="#"><b>termos e condições</b></a>
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-link">Enviar</button>
            </div>
            <div className="control">
              <Link className="button is-link is-light"  href="/lista-clientes">Cancelar</Link>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
}

export default NovoCliente;
