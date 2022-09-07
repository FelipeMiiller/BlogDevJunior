import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import FooterPost from "./Footer";
import Footer from "./Footer";

interface PostProps {
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

export function Post(props: PostProps) {
  let publishedAtFormat = format(
    new Date(props.post.publishedAt),
    " d' de 'MMMM' • 'yyyy' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  let updatedAtFormat = format(
    new Date(props.post.updatedAt),
    " d' de 'MMMM' • 'yyyy' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const dataUpdate = updatedAtFormat
    ? "Atualizado em :" + updatedAtFormat
    : null;

  //console.log(updatedAtFormat);
 // console.log(dataUpdate);
  //console.log(publishedAtFormat);

  //console.log(props.post);

  //console.log(publishedAtFormat);

  return (
    <>
      <div
        className={
          " flex flex-1 flex-col  w-full  h-[calc(100%_-_5rem)] overflow-y-auto " +
          " bg-white"
        }
      >
        <main className={"flex flex-1 justify-center" + " "}>
          <article className={"flex flex-col w-[50rem]   h-auto    m-2  px-2 pt-4 mb-40    " + "   bg-stone-300 rounded"}>
            <div className={" py-3 "}>
              <h1 className={"text-4xl font-bold"}>{props.post.title}</h1>
              <p className={"m-1"}>
                {"Postado em :" + publishedAtFormat + " " + dataUpdate}{" "}
              </p>

              <Link to={`../posts/${props.post.category[0].nameCategory}`}>
                <span
                  className={
                    "p-[0.250rem] rounded m-2 " +
                    " text-white border bg-blue-600 font-bold "
                  }
                >
                  {props.post.category[0].nameCategory}
                </span>
              </Link>
              <Link
                to={`../posts/${props.post.subCategory[0].nameSubCategory}`}
              >
                <span
                  className={
                    "py-[0.125rem] p-2 rounded m-2 " +
                    " text-white border bg-[#1890ff] font-bold"
                  }
                >
                  {props.post.subCategory[0].nameSubCategory}
                </span>
              </Link>
            </div>

            <article className="mt-8 prose prose-slate mx-auto lg:prose-lg">
              <img className="object-cover rounded" src={props.post.coverImage.url} />

              <ReactMarkdown
                children={props.post?.content}
                remarkPlugins={[remarkGfm]}
              />
            </article>

            <hr className={"py-7  border-transparent "} />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}
