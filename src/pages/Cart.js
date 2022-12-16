
import img1 from "../media/watches/21.jpg"
import img2 from "../media/watches/20.jpg"
import img3 from "../media/watches/19.jpg"
import img4 from "../media/watches/18.jpg"
import img9 from "../media/watches/17.jpg"
import img5 from "../media/watches/16.jpg"
import img6 from "../media/watches/15.jpg"
import img7 from "../media/watches/14.jpg"
import img8 from "../media/watches/13.jpg"

import cartgif from "../media/cart.gif"

import { useEffect , useState } from "react"
import {useLocationContext , useCartContext} from "../customHooks/useMyContext"
import CartItems from "../component/CartItems"




const Cart = () => {

  const [ whereAmI , set_whereAmI ] = useLocationContext()
  const [ myCart ] = useCartContext()
  const [ viewCart_items , set_viewCart_items ] = useState([])

  //total selected items including added qantities
  const [ selectedItems , set_selectedItems ] = useState(0)
  const [ totalPrice , set_totalPrice ] = useState(0)



  useEffect(() => {
    if(whereAmI !== "cart") { set_whereAmI("cart") }
  },[])

  useEffect(() => {
    set_viewCart_items([...myCart])
  }, [myCart])

  return (
    <main className="w-3/4 h-[100vh] overflow-y-scroll pb-48 flex">
    
      <article className="w-2/3 border h-[99vh] overflow-y-scroll">
        <section className="flex justify-between items-center w-full">
         <h1 className="text-5xl font-serif font-bold mt-4 mb-16 w-[60%] ml-[.5%] py-2 px-1 text-white text-end  bg-black">Shopping Cart</h1>
         <p className="mr-4 font-bold text-xl">3 Items</p>
        </section>

        <div className="flex mb-4">
              <h3 className="text-center font-nav-main text-sm font-bold w-[40%]">Product</h3>
              <h3 className="text-center font-nav-main text-sm font-bold w-[20%]">Quantity</h3>
              <h3 className="text-center font-nav-main text-sm font-bold w-[20%]">Price</h3>
              <h3 className="text-center font-nav-main text-sm font-bold w-[20%]">Total</h3>
        </div>

        {viewCart_items.length === 0 && <section className="text-center flex flex-col items-center justify-center mt-[27%] gap-6 font-nav-main font-extrabold text-xl text-gray-400">
          <p>No Items on cart yet</p>
          <div>
           <img src={cartgif} className="w-16 h-16" />
          </div>
        </section>}

        { viewCart_items.map(item => (  <CartItems item={item}  />  ))  }
     
      </article>

      <article className="w-1/3 bg-gray-100 mt-[18vh] mr-4 h-[81vh]">
        <h2 className="py-4 text-2xl font-bold border-b border-gray-300 w-[90%] ml-[5%]">Order Summery</h2>
        <div className="py-2 font-nav-main px-2 font-bold  w-[90%] ml-[5%] flex justify-between text-sm mb-[25vh] mt-4">
          <p>Items { selectedItems }</p>
          <p className="">13,500 </p>
        </div>

        <div className=" py-2 font-nav-main px-2 font-bold  w-[90%] ml-[5%] flex justify-between text-sm mb-4">
          <p>Shipping</p>
          <p className="">0.00 </p>
        </div>

        <div className="py-4 font-nav-main px-2 font-bold  w-[90%] ml-[5%] flex justify-between text-sm border-t border-gray-200">
          <p>Total</p>
          <p>{totalPrice} Birr</p>
        </div>
      
        <button className="w-[80%] ml-[10%] border border-black mt-[10vh] p-2 bg-black text-white hover:bg-gray-900">Checkout</button>
      </article>

    </main>
  )
}

export default Cart
