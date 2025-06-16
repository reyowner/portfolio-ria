import Navigation from "../components/Navigation"
import { School, Coffee, Users, Star } from "lucide-react"

const UniversityLife = () => {
  const lifeExperiences = [
    {
      title: "Campus Life During Pandemic",
      description:
        "Adapting to online learning while maintaining connections with classmates through virtual study groups and online social activities.",
      image: "photo-1581091226825-a6a2a5aee158",
      caption: "Virtual class session with my Social Studies methods course",
    },
    {
      title: "Return to Face-to-Face Classes",
      description:
        "The joy and challenges of returning to campus after months of online learning. Reconnecting with professors and classmates in person.",
      image: "photo-1519389950473-47ba0277781c",
      caption: "First day back on campus - excited to be learning together again",
    },
    {
      title: "Library Study Sessions",
      description:
        "Countless hours spent in the PUP library, researching for papers, preparing for exams, and collaborating with study groups.",
      image: "photo-1498050108023-c5249f4df085",
      caption: "Late night study session in the university library preparing for comprehensive exams",
    },
    {
      title: "Campus Events and Celebrations",
      description:
        "Participating in university-wide celebrations, academic conferences, and cultural events that enriched my college experience.",
      image: "photo-1721322800607-8c38375eef04",
      caption: "Attending the annual Education Week celebration in the university auditorium",
    },
  ]

  const memorable_moments = [
    {
      title: "First Day Jitters",
      description:
        "I still remember my first day at PUP - feeling nervous but excited to begin my journey as a future educator. The campus seemed huge and intimidating, but the warm welcome from seniors made me feel at home.",
    },
    {
      title: "Finding My Study Group",
      description:
        "Meeting my closest college friends during our Introduction to Teaching course. We formed a study group that became my support system throughout my academic journey.",
    },
    {
      title: "First Teaching Demo",
      description:
        "The nervousness and excitement of conducting my first teaching demonstration in Methods of Teaching Social Studies. Despite my shaky hands, I realized this is truly my calling.",
    },
    {
      title: "Research Conference Presentation",
      description:
        "Presenting my research on innovative teaching methods at the college's student research conference. It was nerve-wracking but incredibly rewarding to share my findings with faculty and peers.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 via-slate-800 to-gray-800 text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-16 md:w-20 h-16 md:h-20 bg-sky-400/20 rounded-full animate-pulse shadow-lg shadow-sky-400/30"></div>
          <div className="absolute bottom-10 right-10 w-12 md:w-16 h-12 md:h-16 bg-lavender-400/20 rounded-full animate-bounce shadow-lg shadow-lavender-400/30"></div>
          <div className="absolute top-1/2 left-1/3 w-8 md:w-12 h-8 md:h-12 bg-mint-400/20 rounded-full animate-pulse delay-700 shadow-lg shadow-mint-400/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <School className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 md:mb-6 text-sky-400 drop-shadow-lg" />
            <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">University Life Experiences</h1>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
              The memorable moments, friendships, and experiences that have shaped my college journey at PUP
            </p>
          </div>
        </div>
      </div>

      {/* Life Experiences Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <Coffee className="h-8 w-8 md:h-12 md:w-12 mx-auto text-lavender-400 mb-3 md:mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Campus Life Moments</h2>
          <p className="text-base md:text-lg text-gray-300">Visual journey through my university experiences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {lifeExperiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl shadow-sky-500/10 overflow-hidden hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 border border-gray-700/50 hover:border-sky-400/30"
            >
              <img
                src={`https://images.unsplash.com/${experience.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                alt={experience.title}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{experience.title}</h3>
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed">{experience.description}</p>
                <p className="text-xs md:text-sm text-gray-400 italic border-l-2 border-sky-400/30 pl-3">{experience.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Memorable Moments */}
      <div className="bg-gray-800/50 backdrop-blur-sm py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <Star className="h-8 w-8 md:h-12 md:w-12 mx-auto text-rose-400 mb-3 md:mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Memorable Moments</h2>
            <p className="text-base md:text-lg text-gray-300">Special memories that will stay with me forever</p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {memorable_moments.map((moment, index) => (
              <div
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 border border-gray-700/50 hover:border-rose-400/30"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{moment.title}</h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">{moment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* University Culture & Values */}
      <div className="bg-gray-900 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <Users className="h-8 w-8 md:h-12 md:w-12 mx-auto text-mint-400 mb-3 md:mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">PUP Values I've Embraced</h2>
            <p className="text-base md:text-lg text-gray-300">The institutional values that have shaped my character</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                value: "Excellence",
                description:
                  "Striving for academic excellence in all my coursework and maintaining high standards in everything I do.",
                example:
                  "Consistently earning high grades and seeking to exceed expectations in assignments and projects.",
                color: "rose",
              },
              {
                value: "Integrity",
                description: "Upholding honesty and ethical behavior in all academic and personal endeavors.",
                example: "Always citing sources properly in research and being truthful in all academic work.",
                color: "lavender",
              },
              {
                value: "Nationalism",
                description:
                  "Developing love for country through studying Philippine history and understanding our cultural heritage.",
                example: "Creating lesson plans that highlight Filipino achievements and promoting national pride.",
                color: "sky",
              },
              {
                value: "Spirituality",
                description: "Recognizing the importance of spiritual growth alongside academic development.",
                example: "Participating in campus ministry activities and maintaining personal spiritual practices.",
                color: "mint",
              },
              {
                value: "Social Responsibility",
                description: "Understanding my role as a future educator in serving the community and society.",
                example: "Volunteering in community teaching programs and environmental conservation efforts.",
                color: "peach",
              },
              {
                value: "Innovation",
                description: "Embracing new teaching methods and technologies to enhance learning experiences.",
                example: "Learning to use digital tools and innovative pedagogical approaches in my practice teaching.",
                color: "sage",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:shadow-${item.color}-500/20 transition-all duration-300 border border-gray-700/50 hover:border-${item.color}-400/30 hover:scale-105`}
              >
                <h3 className={`text-lg md:text-xl font-bold text-${item.color}-300 mb-2 md:mb-3`}>{item.value}</h3>
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed">{item.description}</p>
                <div
                  className={`bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-400/20 p-3 rounded-lg border border-${item.color}-400/30 backdrop-blur-sm`}
                >
                  <p className="text-xs md:text-sm text-gray-300">
                    <strong className={`text-${item.color}-300`}>How I apply it:</strong> {item.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniversityLife
