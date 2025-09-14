
const Subscription = () => {
  return (
     <section className=" text-white py-16 px-6  md:rounded-lg bg-cover  md:mx-10 mb-10 bg-center" style={{ backgroundImage: `url(/assets/subscribe-image.png)` }}>
        <div className="max-w-3xl mx-auto text-center ">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to get <br/> the latest updates
          </h3>
          <form className="flex  justify-center mx-auto   gap-4 mt-6 w-2/3" >
          <div className=" md:flex md:w-full ">
             <input
              type="email"
              placeholder="Your email"
              className="flex-1 w-full  h-[56px] px-4 py-5 mb-6 rounded-md border border-white text-white bg-secondary focus:outline-none mr-3"
            />
            <button
              type="submit"
              className=" h-[56px]  px-[35px] py-[11px] md:w-[141px] w-full bg-primary font-semibold rounded-sm shadow hover:bg-orange-400 text-[#152C41]"
            > Subscribe
            </button>
          </div>         
          </form>
        </div>
      </section>

  )
}

export default Subscription;