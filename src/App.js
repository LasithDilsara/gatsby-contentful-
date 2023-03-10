
import './App.css';
import BlogList from './Blog/BlogList'
import BlogDetails from './Blog/BlogDetails'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
        <Route path="/blogList" element={<BlogList />} />
        <Route path="/" element={<BlogList />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
