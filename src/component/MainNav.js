
import { Link } from "react-router-dom";
import { useState } from "react"
import { useLocationContext } from "../customHooks/useMyContext";

import logo from "../media/logo.jpg"


const MainNav = () => {

  const [menu_choice , set_menu_choice ] = useState("none")
  const [ whereAmI , set_whereAmI ] = useLocationContext()

  return (
    <article className="text-white w-1/4 bg-gradient-to-t from-[#484848] to-[black] overflow-y-scroll pb-8">
      <section className="mt-2">
        <img src={logo} alt="Ge'ez Watches" />
      </section>

      <nav className="mt-[30%] mb-[40%] block font-nav-main">
        <Link to="/" className={whereAmI === "home" ? "mb-8 ml-[22%] block  px-10 border-orange-500 hover:text-orange-500 hover:border-white font-extrabold border-l-4 " : "mb-8 ml-[22%] block  px-10 border-orange-500 hover:text-orange-500 hover:border-white font-extrabold"}>Home</Link>

        <Link to="/cart" className={whereAmI === "cart" ? "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold hover:border-white border-l-4 border-orange-500" : "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold border-orange-500 hover:border-white"}>Cart</Link>

        <Link to="/collections" className={whereAmI === "collection" ? "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold border-orange-500 border-l-4 hover:border-white" : "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold border-orange-500 hover:border-white"}>Collection</Link>

        <Link to="/catalog" className={whereAmI === "catalog" ? "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold hover:border-white  border-l-4 border-orange-500 " : "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold hover:border-white"}>Catalogs</Link>

        <buttom className={whereAmI === "gender" ? "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold hover:border-white bg-inherit border-l-4 border-orange-500" : "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold hover:border-white bg-inherit"} onClick={() => menu_choice === "gender" ? set_menu_choice("none") : set_menu_choice("gender")}>Gender</buttom>

        <div className={menu_choice === "gender" ? "" : "hidden"}>
          <Link to="/men" className="mb-8 ml-[29%] block px-10 hover:text-orange-500 font-extrabold hover:border-white bg-inherit">Men's</Link>
          <Link to="/women" className="mb-8 ml-[29%] block px-10 hover:text-orange-500 font-extrabold hover:border-white bg-inherit">Women's</Link>
        </div>

        <buttom className={whereAmI.includes("wrist_color")  ? "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold hover:border-white bg-inherit border-l-4 border-orange-500" : "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold hover:border-white bg-inherit" } onClick={() => menu_choice === "colors" ? set_menu_choice("none") : set_menu_choice("colors")}>Wrist Colors</buttom>

        <div className={menu_choice === "colors" ? "" : "hidden"}>
          <Link to="/wrist_color" className="mb-8 ml-[29%] block px-10 hover:text-orange-500 font-extrabold hover:border-white bg-inherit" onClick={() => { set_whereAmI("wrist_color-blue")}}>Blue</Link>
          <Link to="/wrist_color" className="mb-8 ml-[29%] block px-10 hover:text-orange-500 font-extrabold hover:border-white bg-inherit" onClick={() => { set_whereAmI("wrist_color-black")}}>Black</Link>
          <Link to="/wrist_color" className="mb-8 ml-[29%] block px-10 hover:text-orange-500 font-extrabold hover:border-white bg-inherit" onClick={() => { set_whereAmI("wrist_color-gold")}}>Gold</Link>
          <Link to="/wrist_color" className="mb-8 ml-[29%] block px-10 hover:text-orange-500 font-extrabold hover:border-white bg-inherit" onClick={() => { set_whereAmI("wrist_color-brown")}}>Brown</Link>
          <Link to="/wrist_color" className="mb-8 ml-[29%] block px-10 hover:text-orange-500 font-extrabold hover:border-white bg-inherit" onClick={() => { set_whereAmI("wrist_color-white")}}>White</Link>
        </div>


    </nav><nav className="font-bold">
        <Link to="login" className="block w-[40%] border hover:border-none  hover:bg-yellow-300 hover:text-black ml-[30%] px-4 py-2 text-center mb-6">Login</Link>
        <Link to="signup" className="block w-[40%]  ml-[30%] px-4 py-2 text-center hover:bg-yellow-300 bg-yellow-100 text-bold text-black">Sign Up</Link>
      </nav>

    </article>
  )
}

export default MainNav