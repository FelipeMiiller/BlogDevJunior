import { useParams } from "react-router-dom";




export function HomePostsSlug() {
  const {slugGet } = useParams<{ slugGet: string }>()
    return (
      <main className={"flex flex-1"}>
        <h1>{slugGet}</h1>


        fghfdgh
      </main>
    );
  }
  

  