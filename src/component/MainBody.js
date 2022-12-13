

import React from 'react'
import img1 from "../media/watches/1.jpg"
import img2 from "../media/watches/2.jpg"
import img3 from "../media/watches/11.jpg"
import img11 from "../media/watches/12.jpg"
import img15 from "../media/watches/3.jpg"
import img4 from "../media/watches/4.jpg"
import img5 from "../media/watches/5.jpg"
import img6 from "../media/watches/6.jpg"
import img7 from "../media/watches/7.jpg"
import img8 from "../media/watches/8.jpg"
import img9 from "../media/watches/9.jpg"
import img10 from "../media/watches/10.jpg"


import Testimonial from "../component/Testimonial"



const MainBody = () => {
  return (
    <main className="w-3/4 h-[100vh] overflow-y-scroll">
        <div className="h-[70vh] w-full  mb-[15vh]">
            <img src={img15} alt="bg" className="h-full w-full"/>
        </div>

        <article className="h-[90vh] bg-gray-100 w-[98%] ml-[1%]">
            <h1>Top Seller</h1>

            <section className="grid grid-flow-dense auto-rows-[150px] grid-cols-gridTemplateColumns grid-cols-4 bg-black">
                <div className=" col-span-1 border border-gray-800 bg-red-200 row-span-1" >
                  <img src={img1} className="hover:grayscale hover:scale-105 w-full h-full" />
                </div>
                <div className="col-span-1 border border-gray-800 bg-gray-400 row-span-2">
                <img src={img2} className="hover:scale-105 w-full h-full hover:hue-rotate-180" />
                </div>
                <div className="col-span-1 border border-gray-800 bg-gray-600 row-span-1">
                <img src={img3} className="hover:scale-105 w-full h-full hover:grayscale" />
                </div>
                <div className="col-span-1 border border-gray-800 bg-gray-600 row-span-2">
                <img src={img4} className="hover:scale-105 w-full h-full hover:hue-rotate-180 hover:w-[120%]" />
                </div>
                <div className="col-span-1 border border-gray-800 bg-gray-600 row-span-2">
                <img src={img5} className="hover:scale-105 w-full h-full hover:grayscale hover:w-[120%]" />
                </div>
                <div className="col-span-1 border border-gray-800 bg-gray-600 row-span-1">
                <img src={img6} className="hover:scale-105 w-full h-full hover:hue-rotate-180 hover:w-[120%]" />
                </div>
                <div className="col-span-1 border border-gray-800 bg-gray-600 row-span-2">
                <img src={img7} className="hover:scale-105 w-full h-full hover:grayscale hover:w-[120%]" />
                </div>
                <div className="col-span-1 border border-gray-800 bg-gray-600 row-span-1">
                <img src={img8} className="hover:scale-105 w-full h-full hover:hue-rotate-180 hover:w-[120%]" />
                </div>
                <div className="col-span-1 border border-gray-800 bg-gray-600 row-span-2">
                <img src={img9} className="hover:scale-105 w-full h-full hover:grayscale hover:w-[120%]" />
                </div>
                <div className="col-span-1 border border-gray-800 bg-gray-600 row-span-1">
                <img src={img10} className="hover:scale-105 w-full h-full hover:hue-rotate-180 hover:w-[120%]" />
                </div>
                <div className="col-span-1 border border-gray-800 bg-gray-600 row-span-1">
                <img src={img11} className="hover:scale-105 w-full h-full hover:grayscale hover:w-[120%]" />
                </div>
            </section>

            <h4>View More</h4>


        </article>

        <Testimonial />
    </main>
  )
}

export default MainBody