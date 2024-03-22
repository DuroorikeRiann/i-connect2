import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import Home from './pages/homepage/Home'
import Categories from './pages/categoriesPage/Categories'
import SingleCategory from './pages/singleCategories/SingleCategory';
import { categories } from './constants';

function App() {
  
  return (
    <Router>
      <NavBar/>
       {/* Routes */}
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/categories/:id" element={<SingleCategory categories={categories} />} />
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
