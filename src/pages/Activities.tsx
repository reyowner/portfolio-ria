
import Navigation from '../components/Navigation';
import { Users, Trophy, Heart, Calendar } from 'lucide-react';

const Activities = () => {
  const coCurricularActivities = [
    {
      title: "Student Government Association",
      role: "Class Representative",
      period: "2021-2022",
      description: "Served as the voice of my class in student government, organizing academic and social events, and addressing student concerns to faculty and administration.",
      image: "photo-1519389950473-47ba0277781c",
      caption: "Leading a student council meeting to discuss campus improvements"
    },
    {
      title: "Education Society",
      role: "Member",
      period: "2020-Present",
      description: "Active member of the college's Education Society, participating in seminars, workshops, and peer mentoring programs for aspiring teachers.",
      image: "photo-1498050108023-c5249f4df085",
      caption: "Attending an education conference with fellow society members"
    },
    {
      title: "History Club",
      role: "Secretary",
      period: "2021-Present",
      description: "Organized historical field trips, quiz competitions, and heritage preservation awareness campaigns. Documented club activities and maintained records.",
      image: "photo-1473091534298-04dcbce3278c",
      caption: "Taking notes during a historical research presentation"
    }
  ];

  const extraCurricularActivities = [
    {
      title: "Community Teaching Program",
      description: "Volunteered to teach underprivileged children in nearby communities, providing free tutorial sessions in Social Studies and basic literacy.",
      impact: "Helped 25+ children improve their academic performance",
      image: "photo-1581091226825-a6a2a5aee158",
      caption: "Teaching children in the community outreach program"
    },
    {
      title: "Cultural Arts Festival",
      description: "Participated in the university's annual cultural festival by organizing a historical drama performance showcasing Philippine heroes.",
      impact: "Reached an audience of 500+ students and faculty",
      image: "photo-1721322800607-8c38375eef04",
      caption: "Preparing costumes and props for our historical drama performance"
    },
    {
      title: "Environmental Conservation Group",
      description: "Joined campus initiatives for environmental awareness, organizing tree planting activities and waste management seminars.",
      impact: "Planted 100+ trees and organized 5 environmental workshops",
      image: "photo-1486312338219-ce68d2c6f44d",
      caption: "Planning environmental conservation activities using digital tools"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl font-bold mb-4">Activities & Involvement</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Beyond the classroom - my participation in co-curricular and extra-curricular activities that have enriched my university experience
            </p>
          </div>
        </div>
      </div>

      {/* Co-Curricular Activities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Trophy className="h-12 w-12 mx-auto text-green-600 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Co-Curricular Activities</h2>
          <p className="text-lg text-gray-600">Academic-related activities that complement my formal education</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {coCurricularActivities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={`https://images.unsplash.com/${activity.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                alt={activity.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{activity.title}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {activity.role}
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-600">{activity.period}</span>
                </div>
                <p className="text-gray-700 mb-4">{activity.description}</p>
                <p className="text-sm text-gray-600 italic">{activity.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra-Curricular Activities */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 mx-auto text-red-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Extra-Curricular Activities</h2>
            <p className="text-lg text-gray-600">Community service and voluntary activities that reflect my values and commitment to social responsibility</p>
          </div>

          <div className="space-y-8">
            {extraCurricularActivities.map((activity, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <img 
                    src={`https://images.unsplash.com/${activity.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={activity.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic text-center">{activity.caption}</p>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{activity.title}</h3>
                  <p className="text-gray-700 mb-4">{activity.description}</p>
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Impact Made:</h4>
                    <p className="text-red-700">{activity.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Developed */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills Developed Through Activities</h2>
            <p className="text-lg text-gray-600">Key competencies gained through active participation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "Leadership", description: "Leading teams and organizing events" },
              { skill: "Communication", description: "Public speaking and interpersonal skills" },
              { skill: "Project Management", description: "Planning and executing initiatives" },
              { skill: "Cultural Sensitivity", description: "Working with diverse communities" },
              { skill: "Problem Solving", description: "Addressing challenges creatively" },
              { skill: "Teamwork", description: "Collaborating effectively with others" },
              { skill: "Time Management", description: "Balancing multiple commitments" },
              { skill: "Social Responsibility", description: "Understanding community needs" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <h3 className="font-bold text-gray-900 mb-2">{item.skill}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
