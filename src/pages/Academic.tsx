import Navigation from "../components/Navigation"
import TimelineCard from "../components/TimelineCard"
import { BookOpen, FileText, User } from "lucide-react"

const Academic = () => {
  const academicJourney = [
    {
      title: "Application Process",
      date: "December 2021",
      description:
        "The entire application process was relatively smooth—the portal was easy to navigate and more accessible compared to the other universities I applied to. I remember choosing five education-related programs, mostly because I was trying to avoid quota courses. Honestly, PUP wasn't my first choice. It was my backup. But sometimes, life has other plans. What I thought was Plan B turned out to be exactly where I was meant to be.",
      image: "/academic-journey/application.jpg",
      imageCaption:
        "My CAEPUP 2021 application form—my first step towards becoming a PUP student or in general, a college student",
    },
    {
      title: "Acceptance at PUP",
      date: "June 15, 2022",
      description:
        "At that very moment, it really sank in—I was officially a college student. I passed CAEPUP. I passed PUP. After months of hoping, waiting, and silently doubting myself, I finally made it. That one line of confirmation changed everything. It wasn't just about getting into a university; it was about proving to myself that I could. This was the beginning of a new chapter, and I was ready to turn the page.",
      image: "/academic-journey/acceptance.jpg",
      imageCaption: "Admission notice from PUP Sta. Mesa confirming my acceptance into the BSEd Social Studies program",
    },
    {
      title: "First Step",
      date: "August 31, 2022",
      description:
        "On the last day of enrollment during the pandemic, I submitted my documents to PUP under the rain—with the help of my sister, who gave me a quick tour of her own college memories. That moment marked the start of my journey toward independence. Seeing the PUP gate for the first time, I knew I was about to begin something life-changing. Looking back, I'm grateful I took that first step.",
      image: "/academic-journey/first-step.jpg",
      imageCaption:
        "We waited outside PUP in the rain during enrollment, unable to enter due to strict safety protocols",
    },
    {
      title: "Enrollment Process (Officially an Iskolar ng Bayan)",
      date: "September 26, 2022",
      description:
        "I finally got access to my SIS account—and with that, I was officially enrolled! I can now truly call myself an Iskolar ng Bayan. After all the waiting, the stress, and the back-and-forth with documents, it finally happened. It feels surreal. I'm officially a student—and the journey has just begun.",
      image: "/academic-journey/enrollment.jpg",
      imageCaption:
        "Proof of enrollment: Officially registered as a first-year BSEd Social Studies student for S.Y. 2022–2023",
    },
  ]

  const currentCourses = [
    {
      name: "Assessment and Evaluation in Social Studies",
      description:
        "This course taught us how to create, analyze, and apply various assessment tools tailored to Social Studies. It emphasized fair, valid, and reliable evaluations to monitor student learning and improve instructional strategies.",
    },
    {
      name: "Production of Social Studies Instructional Materials",
      description:
        "We learned how to design and produce effective, engaging, and localized instructional materials for teaching Social Studies. This course highlighted creativity and contextualization in addressing learners' diverse needs.",
    },
    {
      name: "Trends and Issues in Social Studies",
      description:
        "This course explored current events, emerging issues, and educational reforms affecting the teaching of Social Studies. It encouraged critical thinking and reflection on how global and local developments influence classroom instruction.",
    },
    {
      name: "Thesis Writing",
      description:
        "Focused on the fundamentals of research, this course guided us through the process of writing an undergraduate thesis—from formulating a problem, reviewing literature, designing a methodology, and writing findings.",
    },
    {
      name: "Integrative Methods in Teaching Social Studies",
      description:
        "We explored interdisciplinary and integrative approaches in teaching Social Studies, blending content and pedagogy across fields to create meaningful, learner-centered experiences.",
    },
    {
      name: "Assessment in Learning 2",
      description:
        "A continuation of assessment principles, this course focused on developing performance-based tasks, interpreting data, and using assessments to inform instruction and support student growth.",
    },
    {
      name: "The Teacher and the School Curriculum",
      description:
        "This course deepened our understanding of curriculum development and the teacher's vital role in planning, implementing, and evaluating the school curriculum in line with national standards.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 via-slate-800 to-gray-800 text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-16 md:w-20 h-16 md:h-20 bg-peach-400/20 rounded-full animate-pulse shadow-lg shadow-peach-400/30"></div>
          <div className="absolute bottom-10 right-10 w-12 md:w-16 h-12 md:h-16 bg-coral-400/20 rounded-full animate-bounce shadow-lg shadow-coral-400/30"></div>
          <div className="absolute top-1/2 left-1/3 w-8 md:w-12 h-8 md:h-12 bg-rose-400/20 rounded-full animate-pulse delay-700 shadow-lg shadow-rose-400/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <BookOpen className="h-12 md:h-16 w-12 md:w-16 mx-auto mb-4 md:mb-6 text-peach-400 drop-shadow-lg" />
            <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">Academic Journey</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              From application to enrollment and through my coursework - documenting my path through the BSED-SS program
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center">My Academic Timeline</h2>
        <div className="relative">
          {academicJourney.map((item, index) => (
            <TimelineCard
              key={index}
              title={item.title}
              date={item.date}
              description={item.description}
              image={item.image}
              imageCaption={item.imageCaption}
            />
          ))}
        </div>
      </div>

      {/* Current Courses */}
      <div className="bg-gray-800/50 backdrop-blur-sm py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <FileText className="h-10 md:h-12 w-10 md:w-12 mx-auto text-coral-400 mb-3 md:mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Current Coursework</h2>
            <p className="text-base md:text-lg text-gray-300">Courses currently enrolled in under the Bachelor of Secondary Education Major in Social Studies program, 3rd Year - 2nd Semester</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {currentCourses.map((course, index) => (
              <div
                key={index}
                className={`bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-xl hover:shadow-coral-500/20 transition-all duration-300 border border-gray-700/50 hover:border-coral-400/30 hover:scale-105 ${
                  index === currentCourses.length - 1 && currentCourses.length % 3 !== 0 ? "lg:col-start-2" : ""
                }`}
              >
                <h3 className="font-semibold text-white mb-2 md:mb-3 text-base md:text-lg">{course.name}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{course.description}</p>
                <div className="w-0 h-1 bg-gradient-to-r from-coral-400 to-peach-400 group-hover:w-full transition-all duration-500 mt-3 md:mt-4 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Model Professors Section */}
      <div className="bg-gray-900 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <User className="h-10 md:h-12 w-10 md:w-12 mx-auto text-rose-400 mb-3 md:mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Encounters with Model Professors</h2>
            <p className="text-base md:text-lg text-gray-300">Inspiring educators who have shaped my teaching philosophy</p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {/* Professor 1 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl shadow-rose-500/10 overflow-hidden border border-gray-700/50 hover:border-rose-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/20">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative group">
                  <img
                    src="/academic-journey/prof1.jpg"
                    alt="Prof. Joey T. Danting"
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Prof. Joey T. Danting</h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    Sir Joey has been our professor in several major courses related to Social Studies since our second
                    year, including CWTS. He's an excellent educator whose teachings truly leave a mark. He incorporates
                    real-life experiences in his lessons and consistently challenges our critical thinking—a skill that
                    I believe is the most essential in the 21st century. His classes are never boring; his wit and humor
                    are always a bonus that makes learning even more enjoyable.
                  </p>
                  {/* Quote */}
                  <div className="bg-gradient-to-r from-rose-500/20 to-coral-500/20 p-3 md:p-4 rounded-lg border border-rose-400/30 backdrop-blur-sm">
                    <p className="text-xs md:text-sm text-rose-300 italic">
                      "Critical thinking isn't just a skill—it's a way of seeing the world. Challenge your assumptions,
                      question everything, and never stop learning."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professor 2 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl shadow-lavender-500/10 overflow-hidden border border-gray-700/50 hover:border-lavender-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-lavender-500/20">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative group">
                  <img
                    src="/academic-journey/prof2.jpg"
                    alt="Prof. Maria Santos"
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Prof. Maria Santos</h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    He taught us courses related to Law and Governance. What stood out most about him was how he always
                    ensured we were learning—not just memorizing concepts, but understanding them. His commitment to our
                    academic growth made his classes not just informative but also meaningful.
                  </p>
                  {/* Quote */}
                  <div className="bg-gradient-to-r from-lavender-500/20 to-sky-500/20 p-3 md:p-4 rounded-lg border border-lavender-400/30 backdrop-blur-sm">
                    <p className="text-xs md:text-sm text-lavender-300 italic">
                      "Understanding is the key to mastery. Don't just memorize—comprehend, analyze, and apply what you
                      learn."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professor 3 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl shadow-mint-500/10 overflow-hidden border border-gray-700/50 hover:border-mint-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-mint-500/20">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative group">
                  <img
                    src="/academic-journey/prof3.jpg"
                    alt="Prof. Junior Lim"
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Prof. Junior Lim</h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    Prof. Lim has been one of our instructors since our second year. He's brilliant and always full of
                    wisdom. One standout feature is his powerful and engaging speaking voice—you simply can't help but
                    listen. He's a clear expert in the field of Economics, and he makes even the most complex topics
                    easier to understand through well-structured discussions and examples.
                  </p>
                  {/* Quote */}
                  <div className="bg-gradient-to-r from-mint-500/20 to-sage-500/20 p-3 md:p-4 rounded-lg border border-mint-400/30 backdrop-blur-sm">
                    <p className="text-xs md:text-sm text-mint-300 italic">
                      "Economics isn't just about numbers and theories—it's about understanding how the world works and
                      making informed decisions."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professor 4 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl shadow-peach-500/10 overflow-hidden border border-gray-700/50 hover:border-peach-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-peach-500/20">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative group">
                  <img
                    src="/academic-journey/prof4.jpg"
                    alt="Prof. Sarah Johnson"
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Prof. Sarah Johnson</h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    Prof. Johnson's teaching style is unique and effective. She combines traditional teaching methods with
                    modern technology, creating an engaging learning environment. Her passion for history and social studies
                    is contagious, and she has a way of making complex historical events relatable and interesting.
                  </p>
                  {/* Quote */}
                  <div className="bg-gradient-to-r from-peach-500/20 to-coral-500/20 p-3 md:p-4 rounded-lg border border-peach-400/30 backdrop-blur-sm">
                    <p className="text-xs md:text-sm text-peach-300 italic">
                      "History isn't just about dates and events—it's about understanding the human story and learning from
                      our past to shape a better future."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Academic
