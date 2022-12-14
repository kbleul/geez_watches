
import { Routes, Route } from "react-router-dom"

import './App.css';

import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Catalog from "./pages/Catalogs"
import Men from "./pages/Men"
import Women from "./pages/Women"



import MainNav from "./component/MainNav"
import Footer from "./component/Footer"



function App() {
  return (
    <article className="App">
      <section className="flex h-[100vh]">
         <MainNav />

         <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="collections" element={<Collection /> } />
          <Route path="catalog" element={<Catalog /> } />
          <Route path="men" element={<Men /> } />
          <Route path="women" element={<Women /> } />
         </Routes>

      </section>
      <Footer />
    </article>
  );
}

export default App;

//<Route path="cart" element={ <Cart/> } />
//<Route path="collection" element={ <Collection/> } />
