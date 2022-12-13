
import logo from "../media/logo.jpg"

const MainNav = () => {
  return (
    <article className="text-white w-1/4 bg-gradient-to-t from-[#484848] to-[black]">
        <section className="mt-10">
          <img src={logo} alt="Ge'ez Watches"/>
        </section>
       
        <nav className="mt-[30%] mb-[40%] block font-nav-main">
          <a href="" className="mb-8 ml-[25%] block border-l-4 px-10 border-orange-500 hover:text-orange-500 hover:border-white font-extrabold">Home</a>
          <a href="" className="mb-8 ml-[25%] block px-10 hover:text-orange-500 font-extrabold hover:border-white ">Collection</a>
          <a href="" className="mb-8 ml-[25%] block px-10 hover:text-orange-500 font-extrabold hover:border-white ">Cart</a>
        </nav>

        <nav className="">
          <a href="" className="block w-[40%] border hover:border-none  hover:bg-gray-800 ml-[30%] px-4 py-2 text-center mb-6">Login</a>
          <a href="" className="block w-[40%]  ml-[30%] px-4 py-2 text-center hover:bg-yellow-300 bg-yellow-100 text-bold text-black">Sign Up</a>
        </nav>

    </article>
  )
}

export default MainNav