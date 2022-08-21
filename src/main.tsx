import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/Styles/index.css'
import { ApolloProvider } from '@apollo/client'
import { client } from './services/apollo'
import { BrowserRouter } from "react-router-dom"
import { RouterDom } from './RouterDom'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
      <RouterDom  />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
