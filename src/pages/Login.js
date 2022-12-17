import { Link } from "react-router-dom";
import { useEffect } from "react"
import { useLocationContext } from "../customHooks/useMyContext";

const Login = () => {

  const [ whereAmI , set_whereAmI ] = useLocationContext()


  useEffect(() => {   if(whereAmI !== "login") { set_whereAmI("login") }  },[])

  return (
    <main>
       <article>
         <h3>Signup to get special offers, free giveaways, and once-in-a-lifetime deals.</h3>

         <section>
            <input type="text" value="" placeholder="Username" />
            <input type="password" value="" placeholder="Password" />
         </section>

         <button>Login</button>

         <p>Don't have an account yet ? <Link to="/signup" >Creat Account Here</Link></p>
       </article>
    </main>
  )
}

export default Login