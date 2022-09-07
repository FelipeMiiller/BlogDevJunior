
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Author } from "../components/Author";
import Header from "../components/Header";








const GET_AUTHOR_BY_SLUG_QUERY = gql`
query GetAuthorBySlug($slug: String) {
  author(where: {slug: $slug}) {
    bio
    createdAt
    intro
    name
    slug
    gitHub
    picture {
      url
    }
    post {
      publishedAt
      slug
      title
    }
    languagesWork {
      url
    }
   
  }
}

`;



interface GetAuthorBySlugQueryResponse {
  author: {
    name: string;
    intro: string;
    bio: string;
    createdAt: string ;
    slug: string;
    gitHub: string;
    picture: { url: string };

    post: {
      publishedAt: string;
      slug: string;
      title: string;
    }[];
    languagesWork: {
      url: string;
    }[];
  };
}

export function AuthorPage() {
  const { slugGet } =  useParams<{ slugGet: string }>();

  

  const { data } =  useQuery<GetAuthorBySlugQueryResponse>(
    GET_AUTHOR_BY_SLUG_QUERY,
    {
      variables: {
        slug: slugGet,
      },
    }
  );

 // console.log(slugGet)
  //console.log(data)


  return (
    <div className={"w-full h-screen overflow-hidden  flex flex-col " + " bg-defealt-100 "}>
    <Header />
   
     
      {data?.author ? (
        <Author author={data?.author} />
      ) : (
        <div className={"flex w-full  overflow-y-visible justify-center"}> {"Author" + slugGet}</div>
      )}
 

    </div>
  );
}
