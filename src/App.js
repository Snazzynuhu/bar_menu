import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Training from './pages/Training';
import Navbar from './components/Navbar';
import Error from './pages/Error';

const App=()=> {
  return (
    <>
    <BrowserRouter> 
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/training' element={<Training />} />
       <Route path='/cocktail/:id' element={<SingleCocktail />} />
       <Route path='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
