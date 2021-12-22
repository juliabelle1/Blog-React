import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './Views/Home';
import { Blog } from './Views/Blog';
import { Blogs } from './Views/Blogs';
import { BlogDetails } from './Views/BlogDetails';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/blog' element={ <Blog /> } />
          <Route path='/blogs' element={ <Blogs /> } />
          <Route path='/blogs/:id' element={ <BlogDetails/> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
