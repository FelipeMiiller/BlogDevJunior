import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { format} from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'
import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";



interface PostProps {
  
  post:{
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
  }
}






export function Post(props: PostProps ) {

  let publishedAtFormat = format((new Date(props.post.publishedAt)), " d' de 'MMMM' • 'yyyy' • 'k'h'mm", {
    locale: ptBR,
  })

  console.log(props.post)
 
 console.log(publishedAtFormat)
 

  return (
    <div className={"flex-1"}>
     
        <div className={"container mx-auto  py-4 h-full     mx-auto  "}>
          <div className={"flex flex-col gap-4 flex-1 px-60"}>
           
           
           
           
            <div className={" py-3 "}>
              <h1 className={"text-4xl font-bold"}>{props.post.title}</h1>
              <p className={"m-1"}>{"Postado em :" + publishedAtFormat} </p>

              <Link to={`posts/${props.post.category[0].nameCategory}`}>
              <span className={"py-[0.125rem] p-2 rounded m-2 " +  " text-white border bg-[#1890ff] font-bold"}>
           {props.post.category[0].nameCategory}
          </span>
          </Link>
          <Link to={`posts/${props.post.category[0].nameCategory}`}>
          <span className={"py-[0.125rem] p-2 rounded m-2 " +  " text-white border bg-[#1890ff] font-bold"}>
           {props.post.subCategory[0].nameSubCategory}
          </span>
          </Link>
            </div>

            
              <article className="mt-8 prose prose-slate mx-auto lg:prose-lg">
                <ReactMarkdown
                  children={props.post?.content}
                  remarkPlugins={[remarkGfm]}
                />
              </article>
        


           <div className={"pt-2"}>
           



           </div>

          </div>
        </div>






     
    </div>
  );
}
