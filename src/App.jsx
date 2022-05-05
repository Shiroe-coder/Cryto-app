import { Navbar,Welcome,Footer,Services,Transactions,Homepage,Cryptocurrencies,CryptoDetails,News} from './components';
import React from 'react';
import {Routes,Router, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
      	<Navbar />
          <div className="routes">
          <Routes>
            <Route path="/"  element={<Welcome/>}/>
            <Route path="/Homepage"  element={<Homepage/>}/>
            <Route path="/Cryptocurrencies"  element={<Cryptocurrencies/>}/>
            <Route path="/Crypto/:coinId"  element={<CryptoDetails/>}/>
            <Route path="/News"  element={<News/>}/>
           </Routes>
          </div>

      </div>
    <div className="main">
        
      </div>
      
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
