import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";

interface PostProps {
  author: {
    name: string;
    intro: string;
    bio: string;
    createdAt: string;
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

export function Author(props: PostProps) {
  let  createdAtFormat = format(
    new Date(props.author.createdAt),
    " d' de 'MMMM' • 'yyyy' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

 





  return (
    <div
        className={
          " flex flex-1 flex-col  w-full  h-[calc(100%_-_5rem)] overflow-y-auto " +
          " bg-white"
        }
      >
        <main className={"flex flex-1 justify-center" + " "}>
      
    <article className={"flex flex-col w-[45rem] h-auto m-2  px-2 pt-4 mb-40   " + "  bg-white"}>
      
     
      
      <div className={"   "}>
        <h1 className={"text-4xl font-bold"}>{props.author.name}</h1>
        <p className={"m-1"}>{"Desde :" + createdAtFormat} </p>

        <Link to={`../author/${props.author.slug}/posts/`}>
          <span
            className={
              "p-[0.250rem] rounded m-2 " +
              " text-white border bg-blue-600 font-bold "
            }
          >
            {"Publicações"}
          </span>
        </Link>
      </div>

      
        <article className="mt-8 py-3 prose prose-slate mx-auto lg:prose-lg   ">
          <img
            className="object-cover rounded-md"
            src={props.author.picture.url}
          />
          <p>{props.author.intro}</p>
          <img  
          className=" h-52"
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${props.author.gitHub}&&layout=compact&theme=dracula&langs_count=8)`} 
          />
        </article>
       
        
     
        <div className={"flex flex-wrap      py-4   "}>
          {props.author.languagesWork.map((image) => {
            return (
              <img
                key={image.url}
                className=" rounded-md mx-1 pt-1 "
                src={image.url}
              />
            );
          })}
        </div>
        
     
     
      </article>
    </main>
    <Footer/>
    </div>
  );
}
