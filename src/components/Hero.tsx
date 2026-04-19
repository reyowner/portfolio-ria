import {
  ArrowDown,
  Briefcase,
  Download,
  GraduationCap,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-mint-500/20 to-sky-500/20 rounded-full px-4 py-2 border border-mint-400/30 mb-5 backdrop-blur-sm">
              <Briefcase className="h-4 w-4 text-mint-400 mr-2" />
              <span className="text-sm text-mint-300 font-semibold">
                Available for Employment
              </span>
            </div>

            <div className="relative inline-block mb-4">
              <GraduationCap className="h-14 w-14 text-rose-400 drop-shadow-lg" />
              <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-lavender-400 animate-spin drop-shadow-lg" />
              <div className="absolute inset-0 bg-rose-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-300 via-lavender-300 to-sky-300 bg-clip-text text-transparent drop-shadow-2xl">
              Maria Frances S. Albano
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold text-rose-300 mb-5 drop-shadow-lg">
              Graduating BSEd Social Studies Student, PUP
            </h2>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
              I am a 22-year-old graduating student from the Polytechnic
              University of the Philippines, taking up Bachelor of Secondary
              Education major in Social Studies. I completed my teaching
              internship at San Juan National High School, where I gained
              hands-on experience in lesson planning, classroom management, and
              learner engagement.
            </p>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              As an aspiring educator, I am passionate about creating meaningful
              and inclusive learning experiences that inspire students to think
              critically and connect lessons to real-life contexts.
            </p>

            <div className="flex flex-wrap gap-3 mb-5">
              <a
                href="/resume-cv/ALBANO%20-%20Updated%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500/20 to-peach-500/20 border border-rose-400/30 text-sm text-white hover:shadow-lg hover:shadow-rose-500/20 transition-all duration-300"
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </a>
              <a
                href="/resume-cv/ALBANO%20-%20Curriculum%20Vitae.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-lavender-500/20 to-sky-500/20 border border-lavender-400/30 text-sm text-white hover:shadow-lg hover:shadow-lavender-500/20 transition-all duration-300"
              >
                <Download className="h-4 w-4 mr-2" />
                Curriculum Vitae
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:07mariafrancesalbano@gmail.com"
                className="inline-flex items-center px-3 py-2 rounded-lg bg-gray-800/70 border border-gray-700/50 text-gray-300 hover:text-white hover:border-rose-400/40 transition-all duration-300"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </a>
              <a
                href="tel:+639765307222"
                className="inline-flex items-center px-3 py-2 rounded-lg bg-gray-800/70 border border-gray-700/50 text-gray-300 hover:text-white hover:border-sky-400/40 transition-all duration-300"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call
              </a>
              <a
                href="https://www.linkedin.com/in/maria-frances-albano-93700826b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 rounded-lg bg-gray-800/70 border border-gray-700/50 text-gray-300 hover:text-white hover:border-lavender-400/40 transition-all duration-300"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="animate-fade-in delay-300">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                "/home/Home1.jpg",
                "/home/Home2.jpg",
                "/home/Home4.jpg",
                "/home/Home3.jpg",
              ].map((photo, index) => (
                <div
                  key={photo}
                  className="relative rounded-2xl overflow-hidden border border-gray-700/50 bg-gray-800/70 shadow-xl shadow-rose-500/10"
                >
                  <img
                    src={photo}
                    alt={`Maria portfolio photo ${index + 1}`}
                    className={`w-full object-cover ${
                      index % 2 === 0 ? "h-52 md:h-60" : "h-52 md:h-60"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 animate-bounce delay-1000">
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-xl shadow-rose-400/30 hover:shadow-2xl hover:shadow-rose-400/40 transition-all duration-300 hover:scale-110 border border-rose-400/30">
            <ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-rose-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
