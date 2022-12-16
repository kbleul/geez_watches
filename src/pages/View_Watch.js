
import { useParams } from "react-router";
import { useState } from "react"
import  { addToCart , removeFromCart }  from "../context/cardContext"
import {useCartContext} from "../customHooks/useMyContext"



import img1 from "../media/watches/21.jpg"
import img2 from "../media/watches/20.jpg"
import img3 from "../media/watches/19.jpg"
import img4 from "../media/watches/18.jpg"
import img9 from "../media/watches/17.jpg"
import img5 from "../media/watches/16.jpg"
import img6 from "../media/watches/15.jpg"
import img7 from "../media/watches/14.jpg"
import img8 from "../media/watches/13.jpg"
import img10 from "../media/watches/16.jpg"
import img11 from "../media/watches/17.jpg"

const watches_obj = {
    "001" : 0, "003" : 1, "004" : 2, "005" : 3, "006" : 4, "007" : 5, 
    "008" : 6, "009" : 7, "010" : 8 , "011" : 9
  }
  
  
  const temp_watches = [{"id" : "001" , "Name" : "Lorem Epsum", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "2500" , "img" : img1 },
  {"id" : "003" , "Name" : "mollitia qui ", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "25200" , "img" : img4 },
  {"id" : "004" , "Name" : "dolore sunt error ", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "28700" , "img" : img5 },
  {"id" : "005" , "Name" : "sed inventore ", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "5000" , "img" : img6 },
  {"id" : "006" , "Name" : "voluptate! Illo", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "5500" , "img" : img7 },
  {"id" : "007" , "Name" : "natus beatae illum", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "7699" , "img" : img8 },
  {"id" : "008" , "Name" : "Non blanditiis sed in", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "3500" , "img" : img3 },
  {"id" : "009" , "Name" : "voluptate! Illo", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "8456" , "img" : img9 },
  {"id" : "010" , "Name" : "Non blanditiis sed in", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "3500" , "img" : img10 },
  {"id" : "011" , "Name" : "voluptate! Illo", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "8456" , "img" : img11 },

  
  ]

const ViewWatch = () => {
    const { slug } = useParams();
    const [ myCart , set_myCart ] = useCartContext()

    const [ id , name ] = slug.split("_")

    const [ showedImg, set_showedImg ] = useState(temp_watches[ watches_obj[id] ].img)


  return (<article className="w-3/4 overflow-y-scroll">
    <main className=" h-[86vh] mt-[7vh] flex">
       <article className="w-[20%] ">
        <img  onClick={() => set_showedImg(img4)} src={img4} className="h-[16.35vh] w-[70%] ml-[15%] mb-[1vh] hover:opacity-70"/>
        <img onClick={() => set_showedImg(img5)} src={img5} className="h-[16.35vh] w-[70%] ml-[15%] mb-[1vh] hover:opacity-70"/>
        <img onClick={() => set_showedImg(img6)} src={img6} className="h-[16.35vh] w-[70%] ml-[15%] mb-[1vh] hover:opacity-70"/>
        <img onClick={() => set_showedImg(img7)} src={img7} className="h-[16.35vh] w-[70%] ml-[15%] mb-[1vh] hover:opacity-70"/>
        <img onClick={() => set_showedImg(img8)} src={img8} className="h-[16.35vh] w-[70%] ml-[15%] mb-[1vh] hover:opacity-70"/>
       </article>

       <article className="w-[80%] mt-[4vh]">
         <img className="w-3/5 ml-[20%] h-[66vh] " src={showedImg} />

          <h2 className="text-center border-b border-gray-400 w-2/5 ml-[30%] font-nav-main font-bold py-3">{name}</h2>
          <section className="flex w-[50%] ml-[25%] justify-between items-center mt-[2vh]">
            <p className="font-nav-main">{temp_watches[ watches_obj[id] ].Price} Birr</p>

            { myCart.includes(id) ?
              <button className="bg-black hover:bg-gray-900 text-white px-4 py-1" onClick={ () => { removeFromCart(id , myCart , set_myCart) }}>Remove from Cart</button> :
              <button className="bg-black hover:bg-gray-900 text-white px-4 py-1" onClick={ () => { addToCart(id , myCart , set_myCart) }}>Add To Cart</button>
            }
          </section>
          
       </article>
       
    </main>

    <section className="mt-[20vh] mb-[20%] w-11/12 ml-[4.5%] font-nav-main leading-8">
            <h2 className="font-extrabold text-2xl py-6">About</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ut possimus nisi maiores. Sequi, laboriosam consequatur? Minus corrupti veniam blanditiis quaerat sit odio eum praesentium sed corporis libero nisi fugit quam distinctio modi molestias aperiam, autem, error quo vitae! Consequatur nam officia illo expedita itaque vitae, ea omnis recusandae facere porro reiciendis adipisci veritatis a quas, ullam perspiciatis ex sunt. Molestias ipsam tempore voluptas facilis id molestiae consectetur error fugit cumque suscipit atque beatae qui hic velit magnam, asperiores eos ipsum pariatur minima. Cupiditate magni nesciunt, hic qui sed officia accusantium quis obcaecati sit quae aut. Odit dolorem debitis architecto.
            </p>
    </section>
    </article>
  )
}

export default ViewWatch

/*

<article className="w-[30%] ">
          <h2>{name}</h2>
          <p>{temp_watches[ watches_obj[id] ].Price}</p>

          { myCart.includes(id) ?
            <button onClick={ () => { removeFromCart(id , myCart , set_myCart) }}>Remove from Cart</button> :
            <button onClick={ () => { addToCart(id , myCart , set_myCart) }}>Add To Cart</button>
          }
       </article>


<h2>{name}</h2>
         <p>{temp_watches[ watches_obj[id] ].Price}</p>

         { myCart.includes(id) ?
          <button onClick={ () => { removeFromCart(id , myCart , set_myCart) }}>Remove from Cart</button> :
          <button onClick={ () => { addToCart(id , myCart , set_myCart) }}>Add To Cart</button>
         }


*/