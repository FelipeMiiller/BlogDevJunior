import { Route, Routes, useParams} from "react-router-dom";
import { Post } from "./components/Post";






export function RouterDom() {
  const {slugGet } = useParams<{ slugGet: string }>()


console.log(slugGet)

  return (
    <>
    
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/:slugGet" element={ <Post />} />
    </Routes>
    
    </>
  );
}