import { gql,useQuery } from "@apollo/client"
import React from "react"
import { useParams } from "react-router-dom"
import Header from "./components/Header"

import { Sidebar } from "./components/Sidebar"
import { RouterDom } from "./RouterDom"




const GET_POSTS_QUERY = gql`
query {
  posts(orderBy: publishedAt_ASC, stage: PUBLISHED) {
    title
    categories {
      ... on Category {
        id
        category
      }
    }
    id
    subCategory {
      ... on SubCategory {
        subCategories
      }
    }
    slug
  }
}
`




function App() {
  const { data } = useQuery(GET_POSTS_QUERY);
 


  return (
    <div className={"flex flex-col min-h-screen" + " bg-defealt bg-repeat "}>
      <Header />

      <main className={"flex flex-1"}>
        <Sidebar />

        <RouterDom />
        
      </main>
    </div>
  );
}

export default App
