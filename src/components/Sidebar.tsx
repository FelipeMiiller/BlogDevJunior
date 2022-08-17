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

  console.log(data);

  return (
    <aside
      className={
        "w-[348px] p-6 border-r " + " bg-gray-600 text-white"
      }
    >
      <div  className={"w-[322px] overflow-y-auto h-[88%]"}>
      <span
        className={
          "fonte-bold text-2xl  hover:font-bold" +  " block pb-6 mb-6 border-b border-gray-500  "
        }
      >
        Posts Novos
      </span>

      <div className="flex flex-col gap-8">
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
