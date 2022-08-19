import { gql,useQuery } from "@apollo/client"
import { useParams } from "react-router-dom";
import Header from "../components/Header"
import { Post } from "../components/Post";


const GET_POST_BY_SLUG_QUERY = gql`
  query GetPostBySlug($slug: String) {
    post(where: { slug: $slug }) {
      publishedAt
      title
      category {
        ... on Category {
          nameCategory
        }
      }
      subCategory {
        ... on SubCategory {
          nameSubCategory
        }
      }
      tagss
      updatedAt
      authors {
        createdAt
        name
        picture {
          url(
            transformation: { image: {}, document: { output: { format: jpg } } }
          )
        }
        intro
        slug
      }
      slug
      content
      coverImage {
        url
      }
    }
  }
`;

interface GetPostBySlugQueryResponse {
  post: {
    publishedAt: string;
    title: string;
    slug: string;
    category: {
      nameCategory: string;
    }[];
    subCategory: {
      nameSubCategory: string;
    }[];

    tagss: [string];
    updatedAt: string;

    authors: {
      createdAt: string;
      name: string;
      picture: { url: string };
      intro: string;
      slug: string;
    }[];

    content: string;
    coverImage: {
      url: string;
    };
  };
}

export default function PostPage() {
    const { slugGet } = useParams<{ slugGet: string }>();

    console.log(slugGet)
  
    const { data } = useQuery<GetPostBySlugQueryResponse>(
      GET_POST_BY_SLUG_QUERY,
      {
        variables: {
          slug: slugGet,
        },
      }
    );
 
    console.log(data?.post.coverImage.url)
  
    
  return (
    <main className={"flex flex-1"}>
     
      {data?.post ? (
        <Post post={data?.post} />
      ) : (
        <div className={"flex items-center"}> {"zero " + slugGet}</div>
      )}
    </main>
  );
}


