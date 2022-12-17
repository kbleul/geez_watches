
import { Link } from "react-router-dom";
import { useState } from "react"
import { useLocationContext , useCartContext } from "../customHooks/useMyContext";

import logo from "../media/logo.jpg"


const MainNav = () => {

  const [menu_choice , set_menu_choice ] = useState("none")
  const [ whereAmI , set_whereAmI ] = useLocationContext()
  const [ myCart ] = useCartContext()



  return (
    <article className="text-white w-1/4 bg-gradient-to-t from-[#484848] to-[black] overflow-y-scroll pb-8">
      <section className="mt-2">
        <img src={logo} alt="Ge'ez Watches" />
      </section>

      <nav className="mt-[25%] mb-[20%] block font-nav-main">
        <Link to="/" className={whereAmI === "home" ? "mb-8 ml-[22%] block  px-10 border-orange-500 hover:text-orange-500 hover:border-white font-extrabold border-l-4 " : "mb-8 ml-[22%] block  px-10 border-orange-500 hover:text-orange-500 hover:border-white font-extrabold"}>Home</Link>

        <Link to="/cart" className={whereAmI === "cart" ? "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold hover:border-white border-l-4 border-orange-500 flex gap-[25%]" : "mb-8 ml-[22%] px-10 hover:text-orange-500 font-extrabold border-orange-500 hover:border-white flex gap-[25%]"}>
          <p>Cart</p> 
          {myCart.length > 0 && <p className="bg-gray-600 text-red-300 rounded-full w-[1.5rem] h-[1rem] text-xs text-center self-start ">{myCart.length}</p>}
        </Link>

        <Link to="/collections" className={whereAmI === "collection" ? "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold border-orange-500 border-l-4 hover:border-white" : "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold border-orange-500 hover:border-white"}>Collection</Link>

        <Link to="/catalog" className={whereAmI === "catalog" ? "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold hover:border-white  border-l-4 border-orange-500 " : "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold hover:border-white"}>Catalogs</Link>

        <button className={whereAmI === "gender" ? "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold hover:border-white bg-inherit border-l-4 border-orange-500" : "mb-8 ml-[22%] block px-10 hover:text-orange-500 font-extrabold hover:border-white bg-inherit"} onClick={() => menu_choice === "gender" ? set_menu_choice("none") : set_menu_choice("gender")}>Gender</button>

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


    </nav>
    
   { (whereAmI !== "login" || whereAmI !== "signup") && <nav className="flex w-4/5 ml-[10%] items-center justify-center cursor-pointer">
        <Link to="login" className="font-bold w-3/5 border hover:border-none bg-white hover:bg-yellow-100 text-black  px-4 py-2 text-center">Login</Link>
        <Link to="signup" className="w-3/4 ml-6 text-sm hover:underline">or register here</Link>
      </nav>}

    </article>
  )
}

export default MainNav