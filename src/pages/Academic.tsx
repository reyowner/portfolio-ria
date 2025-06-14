import Navigation from "../components/Navigation"
import TimelineCard from "../components/TimelineCard"
import { BookOpen, FileText, User } from "lucide-react"

const Academic = () => {
  const academicJourney = [
    {
      title: "Application to PUP",
      date: "March 2020",
      description:
        "Applied to Polytechnic University of the Philippines for the Bachelor of Secondary Education - Social Studies program. Submitted all required documents including transcripts, recommendation letters, and personal statement expressing my passion for teaching social studies.",
      image: "photo-1486312338219-ce68d2c6f44d",
      imageCaption: "Completing my online application to PUP during the pandemic",
    },
    {
      title: "Enrollment Process",
      date: "June 2020",
      description:
        "Successfully enrolled in the BSED-SS program. Attended orientation sessions and met my academic advisors. Selected my first semester courses including Introduction to Teaching, Philippine History, and General Education subjects.",
      image: "photo-1519389950473-47ba0277781c",
      imageCaption: "First day of enrollment at PUP - nervous but excited to begin my teaching journey",
    },
    {
      title: "First Year Curriculum",
      date: "August 2020 - May 2021",
      description:
        "Completed foundational courses in education theory, Philippine history, world history, and general education requirements. Adapted to online learning due to the pandemic while maintaining academic excellence.",
      image: "photo-1581091226825-a6a2a5aee158",
      imageCaption: "Attending online classes from home during the pandemic",
    },
    {
      title: "Major Courses",
      date: "August 2021 - Present",
      description:
        "Diving deeper into specialized Social Studies education courses including Methods of Teaching Social Studies, Curriculum Development, Assessment in Social Studies, and advanced Philippine and World History courses.",
      image: "photo-1461749280684-dccba630e2f6",
      imageCaption: "Using technology to enhance learning in my education courses",
    },
  ]

  const currentCourses = [
    "Methods of Teaching Social Studies",
    "Assessment and Evaluation in Social Studies",
    "Philippine History and Government",
    "World History and Civilizations",
    "Curriculum Development in Social Studies",
    "Educational Psychology",
    "Classroom Management",
    "Research in Education",
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200 text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-amber-500" />
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Academic Journey</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From application to enrollment and through my coursework - documenting my path through the BSED-SS program
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">My Academic Timeline</h2>
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
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FileText className="h-12 w-12 mx-auto text-vibrant mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Current Coursework</h2>
            <p className="text-lg text-gray-300">Subjects I'm currently taking in my BSED-SS program</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCourses.map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-coral/20 to-golden/20 bg-gray-900 rounded-lg p-6 hover:shadow-lg transition-shadow border-l-4 border-vibrant"
              >
                <h3 className="font-semibold text-white mb-2">{course}</h3>
                <p className="text-gray-400 text-sm">
                  Essential course for developing teaching competencies in Social Studies education
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Model Professors Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <User className="h-12 w-12 mx-auto text-vibrant mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Encounters with Model Professors</h2>
            <p className="text-lg text-gray-300">Inspiring educators who have shaped my teaching philosophy</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg shadow-lg p-8 border-l-4 border-coral">
              <h3 className="text-xl font-bold text-white mb-4">Prof. Maria Santos</h3>
              <p className="text-gray-300 mb-4">
                "Professor Santos taught me that teaching Social Studies is not just about memorizing dates and events,
                but about helping students understand how history connects to their present lives. Her interactive
                teaching methods and passion for Philippine history inspired me to become a more engaging educator."
              </p>
              <div className="bg-coral/10 p-4 rounded-lg border border-coral/20">
                <p className="text-sm text-coral italic">
                  "A great teacher shows students not just what to think, but how to think critically about the world
                  around them."
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg p-8 border-l-4 border-golden">
              <h3 className="text-xl font-bold text-white mb-4">Prof. Juan Dela Cruz</h3>
              <p className="text-gray-300 mb-4">
                "Professor Dela Cruz's approach to curriculum development opened my eyes to the importance of creating
                relevant and culturally responsive lesson plans. His emphasis on student-centered learning has greatly
                influenced my teaching philosophy."
              </p>
              <div className="bg-golden/10 p-4 rounded-lg border border-golden/20">
                <p className="text-sm text-golden italic">
                  "Education is the most powerful weapon which you can use to change the world - and it starts with
                  understanding your students."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Academic
