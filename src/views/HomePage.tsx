import { gql,useQuery } from "@apollo/client"
import { Route, Routes, useParams } from "react-router-dom"
import Header from "../components/Header"


import { HomePosts } from "../components/HomePosts"

import { Sidebar } from "../components/Sidebar"




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




export default function HomePage() {
  const { data } = useQuery(GET_POSTS_QUERY);
 
 

  return (
   

      <main className={"flex flex-1"}>
        <Sidebar />
        <Routes>

        <Route path="/Posts/:slugGet" element={
        <HomePosts />}
         />

        
        </Routes>
      </main>
    
  );
}


