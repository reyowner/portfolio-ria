"use client"

import type React from "react"

import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
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
import { useState, useEffect, useRef } from "react"

const Index = () => {
  const [portfolioPage, setPortfolioPage] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const dragStartX = useRef<number | null>(null)
  const dragCurrentX = useRef<number | null>(null)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartTime = useRef<number | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Drag/Swipe handlers (mouse and touch)
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    if ('touches' in e) {
      dragStartX.current = e.touches[0].clientX
    } else {
      dragStartX.current = e.clientX
    }
    dragCurrentX.current = dragStartX.current
    dragStartTime.current = Date.now()
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || dragStartX.current === null) return
    let clientX
    if ('touches' in e) {
      clientX = e.touches[0].clientX
    } else {
      clientX = e.clientX
    }
    dragCurrentX.current = clientX
    setDragOffset(clientX - dragStartX.current)
  }

  const handleDragEnd = () => {
    if (!isDragging || dragStartX.current === null || dragCurrentX.current === null || dragStartTime.current === null) {
      setIsDragging(false)
      setDragOffset(0)
      return
    }
    const distance = dragCurrentX.current - dragStartX.current
    const duration = Date.now() - dragStartTime.current
    const velocity = Math.abs(distance) / duration // px/ms
    const threshold = 25
    const velocityThreshold = 0.5 // px/ms
    let navigated = false
    if (distance < -threshold || (distance < 0 && velocity > velocityThreshold)) {
      handleNextSlide()
      navigated = true
    } else if (distance > threshold || (distance > 0 && velocity > velocityThreshold)) {
      handlePrevSlide()
      navigated = true
    }
    setIsDragging(false)
    setDragOffset(0)
    dragStartX.current = null
    dragCurrentX.current = null
    dragStartTime.current = null
    // If not navigated, snap back with animation (already handled by transition class)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    return () => clearInterval(interval)
  }, [portfolioPage])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevSlide()
      } else if (e.key === "ArrowRight") {
        handleNextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [portfolioPage])

  const handleNextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setPortfolioPage((prev) => (prev === portfolioSections.length ? 1 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const handlePrevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setPortfolioPage((prev) => (prev === 1 ? portfolioSections.length : prev - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === portfolioPage) return
    setIsTransitioning(true)
    setPortfolioPage(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const [portfolioItemsPerPage, setPortfolioItemsPerPage] = useState(window.innerWidth >= 1024 ? 2 : 1)

  useEffect(() => {
    const handleResize = () => {
      setPortfolioItemsPerPage(window.innerWidth >= 1024 ? 2 : 1)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
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
      number: "5x",
      label: "President's Lister",
      description: "Consistent academic excellence",
      icon: Award,
      gradient: "from-peach-500/20 to-coral-500/20",
      iconColor: "text-coral-400",
      borderColor: "border-coral-400/30",
      shadowColor: "shadow-coral-400/20",
    },
    {
      number: "42",
      label: "Courses Completed",
      description: "Core education and social studies subjects",
      icon: BookOpen,
      gradient: "from-sky-500/20 to-lavender-500/20",
      iconColor: "text-lavender-400",
      borderColor: "border-lavender-400/30",
      shadowColor: "shadow-lavender-400/20",
    },
    {
      number: "24",
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

          {/* Portfolio Carousel Container */}
          <div className="relative">
            {/* Swipe Instruction for Mobile */}
            {isMobile && (
              <div className="text-center mb-6">
                <div className="inline-flex items-center bg-gray-800/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/30">
                  <span className="text-xs text-gray-400">← Swipe to navigate →</span>
                </div>
              </div>
            )}

            {/* Main Carousel */}
            <div
              className={`relative overflow-hidden rounded-3xl select-none`}
              ref={carouselRef}
              onMouseDown={handleDragStart}
              onMouseMove={isDragging ? handleDragMove : undefined}
              onMouseUp={handleDragEnd}
              onMouseLeave={isDragging ? handleDragEnd : undefined}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              {/* Carousel Track */}
              <div
                className={`flex transition-transform ${isDragging ? 'duration-0' : 'duration-500 ease-in-out'}`}
                style={{ transform: `translateX(calc(-${(portfolioPage - 1) * 100}% + ${dragOffset}px))` }}
              >
                {portfolioSections.map((section, index) => {
                  const Icon = section.icon
                  return (
                    <div key={index} className="w-full flex-shrink-0 p-4 md:p-8">
                      <div
                        className={`group bg-gray-800/90 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl ${section.shadowColor} overflow-hidden hover:shadow-3xl transition-all duration-500 border ${section.borderColor} hover:border-rose-400/50 hover:transform hover:scale-[1.02] max-w-4xl mx-auto`}
                      >
                        <div
                          className={`p-6 md:p-10 bg-gradient-to-r ${section.gradient} relative overflow-hidden border-b border-gray-700/50`}
                        >
                          {/* Background Decorations */}
                          <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-white/5 rounded-full -translate-y-16 md:-translate-y-20 translate-x-16 md:translate-x-20"></div>
                          <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-white/5 rounded-full translate-y-12 md:translate-y-16 -translate-x-12 md:-translate-x-16"></div>
                          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/3 rounded-full"></div>

                          <div className="relative z-10 text-center">
                            <div
                              className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-gradient-to-r ${section.iconBg} mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                            >
                              <Icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">{section.title}</h3>
                            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                              {section.description}
                            </p>
                          </div>
                        </div>

                        <div className="p-6 md:p-10">
                          <div className="grid md:grid-cols-2 gap-8 mb-8 md:mb-10">
                            <div>
                              <h4 className="font-bold text-white mb-4 md:mb-6 text-lg md:text-xl flex items-center">
                                <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-lavender-400 rounded-full mr-3"></div>
                                Key Features
                              </h4>
                              <ul className="space-y-3 md:space-y-4">
                                {section.features.map((feature, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-center text-base md:text-lg text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                                  >
                                    <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-lavender-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center">
                              <div className="mb-6">
                                <div className="text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-rose-400 to-lavender-400 bg-clip-text mb-2">
                                  {String(index + 1).padStart(2, "0")}
                                </div>
                                <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
                                  Portfolio Section
                                </div>
                              </div>
                              <Link
                                to={section.path}
                                className={`group/btn inline-flex items-center px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r ${section.gradient} text-white rounded-xl md:rounded-2xl hover:shadow-lg transition-all duration-300 font-semibold text-lg md:text-xl hover:scale-105 transform border ${section.borderColor} backdrop-blur-sm`}
                              >
                                Explore Section
                                <ArrowRight className="h-5 w-5 md:h-6 md:w-6 ml-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Navigation Arrows - Desktop Only */}
              {!isMobile && (
                <>
                  <button
                    onClick={handlePrevSlide}
                    disabled={isTransitioning}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-gray-800/80 backdrop-blur-sm border border-rose-400/30 rounded-full flex items-center justify-center text-white hover:bg-rose-500/20 hover:border-rose-400/60 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group z-10"
                  >
                    <ArrowRight className="h-5 w-5 md:h-6 md:w-6 rotate-180 group-hover:scale-110 transition-transform duration-300" />
                  </button>

                  <button
                    onClick={handleNextSlide}
                    disabled={isTransitioning}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-gray-800/80 backdrop-blur-sm border border-rose-400/30 rounded-full flex items-center justify-center text-white hover:bg-rose-500/20 hover:border-rose-400/60 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group z-10"
                  >
                    <ArrowRight className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </>
              )}
            </div>

            {/* Progress Bar */}
            <div className="mt-8 mb-6">
              <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-rose-400 to-lavender-400 rounded-full transition-all duration-500 ease-out shadow-lg shadow-rose-400/30"
                  style={{ width: `${(portfolioPage / portfolioSections.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Dot Navigation */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              {portfolioSections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index + 1)}
                  disabled={isTransitioning}
                  className={`relative transition-all duration-300 disabled:cursor-not-allowed group ${
                    portfolioPage === index + 1
                      ? "w-8 h-3 bg-gradient-to-r from-rose-400 to-lavender-400 rounded-full shadow-lg shadow-rose-400/50"
                      : "w-3 h-3 bg-gray-600 rounded-full hover:bg-gray-500 hover:scale-125"
                  }`}
                >
                  {portfolioPage === index + 1 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-lavender-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
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
      <Footer />
    </div>
  )
}

export default Index