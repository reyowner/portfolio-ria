import { Calendar, ChevronRight } from "lucide-react"

interface TimelineCardProps {
  title: string
  date: string
  description: string
  image?: string
  imageCaption?: string
}

const TimelineCard = ({ title, date, description, image, imageCaption }: TimelineCardProps) => {
  const isUnsplashImage = image?.startsWith("photo-")
  const imageSrc = isUnsplashImage
    ? `https://images.unsplash.com/${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`
    : image

  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-5 h-5 bg-gradient-to-r from-rose-400 to-lavender-400 rounded-full border-4 border-gray-900 shadow-lg shadow-rose-400/50 group-hover:scale-125 transition-transform duration-300 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-300 to-lavender-300 rounded-full animate-ping opacity-30"></div>
      </div>

      {/* Timeline line */}
      <div className="absolute left-2 top-5 w-0.5 h-full bg-gradient-to-b from-rose-400/60 to-transparent"></div>

      <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-xl shadow-rose-500/10 p-8 ml-8 hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-500 border border-gray-700/50 hover:border-rose-400/30 group-hover:transform group-hover:scale-[1.02]">
        {/* Header */}
        <div className="flex items-center mb-4 group-hover:mb-6 transition-all duration-300">
          <div className="flex items-center bg-gradient-to-r from-rose-500/20 to-lavender-500/20 rounded-full px-4 py-2 border border-rose-400/30 backdrop-blur-sm">
            <Calendar className="h-5 w-5 text-rose-400 mr-2" />
            <span className="text-rose-300 font-semibold text-sm">{date}</span>
          </div>
        </div>

        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rose-300 transition-colors duration-300">
            {title}
          </h3>
          <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-rose-400 group-hover:translate-x-1 transition-all duration-300" />
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>

        {image && (
          <div className="mt-6 group-hover:mt-8 transition-all duration-300">
            <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-rose-500/10 group-hover:shadow-xl group-hover:shadow-rose-500/20 transition-shadow duration-300 border border-gray-700/50">
              <img
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {imageCaption && (
              <p className="text-sm text-gray-400 mt-3 italic pl-4 border-l-2 border-rose-400/30 group-hover:border-rose-400/50 transition-colors duration-300">
                {imageCaption}
              </p>
            )}
          </div>
        )}

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-lavender-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  )
}

export default TimelineCard
