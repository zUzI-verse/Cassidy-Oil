import { ThumbnailA, ThumbnailB, ThumbnailC, ThumbnailD } from "../assets";

type NewsItem = {
  image: string;
  title: string;
  description: string;
};

const news: NewsItem[] = [
  {
    image: `${ThumbnailA}`,
    title: "Don’t destroy greenery and don’t spoil scenery",
    description:
      "At Cassidy energy, we’re dedicated to producing only the finest engine oils. We use only the highest-quality ingredients and state-of-the-art production...",
  },
  {
    image: `${ThumbnailB}`,
    title: "Is climate change happening faster than expected?",
    description:
      "At Cassidy energy, we’re dedicated to producing only the finest engine oils. We use only the highest-quality ingredients and state-of-the-art production...",
  },
  {
    image:`${ThumbnailC}`,
    title: "Top 10 facts about wind farms you didn’t know",
    description:
      "At Cassidy energy, we’re dedicated to producing only the finest engine oils. We use only the highest-quality ingredients and state-of-the-art production...",
  },
  {
    image:`${ThumbnailD}`,
    title: "Our goal is to make water available for everyone",
    description:
      "At Cassidy energy, we’re dedicated to producing only the finest engine oils. We use only the highest-quality ingredients and state-of-the-art production...",
  },
];

const NewsSection = () => {
  return (
     <section className="px-8 py-16 max-w-7xl mx-auto">
      <div className="flex items-center gap-5 mb-4  justify-around">
         <h2 className="text-2xl  md:text-3xl font-bold mb-10">Read Our News</h2>
        <div className="border-0.5 w-200  h-0.5  text-[#E5E5E5]  mb-9 bg-[#E5E5E5]"></div>
      </div>
       

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-white  overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-45 rounded-lg object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewsSection