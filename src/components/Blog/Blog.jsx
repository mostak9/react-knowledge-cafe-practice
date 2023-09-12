import PropTypes from "prop-types";
import {BsBookmarks} from "react-icons/bs"

const Blog = ({ blog, handleAddToBookmark, handleAddReadingTime}) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-10 space-y-6 border-b-2 pb-5 shadow-sm shadow-slate-200 px-4">

    {/* cover picture */}
      <div>
        <img className="w-full rounded-sm" src={cover} alt="" />
      </div>
      {/* author and reading time */}
      <div className="flex justify-between items-center">
        {/* author and posted date */}
        <div className="flex gap-6">
            <img className="w-14" src={author_img} alt="" />
            <div>
                <p className="text-2xl font-bold">{author}</p>
                <p className="font-semibold text-base">{posted_date}</p>
            </div>
        </div>
        {/* reading time */}
        <div className="flex">
            <h1 className="text-xl font-medium">{reading_time} min read</h1>
            {/* bookmark button */}
            <button className="text-2xl ml-2" onClick={() => handleAddToBookmark(blog)}><BsBookmarks></BsBookmarks></button>
        </div>
      </div>
      {/* blog title */}
      <h1 className="text-4xl font-bold">{title}</h1>
      {/*Hashtags*/}
      <p>
        {
            hashtags.map((hash, idx) => <span key={idx} className="ml-2 font-medium text-xl">{hash}</span>)
        }
      </p>
      <button className="text-xl underline text-blue-500" onClick={() => handleAddReadingTime(reading_time, blog.id)}>Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleAddReadingTime: PropTypes.func.isRequired,
};

export default Blog;
