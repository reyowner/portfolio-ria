"use client"

import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import { Link } from "react-router-dom"
import {
  BookOpen,
  Users,
  School,
  FileText,
  Heart,
  ArrowRight,
  GraduationCap,
  Star,
  TrendingUp,
  Award,
} from "lucide-react"
import { useState, useEffect } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const Index = () => {
  const [portfolioPage, setPortfolioPage] = useState(1)
  const [portfolioItemsPerPage, setPortfolioItemsPerPage] = useState(window.innerWidth >= 1024 ? 2 : 1)

  useEffect(() => {
    const handleResize = () => {
      setPortfolioItemsPerPage(window.innerWidth >= 1024 ? 2 : 1)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const portfolioSections = [
    {
      title: "Academic Journey",
      description: "From application to enrollment and through my coursework in the BSED-SS program",
      icon: BookOpen,
      path: "/academic",
      image: "/academic-journey.png",
      features: ["Application Process", "Enrollment Experience", "Course Progression", "Model Professors"],
      gradient: "from-peach-500/20 to-coral-500/20",
      iconBg: "from-peach-400 to-coral-400",
      borderColor: "border-peach-400/30",
      shadowColor: "shadow-peach-400/20",
    },
    {
      title: "Activities & Involvement",
      description: "Co-curricular and extra-curricular activities that enriched my university experience",
      icon: Users,
      path: "/activities",
      features: ["Student Organizations", "Community Service", "Leadership Roles", "Skills Development"],
      gradient: "from-mint-500/20 to-sage-500/20",
      iconBg: "from-mint-400 to-sage-400",
      borderColor: "border-mint-400/30",
      shadowColor: "shadow-mint-400/20",
    },
    {
      title: "University Life",
      description: "Memorable moments and experiences that shaped my college journey",
      icon: School,
      path: "/university-life",
      features: ["Campus Experiences", "Friendships", "University Values", "Personal Growth"],
      gradient: "from-sky-500/20 to-lavender-500/20",
      iconBg: "from-sky-400 to-lavender-400",
      borderColor: "border-sky-400/30",
      shadowColor: "shadow-sky-400/20",
    },
    {
      title: "Grades",
      description: "Academic performance records and constructive feedback from professors",
      icon: FileText,
      path: "/grades",
      features: ["Grade Records", "Professor Feedback", "Sample Papers", "Academic Goals"],
      gradient: "from-lavender-500/20 to-lilac-500/20",
      iconBg: "from-lavender-400 to-lilac-400",
      borderColor: "border-lavender-400/30",
      shadowColor: "shadow-lavender-400/20",
    },
    {
      title: "My Story",
      description: "Personal narrative of challenges overcome and future aspirations",
      icon: Heart,
      path: "/story",
      features: ["Personal Challenges", "Growth & Learning", "Future Plans", "Teaching Vision"],
      gradient: "from-rose-500/20 to-pink-500/20",
      iconBg: "from-rose-400 to-pink-400",
      borderColor: "border-rose-400/30",
      shadowColor: "shadow-rose-400/20",
    },
  ]

  const achievements = [
    {
      number: "TBA",
      label: "Current GPA",
      description: "Consistent academic excellence",
      icon: Award,
      gradient: "from-peach-500/20 to-coral-500/20",
      iconColor: "text-coral-400",
      borderColor: "border-coral-400/30",
      shadowColor: "shadow-coral-400/20",
    },
    {
      number: "15+",
      label: "Courses Completed",
      description: "Core education and social studies subjects",
      icon: BookOpen,
      gradient: "from-sky-500/20 to-lavender-500/20",
      iconColor: "text-lavender-400",
      borderColor: "border-lavender-400/30",
      shadowColor: "shadow-lavender-400/20",
    },
    {
      number: "5+",
      label: "Activities Joined",
      description: "Overall curricular, activities and event involvement",
      icon: Users,
      gradient: "from-mint-500/20 to-sage-500/20",
      iconColor: "text-sage-400",
      borderColor: "border-sage-400/30",
      shadowColor: "shadow-sage-400/20",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-rose-500/20 to-lavender-500/20 rounded-full px-4 md:px-6 py-2 md:py-3 border border-rose-400/30 mb-6 md:mb-8 backdrop-blur-sm">
            <Star className="h-4 w-4 md:h-5 md:w-5 text-rose-400 mr-2" />
            <span className="text-sm md:text-base text-rose-300 font-semibold">Welcome to my Digital Portfolio</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 bg-gradient-to-r from-rose-300 to-lavender-300 bg-clip-text text-transparent">
            My Educational Journey
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-rose-400 to-lavender-400 mx-auto mb-6 md:mb-8 rounded-full shadow-lg shadow-rose-400/50"></div>

          <p className="text-base md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            This digital portfolio chronicles my transformative experience as a Bachelor of Secondary Education - Social
            Studies student at the Polytechnic University of the Philippines. From academic challenges to personal
            growth, from classroom learning to community service, every moment has shaped me into the educator I'm
            becoming.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className={`group bg-gray-800/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl ${achievement.shadowColor} p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-500 border ${achievement.borderColor} hover:border-rose-400/50 hover:transform hover:scale-105`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-r ${achievement.gradient} mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md border border-gray-700/50`}
                >
                  <Icon className={`h-6 w-6 md:h-8 md:w-8 ${achievement.iconColor}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-rose-300 transition-colors duration-300">
                  {achievement.number}
                </div>
                <div className="text-base md:text-lg font-semibold text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                  {achievement.label}
                </div>
                <div className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {achievement.description}
                </div>
                <div className="w-0 h-1 bg-gradient-to-r from-rose-400 to-lavender-400 group-hover:w-full transition-all duration-500 mt-4 mx-auto rounded-full"></div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Portfolio Sections */}
      <div className="bg-gray-800/30 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-rose-500/20 to-lavender-500/20 rounded-full px-6 py-3 border border-rose-400/30 mb-8 backdrop-blur-sm">
              <GraduationCap className="h-5 w-5 text-rose-400 mr-2" />
              <span className="text-rose-300 font-semibold">Explore My Portfolio</span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-8 bg-gradient-to-r from-rose-300 to-lavender-300 bg-clip-text text-transparent">
              Portfolio Sections
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-lavender-400 mx-auto mb-8 rounded-full shadow-lg shadow-rose-400/50"></div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the comprehensive documentation of my educational journey through these key sections
            </p>

            {/* Portfolio Navigation Summary */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {portfolioSections.map((section, index) => (
                <Link
                  key={index}
                  to={section.path}
                  className="group inline-flex items-center px-4 py-2 bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-600/30 hover:border-rose-400/50 transition-all duration-300 hover:scale-105"
                >
                  <section.icon className="h-4 w-4 mr-2 text-gray-400 group-hover:text-rose-300" />
                  <span className="text-sm text-gray-400 group-hover:text-white">{section.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Portfolio Sections Container with Fixed Height */}
          <div className="relative min-h-[600px] md:min-h-[800px] -mt-10">
            {/* Paginated Portfolio Sections */}
            <div className="grid lg:grid-cols-2 gap-6 md:gap-10 mb-12">
              {portfolioSections
                .slice((portfolioPage - 1) * portfolioItemsPerPage, portfolioPage * portfolioItemsPerPage)
                .map((section, index) => {
                  const Icon = section.icon
                  return (
                    <div
                      key={index}
                      className={`group bg-gray-800/90 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl ${section.shadowColor} overflow-hidden hover:shadow-3xl transition-all duration-500 border ${section.borderColor} hover:border-rose-400/50 hover:transform hover:scale-[1.02]`}
                    >
                      <div
                        className={`p-6 md:p-10 bg-gradient-to-r ${section.gradient} relative overflow-hidden border-b border-gray-700/50`}
                      >
                        <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-white/5 rounded-full -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-16 md:w-24 h-16 md:h-24 bg-white/5 rounded-full translate-y-8 md:translate-y-12 -translate-x-8 md:-translate-x-12"></div>

                        <div className="relative z-10">
                          <div
                            className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-r ${section.iconBg} mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                          >
                            <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white">{section.title}</h3>
                          <p className="text-base md:text-lg text-gray-300">{section.description}</p>
                        </div>
                      </div>

                      <div className="p-6 md:p-10">
                        <div className="mb-6 md:mb-8">
                          <h4 className="font-bold text-white mb-3 md:mb-4 text-base md:text-lg">Key Features:</h4>
                          <ul className="space-y-2 md:space-y-3">
                            {section.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center text-sm md:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                              >
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-rose-400 to-lavender-400 rounded-full mr-3 md:mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          to={section.path}
                          className={`group/btn inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r ${section.gradient} text-white rounded-xl md:rounded-2xl hover:shadow-lg transition-all duration-300 font-semibold text-base md:text-lg hover:scale-105 transform border ${section.borderColor} backdrop-blur-sm`}
                        >
                          Explore Section
                          <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2 md:ml-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  )
                })}
            </div>

            {/* Portfolio Pagination - Fixed Position */}
            {Math.ceil(portfolioSections.length / portfolioItemsPerPage) > 1 && (
              <div className="absolute bottom-16 left-0 right-0 flex justify-center cursor-pointer">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setPortfolioPage(Math.max(1, portfolioPage - 1))}
                        className={`${portfolioPage === 1 ? "pointer-events-none opacity-50" : "hover:bg-rose-500/20 hover:text-rose-300"} bg-gray-800/80 text-gray-300 border-rose-400/30 text-sm md:text-base`}
                      />
                    </PaginationItem>
                    {portfolioPage > 1 && (
                      <PaginationItem>
                        <PaginationLink
                          onClick={() => setPortfolioPage(portfolioPage - 1)}
                          className="hover:bg-rose-500/10 hover:text-rose-300 bg-gray-800/80 text-gray-300 border-rose-400/30 text-sm md:text-base"
                        >
                          {portfolioPage - 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem>
                      <PaginationLink
                        isActive={true}
                        className="bg-rose-500/20 text-rose-300 border-rose-400 bg-gray-800/80 text-sm md:text-base"
                      >
                        {portfolioPage}
                      </PaginationLink>
                    </PaginationItem>
                    {portfolioPage < Math.ceil(portfolioSections.length / portfolioItemsPerPage) && (
                      <PaginationItem>
                        <PaginationLink
                          onClick={() => setPortfolioPage(portfolioPage + 1)}
                          className="hover:bg-rose-500/10 hover:text-rose-300 bg-gray-800/80 text-gray-300 border-rose-400/30 text-sm md:text-base"
                        >
                          {portfolioPage + 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          setPortfolioPage(
                            Math.min(Math.ceil(portfolioSections.length / portfolioItemsPerPage), portfolioPage + 1),
                          )
                        }
                        className={`${portfolioPage === Math.ceil(portfolioSections.length / portfolioItemsPerPage) ? "pointer-events-none opacity-50" : "hover:bg-rose-500/20 hover:text-rose-300"} bg-gray-800/80 text-gray-300 border-rose-400/30 text-sm md:text-base`}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-gray-800 via-slate-800 to-gray-800 text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-16 md:w-20 h-16 md:h-20 bg-rose-400/20 rounded-full animate-pulse shadow-lg shadow-rose-400/30"></div>
          <div className="absolute bottom-10 right-10 w-12 md:w-16 h-12 md:h-16 bg-lavender-400/20 rounded-full animate-bounce shadow-lg shadow-lavender-400/30"></div>
          <div className="absolute top-1/2 left-1/4 w-8 md:w-12 h-8 md:h-12 bg-sky-400/20 rounded-full animate-pulse delay-700 shadow-lg shadow-sky-400/30"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-gradient-to-r from-rose-500/20 to-lavender-500/20 rounded-full px-4 md:px-6 py-2 md:py-3 border border-rose-400/30 mb-6 md:mb-8 backdrop-blur-sm">
            <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-rose-400 mr-2" />
            <span className="text-sm md:text-base text-rose-300 font-semibold">My Mission</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-white">My Mission as a Future Educator</h2>

          <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 border border-rose-400/30 shadow-2xl shadow-rose-500/20">
            <blockquote className="text-lg md:text-2xl leading-relaxed mb-6 md:mb-8 text-gray-300 italic">
              "To inspire and empower students through engaging Social Studies education that connects the past with the
              present, fostering critical thinking, cultural awareness, and active citizenship."
            </blockquote>
            <p className="text-base md:text-lg text-gray-400">
              Every experience documented in this portfolio has contributed to this mission, preparing me to make a
              meaningful difference in the lives of my future students.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-rose-500/20 to-lavender-500/20 rounded-full px-4 md:px-6 py-2 md:py-3 border border-rose-400/30 mb-6 md:mb-8 backdrop-blur-sm">
            <Star className="h-4 w-4 md:h-5 md:w-5 text-rose-400 mr-2" />
            <span className="text-sm md:text-base text-rose-300 font-semibold">Ready to Explore?</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8 bg-gradient-to-r from-rose-300 to-lavender-300 bg-clip-text text-transparent">
            Begin Your Journey
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-rose-400 to-lavender-400 mx-auto mb-6 md:mb-8 rounded-full shadow-lg shadow-rose-400/50"></div>

          <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto">
            Take a journey through my university experience and discover how each challenge, achievement, and moment has
            shaped my path to becoming an educator.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link
              to="/academic"
              className="group inline-flex items-center justify-center px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-rose-500/20 to-peach-500/20 text-white rounded-xl md:rounded-2xl hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 text-base md:text-lg font-semibold hover:scale-105 transform border border-rose-400/30 backdrop-blur-sm"
            >
              Start with Academic Journey
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/story"
              className="group inline-flex items-center justify-center px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-lavender-500/20 to-lilac-500/20 text-white rounded-xl md:rounded-2xl hover:shadow-lg hover:shadow-lavender-500/30 transition-all duration-300 text-base md:text-lg font-semibold hover:scale-105 transform border border-lavender-400/30 backdrop-blur-sm"
            >
              Read My Story
              <Heart className="h-5 w-5 md:h-6 md:w-6 ml-2 md:ml-3 group-hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index