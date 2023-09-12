
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks]  = useState([]);

  const handleAddToBookmark = blog => {
    setBookmarks([...bookmarks, blog]);
  }

  return (
    <>
     <Header></Header>
     <div className='max-w-6xl mx-auto mt-7 flex gap-4'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
