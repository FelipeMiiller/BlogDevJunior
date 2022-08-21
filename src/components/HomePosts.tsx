import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";



const GET_HOME_POSTS_QUERY = gql`
  query {
    posts(orderBy: publishedAt_DESC, stage: PUBLISHED) {
      
      id
      title
      slug
      publishedAt
      updatedAt
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
      coverImage {
        url
      }
      tagss
      resume
      authors {
        name
        picture {
          url
        }
        slug
      }
    }
  }
`;

interface GetHomePostsQueryResponse {
  posts: {
    id: string;
    title: string;
    tagss: [string];
    slug: string;
    publishedAt: Date;
    updatedAt: Date;
    resume: string;
    coverImage: { url: string };
    category: { nameCategory: string }[];
    subCategory: { nameSubCategory: string }[];
    authors: {
      name: string;
      slug: string;
      picture: { url: string };
    }[];
  }[];
}

export function HomePosts() {
  const { data } = useQuery<GetHomePostsQueryResponse>(GET_HOME_POSTS_QUERY);





  return (
    <>
    
    <main  className={"flex flex-1 flex-col items-center  m-2 " + 
    "  h-[53.5rem] overflow-y-auto"}>
      
      {data?.posts.map((post) => {


        let publishedAtFormat = format(new Date(post.publishedAt),
          " d'/'MM'/'yyyy' • 'k'h'mm");
        



        return (
          <div key={post.id}
            className={
              "grid grid-rows-3 grid-flow-col   w-[50rem]  m-2  p-2 " +
              "  bg-gray-600 border-2 rounded-lg  border-gray-600     " +
              " transition ease-in-out delay-150 b hover:-translate-y-1 hover:scale-110 hover:border-blue-600  duration-300"
            }
          >
            <div className={"row-span-3 col-span-1   h-full  m-4 " + ""}>
            <Link  to={`post/${post.slug}`}>
              <img
                className="border-2 rounded-lg border-blue-600  "
                src={post.coverImage.url}
              />
               </Link>
            </div>
            
            <div className={"row-span-1 col-span-2  mt-1 " + " text-white "}>
            <Link  to={`post/${post.slug}`}>
              <h2 className={"text-gray-200  hover:underline " + "line-clamp-1 font-bold text-2xl"}>
                {post.title}
              </h2>
              </Link>
              <p className={"m-1 text-xs text-gray-200"}>
              {"Postado em :" + publishedAtFormat }      </p>
             
           

          
            </div>
           
            <div className={"row-span-2 col-span-2  mt-2 mr-3" + "  "}>
              <p
                className={
                  "text-gray-200  " + " line-clamp-4 indent-2  text-left hover:text-center"
                }
              >
                {post.resume}
              </p>




            </div>
            <div className={"row-span-3 col-span-2  mr-3" + " text-white "}>
            <Link  to={`author/${post.authors[0].slug}`}>
           
            <img
                className="  h-12  rounded-full  "
                src={post.authors[0].picture.url}
              />
               <p className={"text-xs text-gray-200 "}>{"Por: " + post.authors[0].name}</p>

             </Link>

             
             


            </div>
            
          </div>
        );
      })}
    </main>
    </>
  );
}
