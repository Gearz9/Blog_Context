import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const TagPage = () => {
  const navigation = useNavigate();

  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className=" mt-20 flex gap-x-6 items-center  mx-auto  ">
        <button className="border p-1 border-slate-900 px-3" onClick={() => navigation(-1) }>Back</button>
        <h2 className=" font-bold ">
          Blogs Tagged <span className="text-blue-600">#{tag} </span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
