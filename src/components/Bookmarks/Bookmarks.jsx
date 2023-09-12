import PropTypes from "prop-types";
import Bookmark from "../../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="flex-1">
      <div className="bg-slate-300 mb-4 text-black p-4 rounded-md">
        <p className="text-2xl font-bold">Spent time on read : min</p>
      </div>
      <div className="bg-[#0b0b0b0e]">
        <h2 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
          {
            bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
          }
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
