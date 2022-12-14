
import img1 from "../media/watches/1.jpg"
import img2 from "../media/watches/2.jpg"
import img3 from "../media/watches/9.jpg"
import img4 from "../media/watches/8.jpg"
import img9 from "../media/watches/7.jpg"
import img5 from "../media/watches/6.jpg"
import img6 from "../media/watches/5.jpg"
import img7 from "../media/watches/4.jpg"
import img8 from "../media/watches/3.jpg"


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

const Women = () => {
  return (
    <main className="w-3/4 h-[100vh] overflow-y-scroll pb-48">
    <p className="w-[80%] ml-[10%] leading-8 font-nav-main my-16 font-bold text-center">For the confident and powerful woman.  </p>
     <h1 className="text-5xl font-serif font-bold my-16 w-[30%] ml-[69.5%] py-2 px-1 text-white text-end  bg-black">Women's</h1>

     <article className="grid gap-x-4 gap-y-20 grid-cols-3 w-[96%] ml-[2%]">
        { temp_watches.map(item => (
            <section key={item.id} className="border-2 border-black h-[61vh] hover:opacity-90 relative">
                <div>
                    <img className="h-[42vh] w-full" src={item.img} alt={item.Disc} />
                </div>
                <div>
                    <h3 className="font-bold text-center capitalize bg-black text-white mb-2  font-nav-main">{item.Name}</h3>
                    <p className="h-[19vh] px-2">{item.Disc}</p>
                </div>
              
                    <p className="text-end text-xl font-extrabold absolute bottom-0 right-1">{item.Price} Birr</p>
                    <button className="border border-black self-end w-[40%] capitalize bg-black text-white absolute top-0 right-0">add to cart <span>+</span></button>
             
            </section>
        ))}
     </article>
    </main>
  )
}

export default Women