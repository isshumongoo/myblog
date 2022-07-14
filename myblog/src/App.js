import './App.css';
import Blog from './components/Blog';
import BlogSign from './components/BlogSign';
import BlogSubscription from './components/BlogSubscription';
import BlogCulture from './components/BlogCulture';
import BlogAboutMe from './components/BlogAboutMe';
import BlogInterests from './components/BlogInterests';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='BlogSign' element={<BlogSign/>}/>
        <Route path='BlogSubscription' element={<BlogSubscription/>}/>
        <Route path='BlogCulture' element={<BlogCulture/>}/>
        <Route path='BlogAboutMe' element={<BlogAboutMe/>}/>
        <Route path='BlogInterests' element={<BlogInterests/>}/>
      </Routes>
    </div>
  );
}

export default App;
