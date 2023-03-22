import * as React from 'react'
import './app.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import TimePage from './Pages/TimePage'

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" index element={<HomePage />} />
        <Route path="/timer" element={<TimePage />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
