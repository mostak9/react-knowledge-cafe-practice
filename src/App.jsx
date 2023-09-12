
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks]  = useState([]);
  const[readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    setBookmarks([...bookmarks, blog]);
  }

  const handleAddReadingTime = (time, id) => {
    setReadingTime(readingTime+time);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
     <Header></Header>
     <div className='max-w-6xl mx-auto mt-7 flex gap-4'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleAddReadingTime={handleAddReadingTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
