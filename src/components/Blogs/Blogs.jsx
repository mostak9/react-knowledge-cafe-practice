import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs] = useState([]);

    useState(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3 px-3">
            {
                blogs.map((blog, idx) => <Blog key={idx} blog={blog} handleAddToBookmark={handleAddToBookmark}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
}

export default Blogs;