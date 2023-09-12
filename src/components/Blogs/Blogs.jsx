import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useState(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3 px-3">
            {
                blogs.map((blog, idx) => <Blog key={idx} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;