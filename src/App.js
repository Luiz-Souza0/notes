import './App.css';
import React from 'react';
import {  Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Notes from './Pages/Notes';

function App() {



  return (    
  <Router> 
      <Header className='left'/>

    <div className='main-content'>
      <Routes>
        <Route path="/" element={
             <main>
              <h1>Bem-vindo ao Notes</h1>
              <Button
                href="/notes"
                style={{
                  display: "inline-block",
                  backgroundColor: "#ff9900",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  transition: "background-color 0.3s",
                }}
                variant="primary"
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#b36b00";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#ff9900"; 
                }}
              >
                Ver Notas
              </Button>


          </main>
        } />
{     /*   <Route path="/products" element={<Products />} />*/ }
          <Route path="/notes" element={<Notes />} />

        </Routes>      
        </div>

      <Footer/>
      

  </Router>
  );
}

export default App;
