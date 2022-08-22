import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { format } from "date-fns";




const GET_AUTHORS_QUERY = gql`
query  {
  authors(orderBy: name_ASC) {
    id
    name
    slug
    createdAt
    intro
    picture {
      url
    }
    post {
      title
      slug
    }
    
  }
}

`;

interface GetHomeAuthrsQueryResponse {
  authors: {
    id: string;
    createdAt: Date;
    intro: string;
    name: string;
    
    picture: 
    {
       url: string 
    };
    post: { 
      slug: string; 
      title: string;
     
    }[];
    slug: string;
  }[];
}

export function HomeAuthors() {
  const { data } = useQuery<GetHomeAuthrsQueryResponse>(GET_AUTHORS_QUERY);


  console.log(data)


  return (
    <>
    
    <main  className={"flex flex-1 flex-col items-center  m-2 " +
  "  h-[53.5rem] overflow-y-auto"}>


{data?.authors.map((authors) => {


let createdAtFormat = format(new Date(authors.createdAt),
  " d'/'MM'/'yyyy' • 'k'h'mm");




return (
  <div
    key={authors.id}
    className={
      "grid grid-rows-3 grid-flow-col  h-52 w-[50rem]  m-2  p-2 " +
      "  bg-gray-600 border-2 rounded-lg  border-gray-600     " +
      " transition ease-in-out delay-150 b hover:-translate-y-1 hover:scale-110 hover:border-blue-600  duration-300"
    }
  >
    <div className={"row-span-3 col-span-1   h-full  m-4 " + ""}>
      <Link to={`../author/${authors.slug}`}>
        <img
          className="border-2 rounded-lg border-blue-600 h-40  "
          src={authors.picture.url}
        />
      </Link>
    </div>

    <div className={"row-span-1 col-span-2  mt-1 " + " text-white "}>
      <Link to={`../author/${authors.slug}`}>
        <h2
          className={
            "text-gray-200  hover:underline " +
            "line-clamp-1 font-bold text-2xl"
          }
        >
          {authors.name}
        </h2>
      </Link>
      <p className={"m-1 text-xs text-gray-200"}>
        {"Postado em :" + createdAtFormat}{" "}
      </p>
    </div>

    <div className={"row-span-2 col-span-2  mt-2 mr-3" + "  "}>
      <p
        className={
          "text-gray-200  " +
          " line-clamp-4 indent-2  text-left hover:text-center"
        }
      >
        {authors.intro}
      </p>
    </div>
    <div className={"row-span-3 col-span-2  mr-3 gap-4" + " text-white "}>

        <h2>Posts Recentes</h2>


      <Link to={`../post/${authors?.post[0]?.slug}`}>
      
        <p className={"text-xs text-gray-200  hover:underline py-1"}>{authors.post[0]?.title}</p>
      </Link>
      <Link to={`../post/${authors?.post[1]?.slug}`}>
      
        <p className={"text-xs text-gray-200   hover:underline py-1"}>{authors.post[1]?.title}</p>
      </Link>
      <Link to={`../post/${authors?.post[2]?.slug}`}>
      
        <p className={"text-xs text-gray-200  hover:underline py-1"}>{authors.post[2]?.title}</p>
      </Link>
    </div>
  </div>
);
})}






      
      
    </main>
    </>
  );
}
