interface ProductSectionProps {
  title: string
  subtitle: string
  description: string
  ctaMain: string
  ctaSecondary: string
  background: string
  image: string
  compact?: boolean
}

export default function ProductSection({
  title,
  subtitle,
  description,
  ctaMain,
  ctaSecondary,
  background,
  image,
  compact = false
}: ProductSectionProps) {
  const height = compact ? 'min-h-[500px]' : 'min-h-[600px]'
  const titleSize = compact ? 'text-3xl md:text-4xl' : 'text-4xl md:text-6xl'
  const subtitleSize = compact ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'

  return (
    <section className={`${background} ${height} flex items-center justify-center text-center px-4 relative overflow-hidden`}>
      <div className="max-w-4xl mx-auto z-10 relative">
        <h2 className={`${titleSize} font-bold mb-2 leading-tight`}>
          {title}
        </h2>
        <p className={`${subtitleSize} mb-2 font-medium`}>
          {subtitle}
        </p>
        {description && (
          <p className="text-lg mb-6 opacity-80">
            {description}
          </p>
        )}
        <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center mb-8">
          <a
            href="#"
            className={`inline-block px-6 py-2 rounded-full text-lg font-medium transition-all duration-200 ${
              background.includes('black') || background.includes('gray-900')
                ? 'text-blue-400 hover:text-blue-300'
                : 'text-blue-600 hover:text-blue-800'
            }`}
          >
            {ctaMain}
          </a>
          <a
            href="#"
            className={`inline-block px-6 py-2 rounded-full text-lg font-medium transition-all duration-200 ${
              background.includes('black') || background.includes('gray-900')
                ? 'text-blue-400 hover:text-blue-300'
                : 'text-blue-600 hover:text-blue-800'
            }`}
          >
            {ctaSecondary}
          </a>
        </div>
        {!compact && (
          <div className="mt-8">
            <img
              src={image}
              alt={title}
              className="mx-auto rounded-lg max-w-2xl w-full transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
      </div>
      
      {compact && (
        <div className="absolute inset-0 flex items-end justify-center p-8">
          <img
            src={image}
            alt={title}
            className="max-w-xs w-full transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
    </section>
  )
}