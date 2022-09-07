import { gql, useQuery } from "@apollo/client";
import Particles from "react-particles-js";
import { Route, Routes, useParams } from "react-router-dom";

import Header from "../components/Header";
import { HomeAuthors } from "../components/HomeAuthors";
import { HomePosts } from "../components/HomePosts";

import { HomePostsSlug } from "../components/HomePostsSlug";

import { Sidebar } from "../components/Sidebar";



export default function HomePage() {
 

  return (
    <div className={"w-screen h-screen overflow-hidden  flex flex-col  " + " bg-defealt-100 "}>
     
        <Header />
    <div className={"flex  h-full  w-full  "}>
      <Sidebar />
      
      <Routes>
       
        <Route path="/" element={<HomePosts />} />
        <Route path="posts/:slugGet" element={<HomePostsSlug />} />
        <Route path="authors" element={<HomeAuthors />} />
        
      </Routes>
      </div>
      </div>
  );
}
