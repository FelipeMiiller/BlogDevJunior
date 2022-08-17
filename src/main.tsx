import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/assets/Styles/index.css'
import { ApolloProvider } from '@apollo/client'
import { client } from './services/apollo'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
