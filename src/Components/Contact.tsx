

const Contact = () => {
  return (
     <section className="w-full bg-white py-10">
      {/* Header */}
      <div className="bg-gray-200 py-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <form className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Type message"
            rows={6}
            className="border border-gray-300 rounded-md p-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-8 rounded-md transition-colors duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact