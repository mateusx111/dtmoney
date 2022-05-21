import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1,
          title:'freelance de website',
          type:'deposit',
          category:'Dev',
          amount:'6000',
          createdAt: new Date('2022-04-28 16:00:00'),
        },
        {
          id:2,
          title:'aluguel',
          type:'withdraw',
          category:'Casa',
          amount:'1100',
          createdAt: new Date('2022-04-10 16:00:00'),
        },
      ],
    })
  },
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
       })

    this.post('/transaction', (schema, request) =>{
      const data = JSON.parse(request.requestBody)
      
      data.createdAt = new Date()

      return schema.create('transaction', data);
    })

    this.delete("/transactions/:id")
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);