
import './App.css';
import MainNav from "./component/MainNav"
import MainBody from "./component/MainBody"
import Footer from "./component/Footer"



function App() {
  return (
    <article className="App">
      <section className="flex h-[100vh] overflow-y-">
         <MainNav />
         <MainBody />
      </section>
      <Footer />
    </article>
  );
}

export default App;
