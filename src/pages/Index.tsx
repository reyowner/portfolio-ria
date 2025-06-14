import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import { Link } from "react-router-dom"
import { BookOpen, Users, School, FileText, Heart, Calendar, ArrowRight, GraduationCap } from "lucide-react"

const Index = () => {
  const portfolioSections = [
    {
      title: "Academic Journey",
      description: "From application to enrollment and through my coursework in the BSED-SS program",
      icon: BookOpen,
      path: "/academic",
      image: "/academic-journey.png",
      features: ["Application Process", "Enrollment Experience", "Course Progression", "Model Professors"],
    },
    {
      title: "Activities & Involvement",
      description: "Co-curricular and extra-curricular activities that enriched my university experience",
      icon: Users,
      path: "/activities",
      color: "from-green-200 via-teal-200 to-emerald-200",
      features: ["Student Organizations", "Community Service", "Leadership Roles", "Skills Development"],
    },
    {
      title: "University Life",
      description: "Memorable moments and experiences that shaped my college journey",
      icon: School,
      path: "/university-life",
      color: "from-blue-200 via-indigo-200 to-purple-200",
      features: ["Campus Experiences", "Friendships", "University Values", "Personal Growth"],
    },
    {
      title: "Grades & Feedback",
      description: "Academic performance records and constructive feedback from professors",
      icon: FileText,
      path: "/grades",
      color: "from-pink-200 to-purple-200",
      features: ["Grade Records", "Professor Feedback", "Sample Papers", "Academic Goals"],
    },
    {
      title: "My Story",
      description: "Personal narrative of challenges overcome and future aspirations",
      icon: Heart,
      path: "/story",
      color: "from-pink-200 via-purple-200 to-pink-100",
      features: ["Personal Challenges", "Growth & Learning", "Future Plans", "Teaching Vision"],
    },
  ]

  const achievements = [
    { number: "3.85", label: "Current GPA", description: "Consistent academic excellence" },
    { number: "15+", label: "Courses Completed", description: "Core education and social studies subjects" },
    { number: "5+", label: "Activities Joined", description: "Co-curricular and extra-curricular involvement" },
    { number: "25+", label: "Students Tutored", description: "Through community outreach programs" },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Welcome to my E-Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            This digital portfolio chronicles my transformative experience as a Bachelor of Secondary Education - Social
            Studies student at the Polytechnic University of the Philippines. From academic challenges to personal
            growth, from classroom learning to community service, every moment has shaped me into the educator I'm
            becoming.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-l-4 border-vibrant"
            >
              <div className="text-3xl font-bold text-vibrant mb-2">{achievement.number}</div>
              <div className="text-lg font-semibold text-white mb-1">{achievement.label}</div>
              <div className="text-gray-400 text-sm">{achievement.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Sections */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GraduationCap className="h-16 w-16 mx-auto text-vibrant mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Explore My Portfolio</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the comprehensive documentation of my educational journey through these key sections
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {portfolioSections.map((section, index) => {
              const Icon = section.icon
              return (
                <div
                  key={index}
                  className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group border border-gray-700"
                >
                  <div 
                    className={`p-8 text-purple-800 relative ${section.image ? 'bg-cover bg-center' : `bg-gradient-to-r ${section.color}`}`}
                    style={section.image ? { backgroundImage: `url(${section.image})` } : {}}
                  >
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                      <Icon className="h-12 w-12 mb-4" />
                      <h3 className="text-2xl text-black font-bold mb-3">{section.title}</h3>
                      <p className="text-black/90">{section.description}</p>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {section.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <Calendar className="h-4 w-4 text-coral mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={section.path}
                      className="inline-flex items-center px-6 py-3 bg-vibrant text-white rounded-lg hover:bg-salmon transition-colors group-hover:bg-coral"
                    >
                      Explore Section
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 text-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">My Mission as a Future Educator</h2>
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-8 border border-purple-200">
            <p className="text-xl leading-relaxed mb-6 text-gray-700">
              "To inspire and empower students through engaging Social Studies education that connects the past with the
              present, fostering critical thinking, cultural awareness, and active citizenship."
            </p>
            <p className="text-lg text-gray-600">
              Every experience documented in this portfolio has contributed to this mission, preparing me to make a
              meaningful difference in the lives of my future students.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Take a journey through my university experience and discover how each challenge, achievement, and moment has
            shaped my path to becoming an educator.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/academic"
              className="inline-flex items-center px-8 py-4 bg-vibrant text-white rounded-lg hover:bg-salmon transition-colors text-lg font-semibold"
            >
              Start with Academic Journey
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/story"
              className="inline-flex items-center px-8 py-4 bg-coral text-white rounded-lg hover:bg-golden transition-colors text-lg font-semibold"
            >
              Read My Story
              <Heart className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
