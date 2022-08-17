import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";





const GET_POST_BY_SLUG_QUERY = gql`
query GetPostBySlug($slug: String) {
  post(where: {slug: $slug}) {
    id
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
    bodyPosts {
      subTitle
      text {
        html
      }
    }
    authors {
      createdAt
      name
      picture {
        url(transformation: {image: {}, document: {output: {format: jpg}}})
      }
      intro
      slug
    }
  }
}
`


export function Post() {
  const {slugGet } = useParams<{ slugGet: string }>()



const { data } = useQuery( GET_POST_BY_SLUG_QUERY,{
  variables: { 
  slug: slugGet,

  }
} );

//console.log(props.postSlug)
console.log(data)
console.log(slugGet)


    return (

      <div className={"flex-1"}>
        
{slugGet ? (
    
        <div className={" " + "bg-black "}>
          <div
            className={
              "" + " h-full w-full   max-w-full mx-auto  text-white   "
            }
          >
             <div className={ "flex items-start gap-16 " }>

             <div className={ "flex-1 " }>
              <h1 className={"text-4xl font-bold"}>
gfdgdfgsdfghghfgjhdfhfghdfghdfgh
              </h1>
           

           




            
            </div>






            <div>
              <h2 className={"text-2xl "}>


              </h2>
              








            </div>
            </div>

          </div>
        </div>
        ) : (
          <div className={"flex items-center"}>  {"zero "+ slugGet}</div>
        )}
      </div>
    );
  }
  