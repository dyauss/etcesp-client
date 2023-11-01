/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        //URL
        source: '/about',
        //Componente
        destination: '/about/about',
      },
      {
        source: '/files',
        destination: '/files/files',
      },
      {
        source: '/lista-clientes',
        destination: '/ListaClientes/ListaClientes'
      },
      {
        source: '/cliente/:id', // Defina o padrão da URL com um parâmetro ":id"
        destination: '/Cliente/Cliente?id=:id',
      },
      {
        source: '/novo-cliente',
        destination: '/NovoCliente/NovoCliente'
      },
      {
        source: '/editar-cliente/:id',
        destination: '/EditarCliente/EditarCliente?id=:id'
      }
    ];
  },
};
