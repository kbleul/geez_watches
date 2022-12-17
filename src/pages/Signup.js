import { Link } from "react-router-dom";
import { useEffect } from "react"
import { useLocationContext } from "../customHooks/useMyContext";

import img8 from "../media/watches/13.jpg"


const Signup = () => {

  const [ whereAmI , set_whereAmI ] = useLocationContext()


  useEffect(() => {   if(whereAmI !== "signup") { set_whereAmI("Signup") }  },[])

  return (
    <main className="w-3/4 relative">
       <img className="w-full h-[100vh]" src={img8} />
       <article className="w-1/2 ml-[25%] mt-[5vh] h-[90vh] shadow-2xl border hover:border-gray-400  absolute top-0 bg-transparent">
         <h3 className="px-4 font-bold text-center mx-8 mt-6 mb-10 text-white font-nav-main">Signup to get special offers, free giveaways, and once-in-a-lifetime deals.</h3>

         <section className="mb-8">
            <input className="w-4/5 ml-[10%] p-3 mb-8 border-b-2 bg-black hover:border-red-400 outline-none" type="email" value="" placeholder="Your Email" />
            <input className="w-4/5 ml-[10%] p-3 mb-8 border-b-2 bg-black hover:border-red-400 outline-none" type="text" value="" placeholder="Username" />
            <input className="w-4/5 ml-[10%] p-3 mb-8 border-b-2 bg-black hover:border-red-400 outline-none" type="password" value="" placeholder="Password" />
            <input className="w-4/5 ml-[10%] p-3 mb-8 border-b-2 bg-black hover:border-red-400 outline-none" type="password" value="" placeholder="Confirm Password" />
         </section>

         <button className="w-2/5 bg-black text-white font-bold hover:bg-gray-900 py-2 text-center ml-[30%]">Signup</button>

         <p className="text-sm text-center mt-4 text-white">Aleady have an account ? <Link to="/signup" className="text-red-600 ml-2 hover:underline">Login Here</Link></p>
       </article>
    </main>
  )
}

export default Signup