
import img11 from "../media/watches/11.jpg"
import img12 from "../media/watches/12.jpg"


const Testimonial = () => {
  return (
    <article className="h-[70vh] bg-gray-200 mt-[50vh]">
        <button>left</button>
        <section>
            <img src={img11} />
            <img src={img12} />
        </section>
        <button>right</button>
    </article>
  )
}

export default Testimonial