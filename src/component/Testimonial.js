
import img1 from "../media/watches/testmonials/1.jpg"
import img2 from "../media/watches/testmonials/2.jpg"
import img3 from "../media/watches/testmonials/3.jpg"
import img4 from "../media/watches/testmonials/4.jpg"

import { useState } from "react"


const Testimonial = () => {

      const [ secNumber , set_secNumber ] = useState(1)

      const incrementSec = () => {
        secNumber === 1 ? set_secNumber(prev => ++prev) : set_secNumber(prev => --prev)
      }



  return (
    <article className="h-[70vh] flex">
        <button className="w-[10%] hover:opacity-60 flex justify-end items-center" onClick={incrementSec}>
         <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"/></svg>
        </button>
        <section className="w-[80%]" >
          <div className={ secNumber === 1 ? "flex w-[48%] ml-[2%] gap-2" : "hidden"}>
            <img src={img1} />
            <img src={img2} />
          </div>
          <div className={secNumber === 2 ? "flex w-[48%] ml-[2%] gap-2" : "hidden" }>
            <img src={img3} />
            <img src={img4} />
          </div>
        </section>
        <button className="w-[10%] hover:opacity-60 flex justify-start items-center" onClick={incrementSec}>
         <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="m7 2l10 10L7 22"/></svg>
        </button>
    </article>
  )
}

export default Testimonial