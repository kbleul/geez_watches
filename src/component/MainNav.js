
import logo from "../media/logo.jpg"

const MainNav = () => {
  return (
    <article className="text-white w-1/4 bg-gradient-to-t from-[#484848] to-[black]">
        <section className="mt-10">
          <img src={logo} alt="Ge'ez Watches"/>
        </section>
       
        <nav className="mt-[30%] block font-nav-main">
          <a href="" className="mb-8 text-center">Home</a>
          <a href="" className="mb-8 text-center">Collection</a>
          <a href="" className="mb-8 text-center">Cart</a>
        </nav>

        <nav>
          <a href="">Login</a>
          <a href="">Sign Up</a>
        </nav>

    </article>
  )
}

export default MainNav