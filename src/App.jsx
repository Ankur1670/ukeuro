import { useState } from 'react'

import './App.css'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './pages/Home';
import Overview from './pages/Overview';
import Newsevent from './pages/Newsevent';
import Inspection from './pages/Inspection';
import Career from './pages/Career';
import Knowabout from './pages/Knowabout';
import Advantage from './pages/Advantage';
import Product from './pages/Product';
import Fee from './pages/Fee';
import Howto from './pages/Howto';
import Rating from './pages/Rating';
import Check from './pages/Check';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home></Home>}/>
    <Route path='/overview' element={<Overview/>}/>
    <Route path='/newsevent' element={<Newsevent/>}/>
    <Route path='/inspection' element={<Inspection/>}/>
    <Route path='/career' element={<Career/>}/>
    <Route path='/knowabout' element={<Knowabout/>}/>
    <Route path='/advantages' element={<Advantage/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/fee' element={<Fee/>}/>
    <Route path='/howto' element={<Howto/>}/>
    <Route path='/rating' element={<Rating/>}/>
    <Route path='/check' element={<Check/>}/>




    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
