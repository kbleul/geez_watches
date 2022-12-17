import { Link } from "react-router-dom";
import { useEffect } from "react"
import { useLocationContext } from "../customHooks/useMyContext";

import img8 from "../media/watches/13.jpg"


const Login = () => {

  const [ whereAmI , set_whereAmI ] = useLocationContext()


  useEffect(() => {   if(whereAmI !== "login") { set_whereAmI("login") }  },[])

  return (
    <main className="w-3/4 relative">
       <img className="w-full h-[100vh]" src={img8} />
       <article className="w-1/2 ml-[25%] mt-[14vh] h-[80vh] shadow-2xl border hover:border-gray-400  absolute top-0 bg-transparent">
         <h3 className="px-4 font-bold text-center mx-8 mt-8 mb-24 text-white font-nav-main">Login to get special offers, free giveaways, and once-in-a-lifetime deals.</h3>

         <section className="mb-8">
            <input className="w-4/5 ml-[10%] p-3 mb-8 border-b-2 bg-black hover:border-red-400 outline-none" type="text" value="" placeholder="Username" />
            <input className="w-4/5 ml-[10%] p-3 mb-8 border-b-2 bg-black hover:border-red-400 outline-none" type="password" value="" placeholder="Password" />
         </section>

         <button className="w-2/5 bg-black text-white font-bold hover:bg-gray-900 py-2 text-center ml-[30%]">Login</button>

         <p className="text-sm text-center mt-8 text-white">Don't have an account yet ? <Link to="/signup" className="text-red-600 ml-2 hover:underline">Creat Account Here</Link></p>
       </article>
    </main>
  )
}

export default Login