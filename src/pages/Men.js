
import img1 from "../media/watches/21.jpg"
import img3 from "../media/watches/19.jpg"
import img4 from "../media/watches/18.jpg"
import img9 from "../media/watches/17.jpg"
import img5 from "../media/watches/16.jpg"
import img6 from "../media/watches/15.jpg"
import img7 from "../media/watches/14.jpg"
import img8 from "../media/watches/13.jpg"

import { Link } from "react-router-dom";

import { useEffect } from "react"
import {useLocationContext , useCartContext} from "../customHooks/useMyContext"
import  { addToCart , removeFromCart }  from "../context/cardContext"


const temp_watches = [{"id" : "001" , "Name" : "Lorem Epsum", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "2500" , "img" : img1 },
{"id" : "003" , "Name" : "mollitia qui ", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "25,200" , "img" : img4 },
{"id" : "004" , "Name" : "dolore sunt error ", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "28700" , "img" : img5 },
{"id" : "005" , "Name" : "sed inventore ", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "5000" , "img" : img6 },
{"id" : "006" , "Name" : "voluptate! Illo", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "5500" , "img" : img7 },
{"id" : "007" , "Name" : "natus beatae illum", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "7699" , "img" : img8 },
{"id" : "008" , "Name" : "Non blanditiis sed in", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "3500" , "img" : img3 },
{"id" : "009" , "Name" : "voluptate! Illo", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "8456" , "img" : img9 },

]

const Men = () => {

  const [ whereAmI , set_whereAmI ] = useLocationContext()
  const [ myCart , set_myCart ] = useCartContext()


  useEffect(() => {
    if(whereAmI !== "gender") { set_whereAmI("gender") }
  },[])

  return (
    <main className="w-3/4 h-[100vh] overflow-y-scroll pb-48">
    <p className="w-[80%] ml-[10%] leading-8 font-nav-main my-16 font-bold text-center">A man’s got two shots for jewelry: a wedding ring and a watch. The watch is a lot easier to get on and off than a wedding ring.</p>
     <h1 className="text-5xl font-serif font-bold my-16 w-[30%] ml-[69.5%] py-2 px-1 text-white text-end  bg-black">Men's</h1>

     <article className="grid gap-x-4 gap-y-20 grid-cols-3 w-[96%] ml-[2%]">
     { temp_watches.map(item => (
           
      <section  key={item.id} className="border-2 border-black h-[61vh] relative">
          <Link to={`/view/${item.id}_${item.Name}` }>
              <img className="h-[42vh] w-full hover:opacity-90" src={item.img} alt={item.Disc} />
          </Link>
          <div>
              <h3 className="font-bold text-center capitalize bg-black text-white mb-2  font-nav-main">{item.Name}</h3>
              <p className="h-[19vh] px-2">{item.Disc}</p>
          </div>
        
            <p className="text-end text-xl font-extrabold absolute bottom-0 right-1">{item.Price} Birr</p>
            
            { myCart.includes(item.id) ?
              <button className=" self-end w-[50%] capitalize bg-gray-500 text-black text-sm font-bold absolute bottom-0 left-0 py-1 text-white hover:opacity-90 " onClick={() => removeFromCart(item.id , myCart , set_myCart) }><span>-</span> Remove from Cart</button>  :
              <button className="border border-black self-end w-[40%] capitalize bg-black text-white absolute bottom-0 left-0 hover:opacity-90" onClick={ () => { addToCart(item.id , myCart , set_myCart) }}>add to cart <span>+</span></button> 
            }
            
           
      </section>
     ))}
     </article>
    </main>
  )
}

export default Men