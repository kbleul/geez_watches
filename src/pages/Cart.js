
import img1 from "../media/watches/21.jpg"
import img2 from "../media/watches/20.jpg"
import img3 from "../media/watches/19.jpg"
import img4 from "../media/watches/18.jpg"
import img9 from "../media/watches/17.jpg"
import img5 from "../media/watches/16.jpg"
import img6 from "../media/watches/15.jpg"
import img7 from "../media/watches/14.jpg"
import img8 from "../media/watches/13.jpg"

import { useEffect } from "react"
import {useLocationContext} from "../customHooks/useMyContext"

const watches_obj = {
  "001" : 0, "002" : 1, "003" : 2, "004" : 3, "005" : 4, "006" : 5, "007" : 6,
  "009" : 7
}


const temp_watches = [{"id" : "001" , "Name" : "Lorem Epsum", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "2500" , "img" : img1 },
{"id" : "001" , "Name" : "dolor sit, amet ", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "3000" , "img" : img2 },
{"id" : "002" , "Name" : "Non blanditiis sed in", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "3500" , "img" : img3 },
{"id" : "003" , "Name" : "mollitia qui ", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "25,200" , "img" : img4 },
{"id" : "004" , "Name" : "dolore sunt error ", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "28700" , "img" : img5 },
{"id" : "005" , "Name" : "sed inventore ", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "5000" , "img" : img6 },
{"id" : "006" , "Name" : "voluptate! Illo", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "5500" , "img" : img7 },
{"id" : "007" , "Name" : "natus beatae illum", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "7699" , "img" : img8 },
{"id" : "009" , "Name" : "voluptate! Illo", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "8456" , "img" : img9 },

]

const Cart = () => {

  const [ whereAmI , set_whereAmI ] = useLocationContext()

  useEffect(() => {
    if(whereAmI !== "cart") { set_whereAmI("cart") }
  },[])

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

        
        <section className="w-full flex items-center justify-center">
            

            <div className="w-[40%] relative">
              <div className="my-8">
                <img src={img1} className="w-[50%] ml-[25%]" />
                <h4 className="text-center">Lorem Ipsum</h4>
                <p className="text-center text-sm">Color - Red</p>
                <p className="text-center text-sm">Product Code - 001</p>
              </div>

              <button className="hover:opacity-70 absolute top-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8s8-3.582 8-8s-3.581-8-8-8zm3.707 10.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0a.999.999 0 0 1 0-1.414L10.586 12L8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13.414 12l2.293 2.293z"/></svg>
              </button>
            </div>

            <div className="w-[20%]">
              <div className="flex my-8 text-center items-center justify-center">
                <p className="px-4 text-xl font-bold">-</p>
                <input type="number" value='0' className="w-[40%] text-center" />
                <p className="px-4 text-xl font-bold">+</p>
              </div>
            </div>

            <p  className="w-[20%] text-center">4500 Birr</p>
            
            <p className="w-[20%] text-center">13,500 Birr</p>

        
        </section>

        <section className="w-full flex items-center justify-center">
            

            <div className="w-[40%] relative">
              <div className="my-8">
                <img src={img2} className="w-[50%] ml-[25%]" />
                <h4 className="text-center">Lorem Ipsum</h4>
                <p className="text-center text-sm">Color - Red</p>
                <p className="text-center text-sm">Product Code - 001</p>
              </div>

              <button className="hover:opacity-70 absolute top-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8s8-3.582 8-8s-3.581-8-8-8zm3.707 10.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0a.999.999 0 0 1 0-1.414L10.586 12L8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13.414 12l2.293 2.293z"/></svg>
              </button>
            </div>

            <div className="w-[20%]">
              <div className="flex my-8 text-center items-center justify-center">
                <p className="px-4 text-xl font-bold">-</p>
                <input type="number" value='0' className="w-[40%] text-center" />
                <p className="px-4 text-xl font-bold">+</p>
              </div>
            </div>

            <p  className="w-[20%] text-center">4500 Birr</p>
            
            <p className="w-[20%] text-center">13,500 Birr</p>

        
        </section>

        <section className="w-full flex items-center justify-center">
            

            <div className="w-[40%] relative">
              <div className="my-8">
                <img src={img3} className="w-[50%] ml-[25%]" />
                <h4 className="text-center">Lorem Ipsum</h4>
                <p className="text-center text-sm">Color - Red</p>
                <p className="text-center text-sm">Product Code - 001</p>
              </div>

              <button className="hover:opacity-70 absolute top-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8s8-3.582 8-8s-3.581-8-8-8zm3.707 10.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0a.999.999 0 0 1 0-1.414L10.586 12L8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13.414 12l2.293 2.293z"/></svg>
              </button>
            </div>

            <div className="w-[20%]">
              <div className="flex my-8 text-center items-center justify-center">
                <p className="px-4 text-xl font-bold">-</p>
                <input type="number" value='0' className="w-[40%] text-center" />
                <p className="px-4 text-xl font-bold">+</p>
              </div>
            </div>

            <p  className="w-[20%] text-center">4500 Birr</p>
            
            <p className="w-[20%] text-center">13,500 Birr</p>

        
        </section>
      </article>

      <article className="w-1/3 bg-gray-100 mt-[18vh] mr-4 h-[81vh]">
        <h2 className="py-4 text-2xl font-bold border-b border-gray-300 w-[90%] ml-[5%]">Order Summery</h2>
        <div className="py-2 font-nav-main px-2 font-bold  w-[90%] ml-[5%] flex justify-between text-sm mb-[25vh] mt-4">
          <p>Items 3</p>
          <p className="">13,500 </p>
        </div>

        <div className=" py-2 font-nav-main px-2 font-bold  w-[90%] ml-[5%] flex justify-between text-sm mb-4">
          <p>Shipping</p>
          <p className="">0.00 </p>
        </div>

        <div className="py-4 font-nav-main px-2 font-bold  w-[90%] ml-[5%] flex justify-between text-sm border-t border-gray-200">
          <p>Total</p>
          <p>13,500 Birr</p>
        </div>
      
        <button className="w-[80%] ml-[10%] border border-black mt-[10vh] p-2 bg-black text-white hover:bg-gray-900">Checkout</button>
      </article>

    </main>
  )
}

export default Cart