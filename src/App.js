
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Navbar from './navigation/Navbar';
import { ThemeProvider } from './theme-context';

function App() {
  return (
<ThemeProvider>
<BrowserRouter>

<Navbar/>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/blog' element={<Blog/>}/>
  </Routes>
  
  </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
