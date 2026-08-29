import {Routes,Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Career from './pages/Career.jsx';
import NotFound from './pages/NotFound.jsx';
export default function App(){return (
<>
  <ScrollToTop/>
  <Header/>
  <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/passenger-elevator" element={<ProductDetail/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </main>
  <Footer/>
</>
)}
