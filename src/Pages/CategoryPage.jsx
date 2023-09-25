import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const CategoryPage = () => {
  const navigation = useNavigate();

  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div className="w-11/12 mx-auto mt-24 flex flex-col items-center">
      <Header />

      <div className="flex flex-col  items-center justify-start mx-auto w-11/12  ">
      <button
        className="border self-start border-slate-900 "
        onClick={() => navigation(-1)}
      >
        Back
      </button> 
      <h2 className=" font-bold self-center   ">
        Blogs On <span className="text-blue-600">{category} </span>
      </h2>
      </div>

      <Blogs />
      <Pagination />
    </div>
  );
};

export default CategoryPage;
