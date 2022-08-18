import { gql,useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
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

interface HomeTypesPros {
  slugGet: string;
}


export default function HomeTypes(props: HomeTypesPros) {
  const { data } = useQuery(GET_POSTS_QUERY);
  const {slugGet } = useParams<{ slugGet: string }>()

  

  return (
    <div className={"flex flex-col min-h-screen" + " bg-defealt bg-repeat "}>
      <Header />

      <main className={"flex flex-1"}>
        <Sidebar />

        <HomePosts slugGet={slugGet} />
        
      </main>
    </div>
  );
}


