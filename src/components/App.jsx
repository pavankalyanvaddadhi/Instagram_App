import React from 'react'

import '../styles/global.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../components/Login/Login'
import Signup from './Signup/Signup'
import Dashboard from './Dashboard/Dashboard'
import Wishlist from './Wishlist/Wishlist'
import Cart from './Cart/Cart'
import Men from './Men/Men'
import Home from './Home/Home'
import Women from './Women/Women'
import Studio from './Studio/Studio'
import Kids from './Kids/Kids'
import Beauty from './Beauty/Beauty'
import Zomato from './Zomato/Zomato'
import Database from './Database/Database'

function App() {
  return (
    <>
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Database />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Men" element={<Men />} />
            <Route path="Dashboard/Home" element={<Home />} />
            <Route path="Dashboard/Women" element={<Women />} />
            <Route path="Dashboard/Studio" element={<Studio />} />
            <Route path="Dashboard/Kids" element={<Kids />} />
            <Route path="Dashboard/Men" element={<Men />} />
            <Route path="Dashboard/Beauty" element={<Beauty />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
        //<Zomato/>
        // <Database/>
      }
    </>
  )
}
export default App
