import React from 'react';
import './App.css';
import{BrowserRouter , Link , Route , Routes , NavLink} from "react-router-dom"
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import Navbar from './Navbar';
import Signin from './Signin';
function App() {
  return (
    <BrowserRouter>
       
        <Routes>
           <Route path='/' element={<Navbar/>}>
           <Route index element={<Home/>}/>
           <Route path='About' element={<About/>} />
           <Route path="Contact" element={<Contact/>} />
           <Route path="Signin" element={<Signin/>} />
           <Route path='*' element={<NotFound/>} />
           </Route>
        </Routes>
     </BrowserRouter>
    
  )
}

export default App