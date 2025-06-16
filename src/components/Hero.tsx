import { ArrowDown, GraduationCap, Sparkles } from "lucide-react"

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden">
      {/* Animated background elements with pastel glows */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-rose-400/20 rounded-full animate-pulse shadow-lg shadow-rose-400/30"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-lavender-400/20 rounded-full animate-bounce delay-300 shadow-lg shadow-lavender-400/30"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-sky-400/20 rounded-full animate-pulse delay-700 shadow-lg shadow-sky-400/30"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-mint-400/15 rounded-full animate-bounce delay-1000 shadow-lg shadow-mint-400/20"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-peach-400/10 rounded-full animate-float shadow-lg shadow-peach-400/20"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900/80"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <GraduationCap className="h-24 w-24 mx-auto text-rose-400 mb-6 animate-bounce drop-shadow-lg" />
              <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-lavender-400 animate-spin drop-shadow-lg" />
              <div className="absolute inset-0 bg-rose-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>

            <h1 className="-mt-8 py-3 text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-300 via-lavender-300 to-sky-300 bg-clip-text text-transparent animate-slide-up drop-shadow-2xl">
              Tracing my Path
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-rose-400 to-lavender-400 mx-auto mb-6 rounded-full shadow-lg shadow-rose-400/50"></div>
            <h2 className="text-2xl md:text-3xl font-semibold text-rose-300 mb-8 animate-slide-up delay-200 drop-shadow-lg">
              My BSEDSS Journey
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-400">
              A digital portfolio documenting my transformative experience as a Bachelor of Secondary Education - Social
              Studies student at Polytechnic University of the Philippines
            </p>
          </div>
          {/* Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16 animate-fade-in delay-600">
            {[
              {
                title: "Academic Excellence",
                description: "Dedicated to learning and growing as a future educator",
                icon: "🎓",
                gradient: "from-rose-500/20 to-peach-500/20",
                border: "border-rose-400/30",
                glow: "shadow-rose-400/20",
              },
              {
                title: "Active Participation",
                description: "Engaged in curricular and extra-curricular activities",
                icon: "🤝",
                gradient: "from-lavender-500/20 to-sky-500/20",
                border: "border-lavender-400/30",
                glow: "shadow-lavender-400/20",
              },
              {
                title: "University Life",
                description: "Everyday experiences, social interactions, and personal moments as a university student",
                icon: "🏫",
                gradient: "from-mint-500/20 to-sage-500/20",
                border: "border-mint-400/30",
                glow: "shadow-mint-400/20",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group bg-gray-800/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-5 md:p-8 border-2 ${item.border} hover:border-rose-400/50 transition-all duration-300 hover:shadow-xl ${item.glow} hover:scale-105 transform`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white group-hover:text-rose-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors">{item.description}</p>
                  <div
                    className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${item.gradient.replace("/20", "")} transition-all duration-500 mt-3 md:mt-4 rounded-full`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center animate-bounce delay-1000">
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-xl shadow-rose-400/30 hover:shadow-2xl hover:shadow-rose-400/40 transition-all duration-300 hover:scale-110 border border-rose-400/30">
              <ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-rose-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
