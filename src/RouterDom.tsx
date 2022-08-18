import { Route, Routes, useParams} from "react-router-dom";
import HomeTypes from "./views/HomeTypes";
import HomePage from "./views/HomePage";
import PostPage from "./views/PostPage";
import Header from "./components/Header";






export function RouterDom() {
 
  


  return (
    <>
      <div className={"flex flex-col min-h-screen" + " bg-defealt bg-repeat "}>
        <Header />
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="posts/:slugGet" element={<HomePage />} />
          <Route path="post/:slugGet" element={<PostPage />} />
        </Routes>
      </div>
    </>
  );
}