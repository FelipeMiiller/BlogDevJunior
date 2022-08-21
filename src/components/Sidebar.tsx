import { gql, useQuery } from "@apollo/client";
import { PostSidebar } from "./PostSidebar";

const GET_POSTS_SIDEBAR_QUERY = gql`
  query {
    posts(orderBy: publishedAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      publishedAt
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
    }
  }
  
`;

interface GetPostsSidebarQueryResponse {
  posts: {
    __typename: string;
    title: string;
    id: string;
    slug: string;
    publishedAt: string;

    category: {
      nameCategory: string;
    }[];
    
    subCategory: {
      nameSubCategory: string;
    }[];
   
   
  }[];
}

export function Sidebar() {
  const { data } = useQuery<GetPostsSidebarQueryResponse>(GET_POSTS_SIDEBAR_QUERY);

 

  return (
    <aside
      className={
        "w-[21.7rem]   pl-4 pt-4 " + " bg-gray-600 text-white  border-r0 border-gray-400" 
        + ""
      }
    >
      <div  className={"  "    }>
      <span
        className={
          "fonte-bold text-2xl  hover:font-bold" +  " block pb-6 mb-6  border-b border-gray-400 "
         
        }
      >
        Posts 
      </span>

      <div className={"flex flex-col space-y-8 " + "  h-[48rem] overflow-y-auto "}>
        {data?.posts.map((posts) => {
          return (
            <PostSidebar
              key={posts.id}
              titlePost={posts.title}
              subCategory={posts.subCategory[0]?.nameSubCategory}
              category={posts.category[0]?.nameCategory}
              slug={posts.slug}
              publishedAt={new Date(posts.publishedAt)}
            />
          );
        })}
      </div>
      </div>
    </aside>
  );
}
