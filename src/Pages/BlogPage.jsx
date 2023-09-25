import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const[relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;

        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);

        } 
        catch (e) {
            console.log("Error in BLOG ID call");
            setBlog(null);
            setRelatedBlogs([]);
        }

        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    return (
        <div className="mt-20">
            <Header />
            <div className=" border border-slate-900 w-20 px-3 ">
                <button onClick={() => navigation(-1)}>Back</button>
            </div>
            {loading ? (
                <div>
                    <p>loading</p>{" "}
                </div>
            ) : blog ? (
                <div>
                 
                    <BlogDetails post={blog} />
                    <h1 className="underline font-bold text-center mt-10 text-xl "> Related Blogs </h1>
                    {relatedBlogs.map((post) => {
                        return (
                            <div key={post.id}>
                                <BlogDetails post={post} />
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p>No Blog Found</p>
            )}
            
        </div>
    );
};

export default BlogPage;
