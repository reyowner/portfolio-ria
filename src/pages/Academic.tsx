import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  BookOpen,
  User,
  Trophy,
  GraduationCap,
  Camera,
  ExternalLink,
} from "lucide-react";

const Academic = () => {
  const keyMilestones = [
    {
      title: "Thesis Defended",
      date: "S.Y. 2025 - 2026",
      detail:
        "Successfully defended my undergraduate thesis, presenting both research rigor and practical classroom implications in Social Studies education.",
      icon: Trophy,
    },
    {
      title: "Internship Completed",
      date: "4th Year - 2nd Semester",
      detail:
        "Completed practice teaching and internship requirements, applying pedagogy, classroom management, and learner-centered strategies in real teaching environments.",
      icon: GraduationCap,
    },
    {
      title: "Graduating Candidate",
      date: "Class of 2026",
      detail:
        "Now in the final stage of the BSEd Social Studies program, carrying lessons from PUP into my transition from student to professional educator.",
      icon: BookOpen,
    },
  ];

  const internshipJourney = [
    {
      title: "Deployment Day",
      phase: "Deployment",
      description:
        "Served as both a Field Study student and Practice Teacher at San Juan National High School on October 16, 2025, gaining firsthand exposure to the school environment and classroom dynamics during deployment.",
      image: "/academic-journey/internship-1.jpg",
      imageAlt: "Deployment day",
      orientation: "landscape",
    },
    {
      title: "First Day of Practice Teaching",
      phase: "Practice Teaching",
      description:
        "Began my practice teaching journey on November 24, 2025, handling both Grade 7 and Grade 10 learners while gradually building confidence in classroom management and instructional delivery.",
      image: "/academic-journey/internship-2.jpg",
      imageAlt: "First day of practice teaching",
      orientation: "portrait",
    },
    {
      title: "Final Demonstration Teaching",
      phase: "Demonstration Teaching",
      description:
        "Successfully conducted my final demonstration teaching on February 20, 2026, earning a rating of 4.96 out of 5.0, reflecting strong lesson execution, learner engagement, and instructional effectiveness.",
      image: "/academic-journey/internship-3.jpg",
      imageAlt: "Final demonstration teaching",
      orientation: "landscape",
    },
    {
      title: "Final Reflection",
      phase: "Reflection",
      description:
        "Developed resilience, adaptability, and a deeper understanding of learner-centered instruction through continuous teaching experiences, while improving my ability to design engaging lessons and respond to diverse classroom needs.",
      image: "/academic-journey/internship-4.jpg",
      imageAlt: "Final reflection",
      orientation: "portrait",
    },
  ];

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
            <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
              Academic Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              From student to future educator—shaped by learning, practice, and
              purpose
            </p>
          </div>
        </div>
      </div>

      {/* Achievement Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <Trophy className="h-10 md:h-12 w-10 md:w-12 mx-auto text-lavender-400 mb-3 md:mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            PUP Milestones
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            This section highlights the biggest achievements in my journey as a
            BSEd Social Studies student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {keyMilestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-700/50 hover:border-lavender-400/30 transition-all duration-300 shadow-xl shadow-lavender-500/10"
              >
                <div className="w-fit p-2.5 rounded-lg bg-gradient-to-r from-lavender-500/20 to-rose-500/20 border border-lavender-400/30 mb-4">
                  <Icon className="h-5 w-5 text-lavender-300" />
                </div>
                <p className="text-xs md:text-sm text-lavender-300 mb-2">
                  {milestone.date}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {milestone.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {milestone.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Internship Journey Gallery */}
      <div className="bg-gray-800/50 backdrop-blur-sm py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <Camera className="h-10 md:h-12 w-10 md:w-12 mx-auto text-coral-400 mb-3 md:mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
              Internship Journey
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
              A visual portfolio that captures my internship journey from
              deployment day to final demonstration teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {internshipJourney.map((entry, index) => (
              <div
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-700/50 hover:border-coral-400/30 shadow-xl shadow-coral-500/10 hover:shadow-2xl hover:shadow-coral-500/20 transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={entry.image}
                    alt={entry.imageAlt}
                    className={`w-full object-cover ${
                      entry.orientation === "portrait"
                        ? "h-[420px] md:h-[480px]"
                        : "h-[260px] md:h-[320px]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/10 to-transparent" />
                  {/* <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-gray-900/70 border border-gray-600/40 text-xs text-coral-300">
                    {entry.phase}
                  </div> */}
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-semibold text-white mb-2 text-base md:text-lg">
                    {entry.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-10 bg-gray-800/80 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-gray-700/50 hover:border-sky-400/30 transition-all duration-300 p-5 md:p-7 text-center shadow-xl shadow-sky-500/10">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">
              Internship Project Website
            </h3>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto mb-4 md:mb-6">
              Explore our intern team website for San Juan National High School,
              including field study and teaching internship documentation.
            </p>
            <a
              href="https://ssinag2026.wixsite.com/sanjuan-nhs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-sky-500/20 to-lavender-500/20 border border-sky-400/30 text-white hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 hover:scale-105"
            >
              Visit Internship Website
              <ExternalLink className="h-4 w-4 md:h-5 md:w-5 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Model Professors Section */}
      <div className="bg-gray-900 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <User className="h-10 md:h-12 w-10 md:w-12 mx-auto text-rose-400 mb-3 md:mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
              Encounters with Model Professors
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              Inspiring educators who have shaped my teaching philosophy
            </p>
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
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                    Prof. Joey T. Danting
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    Sir Joey has been our professor in several major courses
                    related to Social Studies since our second year, including
                    CWTS. He's an excellent educator whose teachings truly leave
                    a mark. He incorporates real-life experiences in his lessons
                    and consistently challenges our critical thinking—a skill
                    that I believe is the most essential in the 21st century.
                    His classes are never boring; his wit and humor are always a
                    bonus that makes learning even more enjoyable.
                  </p>
                  {/* Quote */}
                  <div className="bg-gradient-to-r from-rose-500/20 to-coral-500/20 p-3 md:p-4 rounded-lg border border-rose-400/30 backdrop-blur-sm">
                    <p className="text-xs md:text-sm text-rose-300 italic">
                      "Critical thinking isn't just a skill—it's a way of seeing
                      the world. Challenge your assumptions, question
                      everything, and never stop learning."
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
                    alt="Prof. Manolito San Jose"
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                    Prof. Manolito San Jose
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    He taught us courses related to Law and Governance. What
                    stood out most about him was how he always ensured we were
                    learning—not just memorizing concepts, but understanding
                    them. His commitment to our academic growth made his classes
                    not just informative but also meaningful.
                  </p>
                  {/* Quote */}
                  <div className="bg-gradient-to-r from-lavender-500/20 to-sky-500/20 p-3 md:p-4 rounded-lg border border-lavender-400/30 backdrop-blur-sm">
                    <p className="text-xs md:text-sm text-lavender-300 italic">
                      "Understanding is the key to mastery. Don't just
                      memorize—comprehend, analyze, and apply what you learn."
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
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                    Prof. Junior Lim
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    Prof. Lim has been one of our instructors since our second
                    year. He's brilliant and always full of wisdom. One standout
                    feature is his powerful and engaging speaking voice—you
                    simply can't help but listen. He's a clear expert in the
                    field of Economics, and he makes even the most complex
                    topics easier to understand through well-structured
                    discussions and examples.
                  </p>
                  {/* Quote */}
                  <div className="bg-gradient-to-r from-mint-500/20 to-sage-500/20 p-3 md:p-4 rounded-lg border border-mint-400/30 backdrop-blur-sm">
                    <p className="text-xs md:text-sm text-mint-300 italic">
                      "Economics isn't just about numbers and theories—it's
                      about understanding how the world works and making
                      informed decisions."
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
                    alt="Prof. Junie Rosales"
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                    Prof. Junie Rosales
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    As a former dean of the College of Education, her expertise
                    in the field shines through in every class. Her intelligence
                    and command of the subject matter make learning feel
                    purposeful. She brings depth to discussions and presents
                    content with clarity and authority that only years of
                    experience can provide.
                  </p>
                  {/* Quote */}
                  <div className="bg-gradient-to-r from-peach-500/20 to-coral-500/20 p-3 md:p-4 rounded-lg border border-peach-400/30 backdrop-blur-sm">
                    <p className="text-xs md:text-sm text-peach-300 italic">
                      "Education is not just about imparting knowledge—it's
                      about shaping minds and building character."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professor 5 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl shadow-sky-500/10 overflow-hidden border border-gray-700/50 hover:border-sky-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/20">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative group">
                  <img
                    src="/academic-journey/prof5.jpg"
                    alt="Prof. Jamaica Gatan"
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                    Prof. Jamaica Gatan
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    So far, she's my favorite professor. She speaks with such
                    wisdom and grace, and she has a soothing yet commanding
                    voice that draws you in. She was our instructor in
                    Technology in Teaching 2, and her mastery of the course
                    content was very evident. Every class with her felt
                    impactful—she's not only knowledgeable but also genuinely
                    passionate about teaching.
                  </p>
                  {/* Quote */}
                  <div className="bg-gradient-to-r from-sky-500/20 to-lavender-500/20 p-3 md:p-4 rounded-lg border border-sky-400/30 backdrop-blur-sm">
                    <p className="text-xs md:text-sm text-sky-300 italic">
                      "Teaching is an art that combines knowledge, passion, and
                      the ability to connect with your students."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professor 6 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl shadow-sage-500/10 overflow-hidden border border-gray-700/50 hover:border-sage-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-sage-500/20">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative group">
                  <img
                    src="/academic-journey/prof6.jpg"
                    alt="Prof. Carmela Asebias"
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                    Prof. Carmela Asebias
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    She taught us Foundations of Special and Inclusive
                    Education—one of the most eye-opening subjects in our
                    program. What I loved most was how she allowed us to
                    discover our own approaches to inclusive education. She
                    empowered us to think creatively and compassionately. My
                    favorite part was when we created a music video as our
                    midterm output—an experience that showed us how learning can
                    be meaningful and fun at the same time.
                  </p>
                  {/* Quote */}
                  <div className="bg-gradient-to-r from-sage-500/20 to-mint-500/20 p-3 md:p-4 rounded-lg border border-sage-400/30 backdrop-blur-sm">
                    <p className="text-xs md:text-sm text-sage-300 italic">
                      "Inclusive education is not just about accommodating
                      differences—it's about celebrating them and creating a
                      space where everyone can thrive."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professor 7 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl shadow-coral-500/10 overflow-hidden border border-gray-700/50 hover:border-coral-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-coral-500/20">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative group">
                  <img
                    src="/academic-journey/prof7.jpg"
                    alt="Prof. Marlon Agoy-Agoy"
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                    Prof. Marlon Agoy-Agoy
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    He's the only professor from a minor subject that I felt
                    compelled to include in this list—and that says a lot. He
                    left a strong impression during my freshman year. He taught
                    us The Life and Works of Rizal, and his mastery of the
                    subject was impressive. It was as if he personally knew
                    Rizal or had long conversations with him. His storytelling,
                    depth of knowledge, and passion for the subject made the
                    class unforgettable.
                  </p>
                  {/* Quote */}
                  <div className="bg-gradient-to-r from-coral-500/20 to-rose-500/20 p-3 md:p-4 rounded-lg border border-coral-400/30 backdrop-blur-sm">
                    <p className="text-xs md:text-sm text-coral-300 italic">
                      "History comes alive when we understand the human stories
                      behind the events. Let's learn from the past to shape a
                      better future."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Academic;
