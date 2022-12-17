import { useEffect , useState } from "react"
import  { removeFromCart }  from "../context/cardContext"
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

const watches_obj = {
    "001" : 0, "003" : 1, "004" : 2, "005" : 3, "006" : 4, "007" : 5, "008" : 6,
    "009" : 7
  }
  
  
  const temp_watches = [{"id" : "001" , "Name" : "Lorem Epsum", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "2500" , "img" : img1 },
  {"id" : "003" , "Name" : "mollitia qui ", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "25200" , "img" : img4 },
  {"id" : "004" , "Name" : "dolore sunt error ", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "28700" , "img" : img5 },
  {"id" : "005" , "Name" : "sed inventore ", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "5000" , "img" : img6 },
  {"id" : "006" , "Name" : "voluptate! Illo", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "5500" , "img" : img7 },
  {"id" : "007" , "Name" : "natus beatae illum", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "7699" , "img" : img8 },
  {"id" : "008" , "Name" : "Non blanditiis sed in", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "3500" , "img" : img3 },
  {"id" : "009" , "Name" : "voluptate! Illo", "Disc" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Price" : "8456" , "img" : img9 },
  
  ]


const CartItems = ({ item , setSelected , setTotalPrice , totalPrice , addedItems , set_addedItems  }) => {

  const [ myCart , set_myCart ] = useCartContext()

  const [ quantity , setQuantity ] = useState(1)
  const [ total , setTotal ] = useState(Number(temp_watches[watches_obj[item]].Price))


  useEffect(() => {
      const tempTotal = Number(temp_watches[watches_obj[item]].Price) * quantity
      setTotal(tempTotal)
  }, [quantity])


  useEffect(() => {

    if(addedItems.length >= myCart.length ) return
    
    if(addedItems.length=== 0) { 
      set_addedItems([temp_watches[watches_obj[item]].id ]) 
   //   setTotalPrice(Number(temp_watches[watches_obj[item]].Price))
    }
    else {
      set_addedItems(prev => [ temp_watches[watches_obj[item]].id ,...prev ])
    }
    console.log("total price " , totalPrice)

    setTotalPrice(prev => prev + Number(temp_watches[watches_obj[item]].Price))
  },[])

  const changeQuantity = (type) => {
console.log( Number(temp_watches[watches_obj[item]].Price))
    if(type === "increment") 
      { if(quantity < 50) {  
          setQuantity(prev => ++prev)
          setSelected(prev => ++prev)
          setTotalPrice(prev => prev + Number(temp_watches[watches_obj[item]].Price))
        }  
      }
    else {  if(quantity > 1) {  
        setQuantity(prev => --prev)
        setSelected(prev => --prev)
        setTotalPrice(prev => prev - Number(temp_watches[watches_obj[item]].Price))
    } }

  }


  return (
    <main className="w-full flex items-center justify-center">
        <article className="w-[40%] relative">
            <section className="my-8">
                <img src={temp_watches[watches_obj[item]].img} className="w-[50%] ml-[25%]" />
                <h4 className="text-center">{temp_watches[watches_obj[item]].Name}</h4>
                <p className="text-center text-sm">Color - Red</p>
                <p className="text-center text-xs">Product Code - {temp_watches[watches_obj[item]].id}</p>
            </section>

            <button className="hover:opacity-70 absolute top-0 " onClick={() => {
              setTotalPrice(prev => prev - total)
              setSelected(prev => prev - quantity)
              removeFromCart(item , myCart , set_myCart)} }>
              <svg class="fill-black hover:fill-red-500" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8s8-3.582 8-8s-3.581-8-8-8zm3.707 10.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0a.999.999 0 0 1 0-1.414L10.586 12L8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13.414 12l2.293 2.293z"/></svg>
            </button>

        </article>

        <article className="w-[20%]">
           <section className="flex my-8 text-center items-center justify-center">
             <button className="px-4 text-xl font-bold" onClick={() => changeQuantity("decrement")}>-</button>
             <p className="w-[40%] text-center border border-gray-300 px-4 ">{quantity}</p>
             <button className="px-4 text-xl font-bold" onClick={() => changeQuantity("increment")}>+</button>
            </section>
        </article>

        <p  className="w-[20%] text-center">{temp_watches[watches_obj[item]].Price}  <span className="text-xm">Birr</span></p>
            
        <p className="w-[20%] text-center">{total} <span className="text-xs">Birr</span></p>

    </main>
  )
}

export default CartItems