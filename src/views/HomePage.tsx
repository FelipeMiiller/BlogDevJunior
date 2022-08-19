import { gql,useQuery } from "@apollo/client"
import Particles from "react-particles-js"
import { Route, Routes, useParams } from "react-router-dom"
import Header from "../components/Header"
import { HomePosts } from "../components/HomePosts"


import { HomePostsSlug } from "../components/HomePostsSlug"

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
   

      <div className={"flex flex-  "}>
        <Sidebar />


        <Routes>
        


        <Route path="/" element={
        <HomePosts/>}
         />
        <Route path="posts/:slugGet" element={
        <HomePostsSlug/>}
         />

        
        </Routes>
      </div>
    
  );
}


