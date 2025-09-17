

const Contact = () => {
  return (
     <section className="w-full bg-white">
      {/* Header */}
      <div className="bg-secondaryb py-16 text-center">
        <h1 className="text-4xl font-bold text-[#777777] ">Contact Us</h1>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <form className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none bg-secondaryb"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none bg-secondaryb"
            />
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none bg-secondaryb"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none bg-secondaryb"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Type message"
            rows={6}
            className="border border-gray-300 rounded-md p-3 w-full resize-none focus:outline-none  bg-secondaryb"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="bg-primary hover:bg-primaryb text-white font-semibold py-3 px-8 rounded-md mb-30 w-full md:w-[400px] cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact