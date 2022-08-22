import { Route, Routes, useParams} from "react-router-dom";
import HomePage from "./views/HomePage";
import PostPage from "./views/PostPage";
import Header from "./components/Header";
import { AuthorPage } from "./views/AuthorPage";
import { HomeAuthors } from "./components/HomeAuthors";






export function RouterDom() {
 
  


  return (
    <>
      <div className={"flex flex-col   w-screen " + " bg-defealt-100 "}>
        <Header />
       
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="author/:slugGet" element={<AuthorPage />} />
          <Route path="post/:slugGet" element={<PostPage />} />

        





        </Routes>
      
      </div>
    </>
  );
}