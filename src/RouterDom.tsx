import { Route, Routes, useParams} from "react-router-dom";
import HomePage from "./views/HomePage";
import PostPage from "./views/PostPage";
import Header from "./components/Header";






export function RouterDom() {
 
  


  return (
    <>
      <div className={"flex flex-col  h-screen w-screen overflow-hidden" + " bg-defealt-100 "}>
        <Header />
       
        <Routes>
          <Route path="/*" element={<HomePage />} />
       
          <Route path="post/:slugGet" element={<PostPage />} />
        </Routes>
      
      </div>
    </>
  );
}