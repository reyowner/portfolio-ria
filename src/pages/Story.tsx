import Navigation from "../components/Navigation"
import { Heart, Mountain, Star, Compass } from "lucide-react"

const Story = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-pink-100 text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-purple-500" />
            <h1 className="text-4xl font-bold mb-4 text-gray-800">My Story</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A narrative of my university journey - challenges overcome, lessons learned, and dreams for the future
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-12 border-l-4 border-coral">
          <h2 className="text-3xl font-bold text-white mb-6">The Beginning of My Teaching Journey</h2>
          <div className="prose prose-lg text-gray-300 leading-relaxed">
            <p className="mb-6">
              When I first stepped into the hallways of PUP, I carried with me a dream that had been burning in my heart
              since childhood - to become a teacher who would make a difference in young minds. The Bachelor of
              Secondary Education - Social Studies program wasn't just a course choice for me; it was the pathway to
              fulfilling my life's purpose.
            </p>
            <p className="mb-6">
              Little did I know that this journey would test me in ways I never imagined, shape me into someone I never
              knew I could become, and teach me lessons that extend far beyond the classroom walls.
            </p>
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Mountain className="h-12 w-12 mx-auto text-salmon mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Overcoming Challenges</h2>
            <p className="text-lg text-gray-300">The obstacles that tested my resolve and strengthened my character</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Academic Challenges */}
            <div className="bg-gradient-to-br from-salmon/10 to-coral/10 bg-gray-900 rounded-lg p-8 shadow-lg border-l-4 border-salmon">
              <h3 className="text-2xl font-bold text-white mb-6">Academic Challenges</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-vibrant pl-6">
                  <h4 className="font-bold text-white mb-2">The Pandemic Transition</h4>
                  <p className="text-gray-300">
                    When COVID-19 hit during my first year, the sudden shift to online learning felt overwhelming. I
                    struggled with technology, missed the face-to-face interactions, and found it challenging to stay
                    motivated while studying from home.
                  </p>
                  <p className="text-vibrant font-semibold mt-2">How I overcame it:</p>
                  <p className="text-gray-300">
                    I created a dedicated study space at home, joined virtual study groups with classmates, and
                    developed a strict daily routine. I also reached out to professors for help and utilized online
                    resources to improve my digital literacy skills.
                  </p>
                </div>

                <div className="border-l-4 border-coral pl-6">
                  <h4 className="font-bold text-white mb-2">Research Methods Course</h4>
                  <p className="text-gray-300">
                    Research methodology was particularly challenging for me. The statistical analysis, research design,
                    and academic writing standards seemed daunting at first.
                  </p>
                  <p className="text-coral font-semibold mt-2">How I overcame it:</p>
                  <p className="text-gray-300">
                    I sought help from my professor during office hours, formed a study group with classmates, and
                    practiced research writing regularly. I also attended additional workshops on academic writing and
                    statistical analysis.
                  </p>
                </div>

                <div className="border-l-4 border-golden pl-6">
                  <h4 className="font-bold text-white mb-2">Balancing Theory and Practice</h4>
                  <p className="text-gray-300">
                    Connecting educational theories to actual classroom practice proved challenging, especially during
                    my first teaching demonstration.
                  </p>
                  <p className="text-golden font-semibold mt-2">How I overcame it:</p>
                  <p className="text-gray-300">
                    I observed experienced teachers, practiced teaching with my study group, and sought feedback from
                    professors. I also volunteered for community teaching programs to gain more practical experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Challenges */}
            <div className="bg-gradient-to-br from-golden/10 to-vibrant/10 bg-gray-900 rounded-lg p-8 shadow-lg border-l-4 border-golden">
              <h3 className="text-2xl font-bold text-white mb-6">Personal Challenges</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-vibrant pl-6">
                  <h4 className="font-bold text-white mb-2">Financial Constraints</h4>
                  <p className="text-gray-300">
                    Coming from a modest family background, financing my education was a constant worry. Buying
                    textbooks, paying for projects, and transportation costs added up quickly.
                  </p>
                  <p className="text-vibrant font-semibold mt-2">How I overcame it:</p>
                  <p className="text-gray-300">
                    I applied for scholarships, took on part-time tutoring jobs, and learned to budget carefully. I also
                    borrowed books from the library and formed study groups to share resources with classmates.
                  </p>
                </div>

                <div className="border-l-4 border-salmon pl-6">
                  <h4 className="font-bold text-white mb-2">Self-Doubt and Confidence Issues</h4>
                  <p className="text-gray-300">
                    There were moments when I questioned whether I was cut out for teaching, especially after difficult
                    teaching demonstrations or when I compared myself to more confident classmates.
                  </p>
                  <p className="text-salmon font-semibold mt-2">How I overcame it:</p>
                  <p className="text-gray-300">
                    I sought mentorship from professors, practiced positive self-talk, and celebrated small victories. I
                    also reminded myself of why I chose teaching in the first place and focused on continuous
                    improvement rather than perfection.
                  </p>
                </div>

                <div className="border-l-4 border-coral pl-6">
                  <h4 className="font-bold text-white mb-2">Time Management Struggles</h4>
                  <p className="text-gray-300">
                    Balancing academic work, extracurricular activities, part-time job, and personal life seemed
                    impossible at times.
                  </p>
                  <p className="text-coral font-semibold mt-2">How I overcame it:</p>
                  <p className="text-gray-300">
                    I learned to prioritize tasks, use planning tools and apps, and set realistic goals. I also learned
                    to say no to some opportunities to focus on what truly mattered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Growth and Learning */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Star className="h-12 w-12 mx-auto text-golden mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Lessons Learned and Growth</h2>
            <p className="text-lg text-gray-300">
              How challenges transformed me into a stronger, more resilient person
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg p-8 border-l-4 border-golden">
            <div className="prose prose-lg text-gray-300 leading-relaxed">
              <p className="mb-6">
                Each challenge I faced became a stepping stone to growth. The pandemic taught me resilience and
                adaptability - skills that will serve me well as a teacher in an ever-changing educational landscape.
                The academic struggles showed me the importance of seeking help and the power of collaboration.
              </p>
              <p className="mb-6">
                Financial constraints taught me resourcefulness and the value of education. They also deepened my
                empathy for students who might face similar challenges, making me more understanding and supportive as a
                future educator.
              </p>
              <p className="mb-6">
                Perhaps most importantly, overcoming self-doubt taught me that confidence isn't about being perfect -
                it's about being willing to learn, grow, and try again. This lesson will be invaluable when I stand
                before my own students, showing them that making mistakes is part of learning.
              </p>
              <p className="mb-6">
                Through time management struggles, I learned that balance isn't about doing everything perfectly, but
                about making conscious choices about where to invest my energy. This wisdom will help me guide my future
                students in prioritizing their own goals and responsibilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Future Plans */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Compass className="h-12 w-12 mx-auto text-coral mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Plans After Finishing BSED-SS</h2>
            <p className="text-lg text-gray-300">My vision for the future and goals as an educator</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Short-term Plans */}
            <div className="bg-gradient-to-br from-coral/10 to-golden/10 bg-gray-900 rounded-lg p-8 shadow-lg border-l-4 border-coral">
              <h3 className="text-2xl font-bold text-white mb-6">Short-term Plans (1-2 years)</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-coral/20 rounded-full p-2 mr-4 mt-1 border border-coral/30">
                    <Star className="h-5 w-5 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Pass the Licensure Examination for Teachers (LET)</h4>
                    <p className="text-gray-300">
                      I plan to take intensive review classes and dedicate focused study time to pass the LET with
                      flying colors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-coral/20 rounded-full p-2 mr-4 mt-1 border border-coral/30">
                    <Star className="h-5 w-5 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Begin Teaching Career</h4>
                    <p className="text-gray-300">
                      Apply for teaching positions in public schools, preferably in underserved communities where I can
                      make the most impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-coral/20 rounded-full p-2 mr-4 mt-1 border border-coral/30">
                    <Star className="h-5 w-5 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Continue Professional Development</h4>
                    <p className="text-gray-300">
                      Attend workshops, seminars, and training programs to enhance my teaching skills and stay updated
                      with educational trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Long-term Plans */}
            <div className="bg-gradient-to-br from-salmon/10 to-vibrant/10 bg-gray-900 rounded-lg p-8 shadow-lg border-l-4 border-salmon">
              <h3 className="text-2xl font-bold text-white mb-6">Long-term Plans (5-10 years)</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-salmon/20 rounded-full p-2 mr-4 mt-1 border border-salmon/30">
                    <Compass className="h-5 w-5 text-salmon" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Pursue Master's Degree</h4>
                    <p className="text-gray-300">
                      Enroll in a Master's program in Educational Leadership or Curriculum Development to deepen my
                      expertise and prepare for leadership roles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-salmon/20 rounded-full p-2 mr-4 mt-1 border border-salmon/30">
                    <Compass className="h-5 w-5 text-salmon" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Educational Leadership Role</h4>
                    <p className="text-gray-300">
                      Aspire to become a department head or curriculum coordinator to influence educational policy and
                      mentor new teachers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-salmon/20 rounded-full p-2 mr-4 mt-1 border border-salmon/30">
                    <Compass className="h-5 w-5 text-salmon" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Contribute to Education Research</h4>
                    <p className="text-gray-300">
                      Conduct research on innovative teaching methods in Social Studies and publish findings to
                      contribute to the field of education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="bg-gradient-to-r from-vibrant via-salmon to-coral text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">My Vision as an Educator</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <p className="text-xl leading-relaxed">
              "I envision myself as an educator who ignites curiosity about the world in my students. I want to be the
              teacher who helps students see the relevance of history in their daily lives, who encourages critical
              thinking about social issues, and who creates a classroom environment where every student feels valued and
              heard. My goal is not just to teach Social Studies, but to nurture informed, empathetic, and engaged
              citizens who will contribute positively to society."
            </p>
          </div>
        </div>
      </div>

      {/* Reflection */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 border-l-4 border-vibrant">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Final Reflection</h2>
            <div className="prose prose-lg text-gray-300 leading-relaxed">
              <p className="mb-6">
                As I look back on my journey through the BSED-SS program, I'm filled with gratitude for every experience
                - both the triumphs and the challenges. Each professor who believed in me, each classmate who supported
                me, and each obstacle I overcame has contributed to shaping me into the educator I'm becoming.
              </p>
              <p className="mb-6">
                The challenges I faced taught me resilience, empathy, and the importance of perseverance. They showed me
                that the path to becoming an effective teacher isn't smooth, but it's incredibly rewarding. Every
                difficulty I encountered as a student will help me better understand and support my future students who
                may face similar struggles.
              </p>
              <p className="mb-6">
                My university life at PUP has been more than just earning a degree - it's been a transformation. I
                entered as a hopeful young person with dreams of teaching, and I'm graduating as a confident, skilled,
                and passionate educator ready to make a difference in the world.
              </p>
              <p className="text-center font-semibold text-vibrant text-xl">
                The journey continues, and I'm excited for the chapters yet to be written.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
