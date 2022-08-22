import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

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

 


 console.log( props.author)








  //console.log(props.post);

  //console.log(publishedAtFormat);

  return (
    <div className={"col-start-5 col-end-9 py-7 " + "  bg-white"}>
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

      <div className=" h-auto overflow-y-auto  ">
        <article className="mt-8 prose prose-slate mx-auto lg:prose-lg   ">
          <img
            className="object-cover rounded-md"
            src={props.author.picture.url}
          />
          <p>{props.author.intro}</p>
        </article>
       
          <img  className="  py-4 "src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${props.author.gitHub}&&layout=compact&theme=dracula&langs_count=8)`} />
     
        <div className={"flex flex-wrap      pt-4    "}>
          {props.author.languagesWork.map((image) => {
            return (
              <img
                key={image.url}
                className=" rounded-md mx-1 "
                src={image.url}
              />
            );
          })}
        </div>
      </div>
      <div className={"pt-2"}></div>
    </div>
  );
}
