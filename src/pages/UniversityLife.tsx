
import Navigation from '../components/Navigation';
import { School, Coffee, Users, Star } from 'lucide-react';

const UniversityLife = () => {
  const lifeExperiences = [
    {
      title: "Campus Life During Pandemic",
      description: "Adapting to online learning while maintaining connections with classmates through virtual study groups and online social activities.",
      image: "photo-1581091226825-a6a2a5aee158",
      caption: "Virtual class session with my Social Studies methods course"
    },
    {
      title: "Return to Face-to-Face Classes",
      description: "The joy and challenges of returning to campus after months of online learning. Reconnecting with professors and classmates in person.",
      image: "photo-1519389950473-47ba0277781c",
      caption: "First day back on campus - excited to be learning together again"
    },
    {
      title: "Library Study Sessions",
      description: "Countless hours spent in the PUP library, researching for papers, preparing for exams, and collaborating with study groups.",
      image: "photo-1498050108023-c5249f4df085",
      caption: "Late night study session in the university library preparing for comprehensive exams"
    },
    {
      title: "Campus Events and Celebrations",
      description: "Participating in university-wide celebrations, academic conferences, and cultural events that enriched my college experience.",
      image: "photo-1721322800607-8c38375eef04",
      caption: "Attending the annual Education Week celebration in the university auditorium"
    }
  ];

  const memorable_moments = [
    {
      title: "First Day Jitters",
      description: "I still remember my first day at PUP - feeling nervous but excited to begin my journey as a future educator. The campus seemed huge and intimidating, but the warm welcome from seniors made me feel at home."
    },
    {
      title: "Finding My Study Group",
      description: "Meeting my closest college friends during our Introduction to Teaching course. We formed a study group that became my support system throughout my academic journey."
    },
    {
      title: "First Teaching Demo",
      description: "The nervousness and excitement of conducting my first teaching demonstration in Methods of Teaching Social Studies. Despite my shaky hands, I realized this is truly my calling."
    },
    {
      title: "Research Conference Presentation",
      description: "Presenting my research on innovative teaching methods at the college's student research conference. It was nerve-wracking but incredibly rewarding to share my findings with faculty and peers."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <School className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl font-bold mb-4">University Life Experiences</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              The memorable moments, friendships, and experiences that have shaped my college journey at PUP
            </p>
          </div>
        </div>
      </div>

      {/* Life Experiences Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Coffee className="h-12 w-12 mx-auto text-purple-600 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Campus Life Moments</h2>
          <p className="text-lg text-gray-600">Visual journey through my university experiences</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {lifeExperiences.map((experience, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={`https://images.unsplash.com/${experience.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                alt={experience.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{experience.title}</h3>
                <p className="text-gray-700 mb-4">{experience.description}</p>
                <p className="text-sm text-gray-600 italic border-l-4 border-purple-400 pl-4">{experience.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Memorable Moments */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Star className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Memorable Moments</h2>
            <p className="text-lg text-gray-600">Special memories that will stay with me forever</p>
          </div>

          <div className="space-y-8">
            {memorable_moments.map((moment, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{moment.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{moment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* University Culture & Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">PUP Values I've Embraced</h2>
            <p className="text-lg text-gray-600">The institutional values that have shaped my character</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                value: "Excellence",
                description: "Striving for academic excellence in all my coursework and maintaining high standards in everything I do.",
                example: "Consistently earning high grades and seeking to exceed expectations in assignments and projects."
              },
              {
                value: "Integrity",
                description: "Upholding honesty and ethical behavior in all academic and personal endeavors.",
                example: "Always citing sources properly in research and being truthful in all academic work."
              },
              {
                value: "Nationalism",
                description: "Developing love for country through studying Philippine history and understanding our cultural heritage.",
                example: "Creating lesson plans that highlight Filipino achievements and promoting national pride."
              },
              {
                value: "Spirituality",
                description: "Recognizing the importance of spiritual growth alongside academic development.",
                example: "Participating in campus ministry activities and maintaining personal spiritual practices."
              },
              {
                value: "Social Responsibility",
                description: "Understanding my role as a future educator in serving the community and society.",
                example: "Volunteering in community teaching programs and environmental conservation efforts."
              },
              {
                value: "Innovation",
                description: "Embracing new teaching methods and technologies to enhance learning experiences.",
                example: "Learning to use digital tools and innovative pedagogical approaches in my practice teaching."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 mb-3">{item.value}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800"><strong>How I apply it:</strong> {item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityLife;
