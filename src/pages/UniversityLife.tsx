import Navigation from "../components/Navigation"
import { School, Star, Users } from "lucide-react"

const UniversityLife = () => {
  const lifeExperiences = [
    {
      title: "1st Day of Classes (Balik Sinta)",
      description:
        "My Balik Sinta experience was quite funny—we weren't really supposed to attend since we didn't have a pass. But surprisingly, we still got in! I had so much fun, especially because I got to bond with my best friends, Sarah and Zel, and finally met some of my blockmates.",
      image: "/activities/university-life/first-day.mp4",
      caption: "Virtual class session with my Social Studies methods course",
    },
    {
      title: "ID Issuance & Meet-up with Friends",
      description:
        "It was the last day of ID issuance, and I chose that day on purpose because I wanted to meet up with my friends—Raine, Ace, Rei, and Ara. It felt exciting to finally get my ID and spend the day with them.",
      image: "photo-1519389950473-47ba0277781c",
      caption: "First day back on campus - excited to be learning together again",
    },
    {
      title: "First Face-to-Face Class",
      description:
        "Our first ever face-to-face session happened during our NSTP-CWTS class. It was a fun and memorable moment because I got to meet more of our blockmates in person for the first time. It was also the first time our entire class was complete—together with BSEDMT 1-1N and BSEDMT 1-1D.",
      image: "photo-1498050108023-c5249f4df085",
      caption: "Late night study session in the university library preparing for comprehensive exams",
    },
    {
      title: "Block Team Building",
      description:
        "It was our block's first team building, held at Ninoy Aquino Parks and Wildlife Center. We finally got to meet our new blockmates and spend quality time together. The day was filled with fun games, bonding activities, and memories that we'll always cherish.",
      image: "photo-1721322800607-8c38375eef04",
      caption: "Attending the annual Education Week celebration in the university auditorium",
    },
    {
      title: "Block's First Award at COEDunong",
      description:
        "It was a proud moment for our block as we received our very first award at COEDunong. All our efforts, teamwork, and participation were recognized, and it made us feel more united and motivated. It was a reminder that even small wins are worth celebrating—especially when shared with people who work hard together.",
      image: "photo-1721322800607-8c38375eef04",
      caption: "Attending the annual Education Week celebration in the university auditorium",
    },
    {
      title: "First Demo Teaching",
      description:
        "I performed my first peer demo teaching as our final requirement. To be honest, it wasn't what I expected—it didn't go the way I envisioned. I know I could've done better. But instead of dwelling on it, I took it as a lesson and motivation to improve and grow as a future educator.",
      image: "photo-1721322800607-8c38375eef04",
      caption: "Attending the annual Education Week celebration in the university auditorium",
    },
    {
      title: "Thesis Title Defense",
      description:
        "We defended our thesis title, 'History Without Boundary: The Integration of Non-Immersive Virtual Reality as a Pedagogical Technique in Teaching World History.' It was a nerve-wracking but fulfilling experience. Our title was accepted with minor revisions, and that moment marked the official beginning of our thesis journey.",
      image: "photo-1721322800607-8c38375eef04",
      caption: "Attending the annual Education Week celebration in the university auditorium",
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
          <Star className="h-8 w-8 md:h-12 md:w-12 mx-auto text-lavender-400 mb-3 md:mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Memorable Campus Life Moments</h2>
          <p className="text-base md:text-lg text-gray-300">Visual journey through my university experiences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {lifeExperiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl shadow-sky-500/10 overflow-hidden hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 border border-gray-700/50 hover:border-sky-400/30"
            >
              <div className="relative w-[330px] h-[220px] md:w-[650px] md:h-[400px] lg:w-full lg:h-[350px] lg:aspect-video bg-gradient-to-r from-lilac-500/30 to-pink-500/30 rounded-2xl">
                {experience.image.endsWith('.mp4') ? (
                  <video
                    src={experience.image}
                    className="absolute inset-0 w-full h-full object-contain object-center rounded-xl md:rounded-2xl shadow-lg shadow-sky-500/10 border border-gray-700/50"
                    controls
                    playsInline
                  />
                ) : (
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="absolute inset-0 w-full h-full object-contain object-center rounded-xl md:rounded-2xl shadow-lg shadow-sky-500/10 border border-gray-700/50"
                  />
                )}
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{experience.title}</h3>
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed">{experience.description}</p>
                <p className="text-xs md:text-sm text-gray-400 italic border-l-2 border-sky-400/30 pl-3">{experience.caption}</p>
              </div>
            </div>
          ))}
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
                description: "Upholding honesty, fairness, and strong moral principles in both academic and personal life.",
                example: "Avoiding academic dishonesty, being transparent in group work, and holding myself accountable for my responsibilities.",
                color: "lavender",
              },
              {
                value: "Nationalism",
                description:
                  "Fostering love for the country by building civic competence and understanding the nation's history, government, and social realities.",
                example: "Engaging deeply with Social Studies subjects, promoting active citizenship, and creating learning materials that encourage students to participate in nation-building.",
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
                description: "Being aware of my responsibility to contribute positively to the community and advocate for equity and justice.",
                example: "Joining outreach programs and promoting inclusive education in practice teaching and group outputs.",
                color: "peach",
              },
              {
                value: "Innovation",
                description: "Being open to new ideas, approaches, and technologies that can improve teaching and learning.",
                example: "Exploring virtual reality, using creative presentation tools, and adapting lessons to modern learners' needs.",
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
