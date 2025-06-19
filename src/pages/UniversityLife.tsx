"use client"

import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { School, Star, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const UniversityLife = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth >= 1024 ? 2 : 1)
  const [isMobile, setIsMobile] = useState(false)
  const dragStartX = useRef<number | null>(null)
  const dragCurrentX = useRef<number | null>(null)
  const dragStartTime = useRef<number | null>(null)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState<'left' | 'right' | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 2 : 1)
      // Reset to first page when screen size changes
      setCurrentPage(1)
    }

    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()

    window.addEventListener("resize", handleResize)
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const lifeExperiences = [
    {
      title: "1st Day of Classes (Balik Sinta)",
      description:
        "My Balik Sinta experience was quite funny—we weren't really supposed to attend since we didn't have a pass. But surprisingly, we still got in! I had so much fun, especially because I got to bond with my best friends, Sarah and Zel, and finally met some of my blockmates.",
      image: "/activities/university-life/Balik-Sinta.jpg",
      caption: "First day back on campus - bonding with friends and meeting blockmates",
    },
    {
      title: "ID Issuance & Meet-up with Friends",
      description:
        "It was the last day of ID issuance, and I chose that day on purpose because I wanted to meet up with my friends—Raine, Ace, Rei, and Ara. It felt exciting to finally get my ID and spend the day with them.",
      image: "/activities/university-life/ID-Issuance.jpg",
      caption: "Getting my university ID and spending quality time with friends",
    },
    {
      title: "First Face-to-Face Class",
      description:
        "Our first ever face-to-face session happened during our NSTP-CWTS class. It was a fun and memorable moment because I got to meet more of our blockmates in person for the first time. It was also the first time our entire class was complete—together with BSEDMT 1-1N and BSEDMT 1-1D.",
      image: "/activities/university-life/First-F2F.jpg",
      caption: "Historic first face-to-face meeting with complete blockmates",
    },
    {
      title: "Block Team Building",
      description:
        "It was our block's first team building, held at Ninoy Aquino Parks and Wildlife Center. We finally got to meet our new blockmates and spend quality time together. The day was filled with fun games, bonding activities, and memories that we'll always cherish.",
      image: "/activities/university-life/Team-Bldg.jpg",
      caption: "Building stronger bonds through team activities at the wildlife center",
    },
    {
      title: "Block's First Award at COEDunong",
      description:
        "It was a proud moment for our block as we received our very first award at COEDunong. All our efforts, teamwork, and participation were recognized, and it made us feel more united and motivated. It was a reminder that even small wins are worth celebrating—especially when shared with people who work hard together.",
      image: "/activities/university-life/Block-Award.jpg",
      caption: "Celebrating our block's first recognition at the academic contest",
    },
    {
      title: "First Demo Teaching",
      description:
        "I performed my first peer demo teaching as our final requirement. To be honest, it wasn't what I expected—it didn't go the way I envisioned. I know I could've done better. But instead of dwelling on it, I took it as a lesson and motivation to improve and grow as a future educator.",
      image: "/activities/university-life/Demo-Teaching.jpg",
      caption: "Learning from my first teaching demonstration experience",
    },
    {
      title: "Thesis Title Defense",
      description:
        "We defended our thesis title, 'History Without Boundary: The Integration of Non-Immersive Virtual Reality as a Pedagogical Technique in Teaching World History.' It was a nerve-wracking but fulfilling experience. Our title was accepted with minor revisions, and that moment marked the official beginning of our thesis journey.",
      image: "/activities/university-life/Thesis.jpg",
      caption: "Successfully defending our innovative thesis proposal on VR in education",
    },
  ]

  const totalPages = Math.ceil(lifeExperiences.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentExperiences = lifeExperiences.slice(startIndex, startIndex + itemsPerPage)

  const goToPage = (page: number) => {
    if (page === currentPage) return
    setTransitionDirection(page > currentPage ? 'left' : 'right')
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage(page)
      setIsTransitioning(false)
    }, 300)
  }

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1)
    }
  }

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1)
    }
  }

  // Drag/Swipe handlers (mouse and touch)
  const handleDragStart = (e) => {
    setIsDragging(true)
    if ('touches' in e) {
      dragStartX.current = e.touches[0].clientX
    } else {
      dragStartX.current = e.clientX
    }
    dragCurrentX.current = dragStartX.current
    dragStartTime.current = Date.now()
  }
  const handleDragMove = (e) => {
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
      goToNext()
      navigated = true
    } else if (distance > threshold || (distance > 0 && velocity > velocityThreshold)) {
      goToPrevious()
      navigated = true
    }
    setIsDragging(false)
    setDragOffset(0)
    dragStartX.current = null
    dragCurrentX.current = null
    dragStartTime.current = null
    // If not navigated, snap back with animation (already handled by transition class)
  }

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
          <Star className="h-8 w-8 md:h-12 md:w-12 mx-auto text-lavender-400 mb-3 md:mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Memorable Campus Life Moments</h2>
          <p className="text-base md:text-lg text-gray-300">Visual journey through my university experiences</p>
        </div>

        {isMobile && (
          <div className="text-center mb-4">
            <div className="inline-flex items-center bg-gray-800/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/30">
              <span className="text-xs text-gray-400">← Swipe to navigate →</span>
            </div>
          </div>
        )}

        <div
          className="flex flex-col min-h-[500px] md:min-h-[600px] select-none"
          onMouseDown={handleDragStart}
          onMouseMove={isDragging ? handleDragMove : undefined}
          onMouseUp={handleDragEnd}
          onMouseLeave={isDragging ? handleDragEnd : undefined}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {/* Experience Cards */}
          <div className={`flex-grow grid lg:grid-cols-2 gap-6 md:gap-8 mb-8 transition-transform ${isDragging ? 'duration-0' : 'duration-300 ease-in-out'} ${isTransitioning ? (transitionDirection === 'left' ? '-translate-x-6 opacity-80' : 'translate-x-6 opacity-80') : 'translate-x-0 opacity-100'}`}
            style={{ transform: isDragging ? `translateX(${dragOffset}px)` : undefined }}
          >
            {currentExperiences.map((experience, index) => {
              const globalIndex = startIndex + index
              return (
                <div
                  key={globalIndex}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl shadow-sky-500/10 overflow-hidden hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 border border-gray-700/50 hover:border-sky-400/30 flex flex-col group"
                >
                  <div className="relative w-full aspect-video">
                    {experience.image.endsWith(".mp4") ? (
                      <video
                        src={experience.image}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        controls
                        playsInline
                      />
                    ) : (
                      <img
                        src={experience.image || "/placeholder.svg"}
                        alt={experience.title}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    )}
                  </div>
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <div className="relative group mb-2 md:mb-3">
                      <h3 className="text-lg md:text-xl font-bold text-white line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {experience.title}
                      </h3>
                      <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-sky-400/0 via-sky-400/50 to-sky-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -top-2 left-0 w-full h-1 bg-gradient-to-r from-sky-400/0 via-sky-400/50 to-sky-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-sky-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </div>

                    <div className="relative group/desc flex-grow">
                      <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed line-clamp-4 group-hover/desc:line-clamp-none transition-all duration-300 overflow-hidden">
                        {experience.description}
                      </p>
                      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-gray-800/80 to-transparent opacity-100 group-hover/desc:opacity-0 transition-opacity duration-300 pointer-events-none"></div>
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-400/0 via-sky-400/30 to-sky-400/0 opacity-0 group-hover/desc:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <p className="text-xs md:text-sm text-gray-400 italic border-l-2 border-sky-400/30 pl-2 md:pl-3 mt-auto">
                      {experience.caption}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Custom Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-auto">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-gray-800/50 text-gray-500 cursor-not-allowed"
                    : "bg-gray-800/80 text-sky-300 hover:bg-sky-500/20 hover:text-sky-200 border border-sky-400/30 hover:border-sky-400/50"
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="text-sm font-medium">Previous</span>
              </button>

              {/* Dot Indicators (show only prev, current, next) */}
              <div className="flex items-center gap-2">
                {(() => {
                  const dots = []
                  if (currentPage > 1) {
                    dots.push(
                      <button
                        key={currentPage - 1}
                        onClick={() => goToPage(currentPage - 1)}
                        className="w-3 h-3 bg-gray-600 hover:bg-sky-400/50 rounded-full hover:scale-110 transition-all duration-300"
                        aria-label={`Go to page ${currentPage - 1}`}
                      />
                    )
                  }
                  dots.push(
                    <button
                      key={currentPage}
                      className="w-8 h-3 bg-gradient-to-r from-sky-400 to-lavender-400 rounded-full shadow-lg shadow-sky-400/30 transition-all duration-300"
                      aria-label={`Current page, page ${currentPage}`}
                      disabled
                    />
                  )
                  if (currentPage < totalPages) {
                    dots.push(
                      <button
                        key={currentPage + 1}
                        onClick={() => goToPage(currentPage + 1)}
                        className="w-3 h-3 bg-gray-600 hover:bg-sky-400/50 rounded-full hover:scale-110 transition-all duration-300"
                        aria-label={`Go to page ${currentPage + 1}`}
                      />
                    )
                  }
                  return dots
                })()}
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-gray-800/50 text-gray-500 cursor-not-allowed"
                    : "bg-gray-800/80 text-sky-300 hover:bg-sky-500/20 hover:text-sky-200 border border-sky-400/30 hover:border-sky-400/50"
                }`}
              >
                <span className="text-sm font-medium">Next</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Page Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-400">
              Page {currentPage} of {totalPages} • {lifeExperiences.length} experiences
            </span>
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
                  "Striving for academic excellence in both theoretical and practical aspects of my education.",
                example:
                  "Diligently completing academic tasks, actively participating in discussions and reportings, and always aiming to deliver quality outputs.",
                color: "rose",
              },
              {
                value: "Integrity",
                description:
                  "Upholding honesty, fairness, and strong moral principles in both academic and personal life.",
                example:
                  "Avoiding academic dishonesty, being transparent in group work, and holding myself accountable for my responsibilities.",
                color: "lavender",
              },
              {
                value: "Nationalism",
                description:
                  "Fostering love for the country by building civic competence and understanding the nation's history, government, and social realities.",
                example:
                  "Engaging deeply with Social Studies subjects, promoting active citizenship, and creating learning materials that encourage students to participate in nation-building.",
                color: "sky",
              },
              {
                value: "Spirituality",
                description: "Recognizing the importance of faith and inner values in shaping character and purpose.",
                example: "Taking time for reflection, prayer, and expressing gratitude amidst academic challenges.",
                color: "mint",
              },
              {
                value: "Social Responsibility",
                description:
                  "Being aware of my responsibility to contribute positively to the community and advocate for equity and justice.",
                example:
                  "Joining outreach programs and promoting inclusive education in practice teaching and group outputs.",
                color: "peach",
              },
              {
                value: "Innovation",
                description:
                  "Being open to new ideas, approaches, and technologies that can improve teaching and learning.",
                example:
                  "Exploring virtual reality, using creative presentation tools, and adapting lessons to modern learners' needs.",
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
      <Footer />
    </div>
  )
}

export default UniversityLife
