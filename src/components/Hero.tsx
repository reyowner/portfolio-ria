import { ArrowDown, GraduationCap } from "lucide-react"

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 text-gray-800">
      <div className="absolute inset-0 bg-white opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="mb-8">
            <GraduationCap className="h-20 w-20 mx-auto text-purple-500 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tracing my Path: My BSEDSS Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto text-center">
              A digital portfolio documenting my transformative experience as a Bachelor of Secondary Education - Social
              Studies student at Polytechnic University of the Philippines
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Academic Excellence</h3>
              <p className="text-gray-600">Dedicated to learning and growing as a future educator</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Active Participation</h3>
              <p className="text-gray-600">Engaged in curricular and extra-curricular activities</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">University Life</h3>
              <p className="text-gray-600">Everyday experiences, social interactions, and personal moments as a university student.</p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 animate-bounce text-purple-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
