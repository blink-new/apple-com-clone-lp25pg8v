import { Play } from 'lucide-react'

export default function AppleTVSection() {
  const shows = [
    {
      title: "Foundation",
      description: "Sci-Fi • New season.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "Ted Lasso",
      description: "Comedy • Kindness makes a comeback.",
      image: "https://images.unsplash.com/photo-1489599731-06a8f63e7d91?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "Severance",
      description: "Thriller • A workplace thriller.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c29a8e?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "The Morning Show",
      description: "Drama • Live your best lie.",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=300&h=200&fit=crop&crop=center"
    }
  ]

  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Apple TV+</h2>
          <p className="text-xl text-gray-300">
            Award-winning series and films from Apple TV+
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shows.map((show, index) => (
            <div
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Play className="h-6 w-6 text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                    Stream now
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-1">{show.title}</h3>
              <p className="text-sm text-gray-400">{show.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Try Apple TV+ free for 7 days
          </a>
        </div>
      </div>
    </section>
  )
}