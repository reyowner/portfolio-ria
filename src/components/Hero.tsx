
import { ArrowDown, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="mb-8">
            <GraduationCap className="h-20 w-20 mx-auto text-orange-400 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              My BSED-SS Journey
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              A digital portfolio documenting my transformative experience as a Bachelor of Secondary Education - Social Studies student at PUP
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Academic Excellence</h3>
              <p className="text-blue-100">Dedicated to learning and growing as a future educator</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Active Participation</h3>
              <p className="text-blue-100">Engaged in curricular and extra-curricular activities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Future Educator</h3>
              <p className="text-blue-100">Preparing to make a positive impact in education</p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 animate-bounce text-orange-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
