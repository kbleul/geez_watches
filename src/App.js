
import { Routes, Route } from "react-router-dom"

import './App.css';

import LocationContextProvider from "./context/locationContext"
import CardContextProvider from "./context/cardContext"


import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Catalog from "./pages/Catalogs"
import Cart from "./pages/Cart"
import Men from "./pages/Men"
import Women from "./pages/Women"
import WristColors from "./pages/WristColors"


import MainNav from "./component/MainNav"
import Footer from "./component/Footer"



function App() {
  return (<LocationContextProvider>
           <CardContextProvider>
            <article className="App">
              <section className="flex h-[100vh]">
                <MainNav />

                <Routes>
                  <Route path="/" element={ <Home /> } />
                  <Route path="collections" element={<Collection /> } />
                  <Route path="catalog" element={<Catalog /> } />
                  <Route path="cart" element={<Cart /> } />
                  <Route path="men" element={<Men /> } />
                  <Route path="women" element={<Women /> } />
                  <Route path="wrist_color" element={<WristColors /> } />
                </Routes>

              </section>
              <Footer />
            </article>
           </CardContextProvider>
          </LocationContextProvider>
  );
}

export default App;