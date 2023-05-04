import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home'
import Character from './components/character'
function App() {
  return (
    <div className="container">
     <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='character/:id' element={<Character></Character>}/>

          </Routes>

     </BrowserRouter>
     
    </div>
  );
}

export default App;
