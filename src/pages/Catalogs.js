

import img1 from "../media/watches/21.jpg"
import img2 from "../media/watches/20.jpg"
import img3 from "../media/watches/19.jpg"
import img4 from "../media/watches/18.jpg"

import { useEffect } from "react"
import {useLocationContext} from "../customHooks/useMyContext"


const temp_watches = [{"id" : "001" , "Name" : "Lorem Epsum", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "2500" , "img" : img1 },
{"id" : "001" , "Name" : "dolor sit, amet ", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "3000" , "img" : img2 },
{"id" : "002" , "Name" : "Non blanditiis sed in", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "3500" , "img" : img3 },
{"id" : "003" , "Name" : "mollitia qui ", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "25,200" , "img" : img4 },,
]

const Catalog = () => {
  
  const [ whereAmI , set_whereAmI ] = useLocationContext()

  useEffect(() => {
    if(whereAmI !== "catalog") { set_whereAmI("catalog") }
  },[])


  return (
    <main className="w-3/4 h-[100vh] overflow-y-scroll pb-48">

     <p className="w-[80%] ml-[10%] leading-8 font-nav-main my-16 font-bold">Geez watch has 4 various catalogs. Each one has 5 different watches with color options of spare wrist bands, totaling 20 types of watches. </p>
     <h1 className="text-5xl font-serif font-bold my-24 w-[25%] ml-[74.5%] py-2 px-1 text-white text-end  bg-black">Catalogs</h1>

     <article className="grid gap-x-10 gap-y-20 grid-cols-2 w-[94%] ml-[3%]">
        { temp_watches.map(item => (
            <section key={item.id} className="border-black h-[63vh] hover:opacity-90 relative">
                <div>
                    <img className="h-[60vh] w-full" src={item.img} alt={item.Disc} />
                </div>
                <div>
                    <h3 className="font-bold text-center capitalize bg-black text-white mb-2  font-nav-main">{item.Name}</h3>
                </div>
            </section>
        ))}
     </article>
    </main>
  )
}

export default Catalog