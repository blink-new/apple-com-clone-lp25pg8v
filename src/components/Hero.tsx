export default function Hero() {
  return (
    <section className="bg-blue-50 min-h-[600px] flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
            Education
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Buy Mac or iPad for college
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-2">
          with education savings
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Choose AirPods or an eligible accessory
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Shop
          </a>
        </div>
        <div className="mt-12">
          <img
            src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800&h=400&fit=crop&crop=center"
            alt="MacBook and iPad for education"
            className="mx-auto rounded-lg shadow-2xl max-w-3xl w-full"
          />
        </div>
      </div>
    </section>
  )
}