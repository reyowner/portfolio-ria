"use client"

import Navigation from "../components/Navigation"
import { Users, Trophy, Heart, Calendar, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const Activities = () => {
  const [coCurricularPage, setCoCurricularPage] = useState(1)
  const [extraCurricularPage, setExtraCurricularPage] = useState(1)
  const [overallPage, setOverallPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth >= 1024 ? 2 : 1)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 2 : 1)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const coCurricularActivities = [
    {
      title: "COED Jumpstart 2024",
      role: "Organizer, Creatives Committee",
      period: "January 2025",
      description:
        "An annual orientation event for incoming students of the College of Education. As part of the Creatives Committee, I was responsible for designing and producing visual materials used in promotions and during the event. I contributed to the overall aesthetic and branding of the program, helping to create a welcoming and engaging atmosphere for the freshmen.",
      image: "/activities/co-curricular/COED-Jumpstart-2024.jpg",
      caption: "Designing visual materials for the orientation event",
    },
    {
      title: "COEDunong 2024 Academic Contest - Instructional Material Making Contest",
      role: "Champion",
      period: "November 2024",
      description:
        "COEDunong is an academic competition open to students of the College of Education. In 2024, I was awarded Champion in the Instructional Material Making Contest, showcasing creativity and pedagogical skill in designing effective, learner-centered teaching materials aligned with curriculum standards.",
      image: "/activities/co-curricular/COEDunong-2024.jpg",
      caption: "Presenting my winning instructional materials",
    },
    {
      title: "Ilog Pasiglahin",
      role: "Organizer/Participant",
      period: "September 2024",
      description:
        "An environmental awareness event focused on the preservation and rehabilitation of the Pasig River and other bodies of water. As both an organizer and participant, I was involved in promoting sustainable practices and educating the community on how to care for our rivers through responsible waste management, conservation efforts, and civic engagement.",
      image: "/activities/co-curricular/Ilog-Pasiglahin.jpg",
      caption: "Leading a river cleanup activity",
    },
    {
      title: "COED Awards: Gawad Hiraya",
      role: "Awardee and Organizer",
      period: "August 2024",
      description:
        "During this prestigious event by the College of Education, I was recognized once again as a President's Lister while also serving as one of the organizers. Being on both sides—as an awardee and as part of the organizing team—made the experience even more fulfilling, as it symbolized both recognition and service.",
      image: "/activities/co-curricular/COED-Awards.jpg",
      caption: "Receiving recognition at the Gawad Hiraya ceremony",
    },
    {
      title: "PUP SSG 10th Anniversary and Recognition",
      role: "Awardee",
      period: "June 2024",
      description:
        "I was honored to be recognized as a President's Lister during the PUP SSG's 10th Anniversary and Recognition Ceremony. This achievement reflects the hard work and perseverance I've invested in balancing both academic and personal responsibilities.",
      image: "/activities/co-curricular/PUP-SSG-Anniversary-and-Recognition.jpg",
      caption: "Being recognized as a President's Lister",
    },
    {
      title: "EDTALK Series Webinar",
      role: "Participant",
      period: "November 2022, November 2023, November 2024",
      description:
        "The EDTALK Series is an annual webinar hosted by various organizations within PUP that highlights innovative strategies and methodologies in teaching. Attending this series consistently over the years has deepened my understanding of pedagogical practices and affirmed my commitment to becoming a more dynamic and responsive future educator.",
      image: "/activities/co-curricular/EDTALK-Series-Webinar.jpg",
      caption: "Learning from educational experts in the webinar series",
    },
    {
      title: "University of the Philippines Open University: Massive Open Distance e-Learning in Introduction to Technology for Teaching and Learning",
      role: "Participant",
      period: "May-June 2024",
      description:
        "Completed an online course under UPOU's MODeL platform focused on foundational concepts and practical applications of technology integration in education. The course emphasized the role of digital tools in enhancing teaching and learning experiences, particularly in flexible and distance learning environments.",
      image: "/activities/co-curricular/UPOU-TTL2.jpg",
      caption: "Learning from educational experts in the webinar series",
    },
    {
      title: "NSTP-CWTS Outreach Program - 'This is Me!: Understanding Sexual, Gender Identity, and Puberty of the Youth'",
      role: "Committee Member",
      period: "July 2023",
      description:
        "This outreach program aimed to raise awareness about sex, gender identity, and the challenges faced by today's youth. As a member of the Program Committee, I helped in planning and organizing activities that encouraged safe and inclusive conversations around gender and puberty—highlighting the importance of education in dismantling stigma.",
      image: "/activities/co-curricular/NSTP-CWTS-Outreach-Program.jpg",
      caption: "Facilitating a workshop on gender identity",
    },
    {
      title: "360Pilipinas Earth Day Celebration",
      role: "Participant",
      period: "April 2023",
      description:
        "As part of our CWTS class requirement in 2023, we participated in the 360Pilipinas Earth Day Celebration, a campaign that promotes a cleaner and greener environment. Though initially a class task, the experience opened our eyes to the importance of collective action in addressing environmental issues.",
      image: "/activities/co-curricular/360Pilipinas-Earth-Day.jpg",
      caption: "Participating in Earth Day activities",
    },
    {
      title: "COED Jumpstart 2022",
      role: "Participant",
      period: "March 2023",
      description:
        "An orientation event designed specifically for the freshmen of the Polytechnic University of the Philippines – College of Education. As a participant, this event served as my official welcome to the college, giving me an overview of what to expect in my academic journey. It introduced me to the values, programs, and culture of the College of Education, and helped me feel more grounded and prepared as I began my path toward becoming a future educator.",
      image: "/activities/co-curricular/Jumpstart-2022.jpg",
      caption: "Attending my first COED orientation",
    },
  ]

  const extraCurricularActivities = [
    {
      title: "The Limestone",
      role: "Photojournalist / Graphics Artist",
      period: "2024 - Present",
      description:
        "Contributes to the official student publication of the College of Education by capturing key moments during events, producing creative layouts, and designing visual content that supports journalistic storytelling and student-led publication releases.",
      image: "/activities/extra-curricular/Limestone.jpg",
      caption: "Creating visual content for student publications",
      impact: "Enhanced visual storytelling in student publications"
    },
    {
      title: "Bachelor of Elementary and Secondary Teaching Society (BEST Society)",
      role: "Public Relations Officer",
      period: "2024 - Present",
      description:
        "Responsible for maintaining the organization's public presence through strategic communications, publication materials, and engagement across social media platforms. Ensures effective promotion of events and strengthens the organization's branding and visibility within and beyond the department.",
      image: "/activities/extra-curricular/BEST-2024.jpg",
      caption: "Managing organization's public relations and communications",
      impact: "Improved organization's social media presence and engagement"
    },
    {
      title: "The PUP Social Studies Guild",
      role: "Finance Committee Officer",
      period: "2024 - Present",
      description:
        "Handles budget proposals, financial documentation, and funding strategies for guild activities. Supports the organization in implementing educational and cultural programs aligned with the goals of the Social Studies discipline.",
      image: "/activities/extra-curricular/Social-Studies-Guild.jpg",
      caption: "Managing financial aspects of guild activities",
      impact: "Streamlined financial processes for guild activities"
    },
    {
      title: "Bachelor of Elementary and Secondary Teaching Society (BEST Society)",
      role: "Member",
      period: "2023 - 2024",
      description:
        "Actively participated as a member of the department's mother organization, which aims to unify and support students under the Bachelor of Elementary and Secondary Teaching program through academic, leadership, and community-building initiatives.",
      image: "/activities/extra-curricular/BEST-2023.jpg",
      caption: "Participating in BEST Society activities",
      impact: "Contributed to academic and leadership development initiatives"
    },
    {
      title: "PUP College of Education Student Council",
      role: "Junior Council Officer",
      period: "2023 - 2024",
      description:
        "Served as a junior officer under the College of Education Student Council, contributing to student welfare initiatives, assisting in various council-led events, and participating in decision-making processes that addressed student concerns and campus activities.",
      image: "/activities/extra-curricular/PUP-COED-SC.jpg",
      caption: "Contributing to student council initiatives",
      impact: "Enhanced student welfare and campus activities"
    },
  ]

  const overallActivitiesEvent = [
    {
      title: "Tara, Basa! Tutoring Program",
      role: "Learning Facilitator",
      period: "May - June 2025",
      description:
        "Served as a tutor in the Tara, Basa! literacy program, which supports the reading development of early-grade learners. Facilitated reading sessions, monitored learner progress, and provided educational support to underserved communities.",
      image: "/activities/overall/Tara-Basa.jpg",
      caption: "Facilitating reading sessions for early-grade learners",
    },
    {
      title: "GTKY: Getting to Know You! - BEST Society General Assembly",
      role: "Organizer, Creatives Committee Head",
      period: "March 2025",
      description:
        "Led the creative direction and designed event materials for the BEST Society's general assembly. The event introduced the organization's goals and officers while strengthening bonds among members through engaging activities.",
      image: "/activities/overall/GTKY.jpg",
      caption: "Leading creative direction for the general assembly",
    },
    {
      title: "SSilakbo: Mid-Year General Assembly",
      role: "Logistics and Finance Committee Member",
      period: "February 2025",
      description:
        "A mid-year general assembly organized by the PUP Social Studies Guild to re-engage members and align organizational priorities. Assisted in event logistics and financial coordination to ensure smooth implementation.",
      image: "/activities/overall/SSilakbo.jpg",
      caption: "Coordinating logistics for the general assembly",
    },
    {
      title: "COED Pinning Ceremony",
      role: "Partner Organization (The Limestone)",
      period: "January 2025",
      description:
        "Represented The Limestone, the official student publication of the College of Education, as a photographer and media partner for this formal event that recognizes education students' transition to internship and field practice.",
      image: "/activities/overall/COED-Pinning.jpg",
      caption: "Documenting the pinning ceremony as a photographer",
    },
    {
      title: "COEDunong Academic Contest 2024",
      role: "Organizer",
      period: "November 2024",
      description:
        "Co-organized by the BEST Society, PUP Social Studies Guild, and The Limestone, this interdepartmental academic contest aimed to promote academic excellence, instructional innovation, and healthy competition among students in the College of Education.",
      image: "/activities/overall/COEDunong.jpg",
      caption: "Organizing the academic contest",
    },
    {
      title: "COEDyssey: Forging a Legacy through Unified Vision and Leadership",
      role: "Organizer (BEST Society)",
      period: "November 2024",
      description:
        "A leadership seminar for aspiring student leaders in the College of Education. Organized by the BEST Society, the event fostered unity among student leaders through collaborative workshops, vision-building activities, and values-centered dialogue.",
      image: "/activities/overall/COEDyssey.jpg",
      caption: "Facilitating leadership workshops",
    },
    {
      title: "Balik Sinta 2024",
      role: "Partner Organization (BEST Society, PUP Social Studies Guild)",
      period: "September 2024",
      description:
        "A welcome-back event held to mark the beginning of a new academic year. Participated as a partner organization through BEST Society and the PUP Social Studies Guild, helping create a festive and inclusive atmosphere for returning students.",
      image: "/activities/overall/Balik-Sinta.jpg",
      caption: "Creating a welcoming atmosphere for returning students",
    },
    {
      title: "Leadership Empowerment Talks 2024",
      role: "Organizer, Creatives Committee",
      period: "August 2024",
      description:
        "Organized by the BEST Society, this leadership seminar aimed to inspire and equip student-leaders with the essential skills and mindset for effective leadership. Contributed to the visual branding and creative outputs used throughout the event.",
      image: "/activities/overall/Leadership-Empowerment.jpg",
      caption: "Designing visual materials for the leadership seminar",
    },
    {
      title: "PUP Rainbow",
      role: "Partner Organization (BEST Society)",
      period: "June 2024",
      description:
        "A university-wide pride event celebrating gender diversity and equality. Represented the Bachelor of Elementary and Secondary Teaching Society (BEST Society) as a partner organization, supporting advocacy efforts for inclusion and LGBTQIA+ rights.",
      image: "/activities/overall/PUP-Rainbow.jpg",
      caption: "Supporting LGBTQIA+ advocacy efforts",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 via-slate-800 to-gray-800 text-white py-8 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-16 md:w-20 h-16 md:h-20 bg-mint-400/20 rounded-full animate-pulse shadow-lg shadow-mint-400/30"></div>
          <div className="absolute bottom-10 right-10 w-12 md:w-16 h-12 md:h-16 bg-sage-400/20 rounded-full animate-bounce shadow-lg shadow-sage-400/30"></div>
          <div className="absolute top-1/2 left-1/3 w-8 md:w-12 h-8 md:h-12 bg-sky-400/20 rounded-full animate-pulse delay-700 shadow-lg shadow-sky-400/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Users className="h-12 md:h-16 w-12 md:w-16 mx-auto mb-4 md:mb-6 text-mint-400 drop-shadow-lg" />
            <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">Activities & Involvement</h1>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Beyond the classroom - my participation in co-curricular and extra-curricular activities that have
              enriched my university experience
            </p>
          </div>
        </div>
      </div>

      {/* Co-Curricular Activities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <Trophy className="h-8 md:h-12 w-8 md:w-12 mx-auto text-sage-400 mb-3 md:mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Co-Curricular Activities</h2>
          <p className="text-base md:text-lg text-gray-300">Academic-related activities that complement my formal education</p>
        </div>

        <div className="flex flex-col min-h-[500px] md:min-h-[600px]">
          <div className="flex-grow grid lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
            {coCurricularActivities.slice((coCurricularPage - 1) * itemsPerPage, coCurricularPage * itemsPerPage).map((activity, index) => (
              <div
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl shadow-mint-500/10 overflow-hidden hover:shadow-2xl hover:shadow-mint-500/20 transition-all duration-300 border border-gray-700/50 hover:border-mint-400/30 flex flex-col min-h-[400px] md:min-h-[500px]"
              >
                <div className="relative w-full aspect-video">
                  <img 
                    src={activity.image}
                    alt={activity.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-2 md:mb-3">
                    <div className="relative group">
                      <h3 className="text-lg md:text-xl font-bold text-white pr-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {activity.title}
                      </h3>
                      <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-mint-400/0 via-mint-400/50 to-mint-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -top-2 left-0 w-full h-1 bg-gradient-to-r from-mint-400/0 via-mint-400/50 to-mint-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-mint-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </div>
                    <span className="bg-gradient-to-r from-mint-500/20 to-sage-500/20 text-mint-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-mint-400/30 shrink-0">
                      {activity.role}
                    </span>
                  </div>
                  <div className="flex items-center mb-2 md:mb-3">
                    <Calendar className="h-3 md:h-4 w-3 md:w-4 text-sage-400 mr-2 shrink-0" />
                    <span className="text-sm md:text-base text-gray-400">{activity.period}</span>
                  </div>
                  <div className="relative group/desc">
                    <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed line-clamp-4 group-hover/desc:line-clamp-none transition-all duration-300 overflow-hidden">
                      {activity.description}
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-gray-800/80 to-transparent opacity-100 group-hover/desc:opacity-0 transition-opacity duration-300 pointer-events-none"></div>
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-mint-400/0 via-mint-400/30 to-mint-400/0 opacity-0 group-hover/desc:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 italic border-l-2 border-mint-400/30 pl-2 md:pl-3 mt-auto">{activity.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Co-Curricular Pagination */}
          {Math.ceil(coCurricularActivities.length / itemsPerPage) > 1 && (
            <div className="flex justify-center cursor-pointer mt-auto">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCoCurricularPage(Math.max(1, coCurricularPage - 1))}
                      className={`${coCurricularPage === 1 ? "pointer-events-none opacity-50" : "hover:bg-mint-500/20 hover:text-mint-300"} bg-gray-800/80 text-gray-300 border-mint-400/30 text-sm md:text-base`}
                    />
                  </PaginationItem>
                  {coCurricularPage > 1 && (
                    <PaginationItem>
                      <PaginationLink
                        onClick={() => setCoCurricularPage(coCurricularPage - 1)}
                        className="hover:bg-mint-500/10 hover:text-mint-300 bg-gray-800/80 text-gray-300 border-mint-400/30"
                      >
                        {coCurricularPage - 1}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  <PaginationItem>
                    <PaginationLink
                      isActive={true}
                      className="bg-mint-500/20 text-mint-300 border-mint-400 bg-gray-800/80"
                    >
                      {coCurricularPage}
                    </PaginationLink>
                  </PaginationItem>
                  {coCurricularPage < Math.ceil(coCurricularActivities.length / itemsPerPage) && (
                    <PaginationItem>
                      <PaginationLink
                        onClick={() => setCoCurricularPage(coCurricularPage + 1)}
                        className="hover:bg-mint-500/10 hover:text-mint-300 bg-gray-800/80 text-gray-300 border-mint-400/30"
                      >
                        {coCurricularPage + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        setCoCurricularPage(Math.min(Math.ceil(coCurricularActivities.length / itemsPerPage), coCurricularPage + 1))
                      }
                      className={`${coCurricularPage === Math.ceil(coCurricularActivities.length / itemsPerPage) ? "pointer-events-none opacity-50" : "hover:bg-mint-500/20 hover:text-mint-300"} bg-gray-800/80 text-gray-300 border-mint-400/30`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>

      {/* Extra-Curricular Activities */}
      <div className="bg-gray-800/50 backdrop-blur-sm py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <Heart className="h-8 md:h-12 w-8 md:w-12 mx-auto text-rose-400 mb-3 md:mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Extra-Curricular Activities</h2>
            <p className="text-base md:text-lg text-gray-300">
              Community service and voluntary activities that reflect my values and commitment to social responsibility
            </p>
          </div>

          <div className="flex flex-col min-h-[500px] md:min-h-[600px]">
            <div className="flex-grow space-y-6 md:space-y-8 mb-6 md:mb-8">
              {extraCurricularActivities
                .slice((extraCurricularPage - 1) * itemsPerPage, extraCurricularPage * itemsPerPage)
                .map((activity, index) => (
                  <div
                    key={index}
                    className={`flex flex-col lg:flex-row items-center gap-4 md:gap-8 ${((extraCurricularPage - 1) * itemsPerPage + index) % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className="lg:w-1/2">
                      <div className="relative w-[330px] h-[220px] md:w-[650px] md:h-[400px] lg:w-full lg:h-[350px] lg:aspect-video bg-gradient-to-r from-lilac-500/30 to-pink-500/30 rounded-2xl">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="absolute inset-0 w-full h-full object-contain object-center rounded-xl md:rounded-2xl shadow-lg shadow-rose-500/10 border border-gray-700/50"
                        />
                      </div>
                      <p className="text-xs md:text-sm text-gray-400 mt-2 italic text-center">{activity.caption}</p>
                    </div>
                    <div className="lg:w-1/2">
                      <div className="flex items-start justify-between mb-2 md:mb-3">
                        <div className="relative group">
                          <h3 className="text-xl md:text-2xl font-bold text-white pr-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                            {activity.title}
                          </h3>
                          <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-rose-400/0 via-rose-400/50 to-rose-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute -top-2 left-0 w-full h-1 bg-gradient-to-r from-rose-400/0 via-rose-400/50 to-rose-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 bg-rose-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        </div>
                        <span className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-rose-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-rose-400/30 shrink-0">
                          {activity.role}
                        </span>
                      </div>
                      <div className="flex items-center mb-3 md:mb-4">
                        <Calendar className="h-3 md:h-4 w-3 md:w-4 text-rose-400 mr-2 shrink-0" />
                        <span className="text-sm md:text-base text-gray-400">{activity.period}</span>
                      </div>
                      <div className="relative group/desc">
                        <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed line-clamp-4 group-hover/desc:line-clamp-none transition-all duration-300 overflow-hidden">
                          {activity.description}
                        </p>
                        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-gray-800/80 to-transparent opacity-100 group-hover/desc:opacity-0 transition-opacity duration-300 pointer-events-none"></div>
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-rose-400/0 via-rose-400/30 to-rose-400/0 opacity-0 group-hover/desc:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 p-3 md:p-4 rounded-lg border border-rose-400/30 backdrop-blur-sm">
                        <h4 className="font-semibold text-rose-300 mb-1 md:mb-2 text-sm md:text-base">Impact Made:</h4>
                        <p className="text-sm md:text-base text-gray-300">{activity.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Extra-Curricular Pagination */}
            {Math.ceil(extraCurricularActivities.length / itemsPerPage) > 1 && (
              <div className="flex justify-center cursor-pointer mt-auto">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setExtraCurricularPage(Math.max(1, extraCurricularPage - 1))}
                        className={`${extraCurricularPage === 1 ? "pointer-events-none opacity-50" : "hover:bg-rose-500/20 hover:text-rose-300"} bg-gray-800/80 text-gray-300 border-rose-400/30 text-sm md:text-base`}
                      />
                    </PaginationItem>
                    {extraCurricularPage > 1 && (
                      <PaginationItem>
                        <PaginationLink
                          onClick={() => setExtraCurricularPage(extraCurricularPage - 1)}
                          className="hover:bg-rose-500/10 hover:text-rose-300 bg-gray-800/80 text-gray-300 border-rose-400/30"
                        >
                          {extraCurricularPage - 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem>
                      <PaginationLink
                        isActive={true}
                        className="bg-rose-500/20 text-rose-300 border-rose-400 bg-gray-800/80"
                      >
                        {extraCurricularPage}
                      </PaginationLink>
                    </PaginationItem>
                    {extraCurricularPage < Math.ceil(extraCurricularActivities.length / itemsPerPage) && (
                      <PaginationItem>
                        <PaginationLink
                          onClick={() => setExtraCurricularPage(extraCurricularPage + 1)}
                          className="hover:bg-rose-500/10 hover:text-rose-300 bg-gray-800/80 text-gray-300 border-rose-400/30"
                        >
                          {extraCurricularPage + 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          setExtraCurricularPage(
                            Math.min(Math.ceil(extraCurricularActivities.length / itemsPerPage), extraCurricularPage + 1),
                          )
                        }
                        className={`${extraCurricularPage === Math.ceil(extraCurricularActivities.length / itemsPerPage) ? "pointer-events-none opacity-50" : "hover:bg-rose-500/20 hover:text-rose-300"} bg-gray-800/80 text-gray-300 border-rose-400/30`}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overall Activities/Events */}
      <div className="bg-gray-900 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-r from-sky-500/20 to-lavender-500/20 mb-3 md:mb-4">
              <TrendingUp className="h-5 md:h-6 w-5 md:w-6 text-sky-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Overall Activities & Events</h2>
            <p className="text-base md:text-lg text-gray-300">
              University-wide events and activities that have contributed to my holistic development
            </p>
          </div>

          <div className="flex flex-col min-h-[500px] md:min-h-[600px]">
            <div className="flex-grow grid lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
              {overallActivitiesEvent.slice((overallPage - 1) * itemsPerPage, overallPage * itemsPerPage).map((activity, index) => (
                <div
                  key={index}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl shadow-sky-500/10 overflow-hidden hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 border border-gray-700/50 hover:border-sky-400/30 flex flex-col min-h-[400px] md:min-h-[500px]"
                >
                  <div className="relative w-full aspect-video">
                  <img 
                    src={activity.image}
                    alt={activity.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-2 md:mb-3">
                      <div className="relative group">
                        <h3 className="text-lg md:text-xl font-bold text-white pr-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                          {activity.title}
                        </h3>
                        <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-sky-400/0 via-sky-400/50 to-sky-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute -top-2 left-0 w-full h-1 bg-gradient-to-r from-sky-400/0 via-sky-400/50 to-sky-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 bg-sky-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                      </div>
                      <span className="bg-gradient-to-r from-sky-500/20 to-lavender-500/20 text-sky-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-sky-400/30 shrink-0">
                        {activity.role}
                      </span>
                    </div>
                    <div className="flex items-center mb-2 md:mb-3">
                      <Calendar className="h-3 md:h-4 w-3 md:w-4 text-sky-400 mr-2 shrink-0" />
                      <span className="text-sm md:text-base text-gray-400">{activity.period}</span>
                    </div>
                    <div className="relative group/desc">
                      <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed line-clamp-4 group-hover/desc:line-clamp-none transition-all duration-300 overflow-hidden">
                        {activity.description}
                      </p>
                      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-gray-800/80 to-transparent opacity-100 group-hover/desc:opacity-0 transition-opacity duration-300 pointer-events-none"></div>
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-400/0 via-sky-400/30 to-sky-400/0 opacity-0 group-hover/desc:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-400 italic border-l-2 border-sky-400/30 pl-2 md:pl-3 mt-auto">{activity.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Overall Activities Pagination */}
            {Math.ceil(overallActivitiesEvent.length / itemsPerPage) > 1 && (
              <div className="flex justify-center cursor-pointer mt-auto">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setOverallPage(Math.max(1, overallPage - 1))}
                        className={`${overallPage === 1 ? "pointer-events-none opacity-50" : "hover:bg-sky-500/20 hover:text-sky-300"} bg-gray-800/80 text-gray-300 border-sky-400/30 text-sm md:text-base`}
                      />
                    </PaginationItem>
                    {overallPage > 1 && (
                      <PaginationItem>
                        <PaginationLink
                          onClick={() => setOverallPage(overallPage - 1)}
                          className="hover:bg-sky-500/10 hover:text-sky-300 bg-gray-800/80 text-gray-300 border-sky-400/30"
                        >
                          {overallPage - 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem>
                      <PaginationLink
                        isActive={true}
                        className="bg-sky-500/20 text-sky-300 border-sky-400 bg-gray-800/80"
                      >
                        {overallPage}
                      </PaginationLink>
                    </PaginationItem>
                    {overallPage < Math.ceil(overallActivitiesEvent.length / itemsPerPage) && (
                      <PaginationItem>
                        <PaginationLink
                          onClick={() => setOverallPage(overallPage + 1)}
                          className="hover:bg-sky-500/10 hover:text-sky-300 bg-gray-800/80 text-gray-300 border-sky-400/30"
                        >
                          {overallPage + 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          setOverallPage(Math.min(Math.ceil(overallActivitiesEvent.length / itemsPerPage), overallPage + 1))
                        }
                        className={`${overallPage === Math.ceil(overallActivitiesEvent.length / itemsPerPage) ? "pointer-events-none opacity-50" : "hover:bg-sky-500/20 hover:text-sky-300"} bg-gray-800/80 text-gray-300 border-sky-400/30`}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Skills Developed */}
      <div className="bg-gray-800/50 backdrop-blur-sm py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Skills Developed Through Activities</h2>
            <p className="text-base md:text-lg text-gray-300">Key competencies gained through active participation</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { skill: "Leadership", description: "Leading teams and organizing events", color: "rose" },
              { skill: "Communication", description: "Public speaking and interpersonal skills", color: "lavender" },
              { skill: "Project Management", description: "Planning and executing initiatives", color: "mint" },
              { skill: "Cultural Sensitivity", description: "Working with diverse communities", color: "sky" },
              { skill: "Problem Solving", description: "Addressing challenges creatively", color: "peach" },
              { skill: "Teamwork", description: "Collaborating effectively with others", color: "sage" },
              { skill: "Time Management", description: "Balancing multiple commitments", color: "coral" },
              { skill: "Social Responsibility", description: "Understanding community needs", color: "lilac" },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:shadow-${item.color}-500/20 transition-all duration-300 text-center border border-gray-700/50 hover:border-${item.color}-400/30 hover:scale-105`}
              >
                <h3 className={`font-bold text-white mb-2 text-base md:text-lg`}>{item.skill}</h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{item.description}</p>
                <div
                  className={`h-1 w-0 group-hover:w-full bg-gradient-to-r from-${item.color}-400 to-${item.color}-300 transition-all duration-500 mt-3 md:mt-4 mx-auto rounded-full`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities
