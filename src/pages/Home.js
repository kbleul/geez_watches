

import img1 from "../media/watches/1.jpg"
import img2 from "../media/watches/2.jpg"
import img3 from "../media/watches/11.jpg"
import maincover from "../media/watches/18.jpg"
import img4 from "../media/watches/4.jpg"
import img5 from "../media/watches/5.jpg"
import img6 from "../media/watches/6.jpg"
import img7 from "../media/watches/7.jpg"
import img8 from "../media/watches/8.jpg"
import img9 from "../media/watches/9.jpg"
import img10 from "../media/watches/10.jpg"

import { useEffect } from "react"
import {useLocationContext} from "../customHooks/useMyContext"
import Testimonial from "../component/Testimonial"



const Home = () => {

    const [ whereAmI , set_whereAmI ] = useLocationContext()

  useEffect(() => {
    if(whereAmI !== "home") { set_whereAmI("home") }
  },[])

  return (
    <main className="w-3/4 h-[100vh] overflow-y-scroll">
        <div className="h-[80vh] w-full  mb-[15vh] relative">
            <img src={maincover} alt="bg" className="h-full w-full"/>

            <div className="text-white absolute top-0 right-0 mt-[65vh]">
              <h2 className="text-4xl font-bold font-nav-main mr-4">Ge'ez watches "Tell Your Story."</h2>
              <p className="text-right mr-10">Designed in Ethiopia </p>
             </div>
        </div>

        

        <h1 className="text-5xl font-serif font-bold mt-40 mb-12 w-[30%] ml-[69.5%] py-2 px-1 text-white text-end  bg-black">Top Seller</h1>
        <article className=" bg-black font-bold text-white pb-1 w-[98%] ml-[1%]">
      

            <section className="grid grid-flow-dense auto-rows-[200px] grid-cols-gridTemplateColumns grid-cols-3 bg-black mb-2">
                <div className=" col-span-1 border border-white bg-red-200 row-span-1 relative" >
                  <img src={img1} className=" w-full h-full contrast-125 hover:hue-rotate-180" />
                </div>
                <div className="col-span-1 border border-white bg-gray-400 row-span-2">
                <img src={img2} className="w-full h-full contrast-125 hover:hue-rotate-180" />
                </div>
                <div className="col-span-1 border border-white bg-gray-600 row-span-1">
                <img src={img3} className="w-full h-full contrast-125 hover:hue-rotate-180" />
                </div>
                <div className="col-span-1 border border-white bg-gray-600 row-span-2">
                <img src={img4} className="w-full h-full contrast-125 hover:hue-rotate-180 " />
                </div>
                <div className="col-span-1 border border-white bg-gray-600 row-span-2">
                <img src={img5} className="w-full h-full contrast-125 hover:hue-rotate-180 " />
                </div>
                <div className="col-span-1 border border-white bg-gray-600 row-span-1">
                <img src={img6} className="w-full h-full contrast-125 hover:hue-rotate-180 " />
                </div>
                <div className="col-span-1 border border-white bg-gray-600 row-span-2">
                <img src={img7} className="w-full h-full contrast-125 hover:hue-rotate-180 " />
                </div>
                <div className="col-span-1 border border-white bg-gray-600 row-span-1">
                <img src={img8} className="w-full h-full contrast-125 hover:hue-rotate-180 " />
                </div>
                <div className="col-span-1 border border-white bg-gray-600 row-span-2">
                <img src={img9} className="w-full h-full contrast-125 hover:hue-rotate-180 " />
                </div>
                <div className="col-span-1 border border-white bg-gray-600 row-span-1">
                <img src={img10} className="w-full h-full contrast-125 hover:hue-rotate-180 " />
                </div>
               
            </section>

            <h4 className="text-center hover:text-orange-200">View All</h4>


        </article>



        <h3 className="text-5xl font-serif font-bold mt-40 mb-12 w-[30%] ml-[69.5%] py-2 px-1 text-white text-end  bg-black">Testimonials</h3>

        <Testimonial />
       
    </main>
  )
}

export default Home

 // <Testimonial />