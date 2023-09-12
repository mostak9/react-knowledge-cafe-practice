
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
     <Header></Header>
     <div className='max-w-6xl mx-auto mt-7 flex gap-4'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
