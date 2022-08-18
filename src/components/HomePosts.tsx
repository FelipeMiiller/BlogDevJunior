import { useParams } from "react-router-dom";



interface HomePosts {
  slugGet: string;
}

export function HomePosts() {
  const {slugGet } = useParams<{ slugGet: string }>()
    return (
  
      
      <div>
        <h1>{slugGet}</h1>
      </div>
    );
  }
  