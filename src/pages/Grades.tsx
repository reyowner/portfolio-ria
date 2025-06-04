
import Navigation from '../components/Navigation';
import { FileText, Star, MessageSquare, TrendingUp } from 'lucide-react';

const Grades = () => {
  const gradeRecords = [
    {
      semester: "First Year - First Semester",
      gpa: "3.75",
      subjects: [
        { name: "Introduction to Teaching", grade: "A", units: 3 },
        { name: "Philippine History", grade: "A-", units: 3 },
        { name: "English Communication", grade: "A", units: 3 },
        { name: "Mathematics in Modern World", grade: "B+", units: 3 },
        { name: "Physical Education", grade: "A", units: 2 }
      ]
    },
    {
      semester: "First Year - Second Semester",
      gpa: "3.85",
      subjects: [
        { name: "Child and Adolescent Development", grade: "A", units: 3 },
        { name: "World History", grade: "A", units: 3 },
        { name: "Filipino Literature", grade: "A-", units: 3 },
        { name: "Science and Society", grade: "B+", units: 3 },
        { name: "Arts Appreciation", grade: "A", units: 3 }
      ]
    },
    {
      semester: "Second Year - First Semester",
      gpa: "3.90",
      subjects: [
        { name: "Methods of Teaching Social Studies", grade: "A", units: 3 },
        { name: "Curriculum Development", grade: "A", units: 3 },
        { name: "Educational Psychology", grade: "A-", units: 3 },
        { name: "Philippine Government", grade: "A", units: 3 },
        { name: "Research Methods", grade: "A-", units: 3 }
      ]
    }
  ];

  const professorFeedback = [
    {
      professor: "Prof. Maria Santos",
      subject: "Methods of Teaching Social Studies",
      feedback: "Excellent work on your lesson plan presentations. Your creativity in developing engaging activities for teaching Philippine history is commendable. Continue to focus on differentiated instruction to meet diverse learner needs.",
      grade: "A",
      date: "December 2022"
    },
    {
      professor: "Prof. Juan Dela Cruz",
      subject: "Curriculum Development",
      feedback: "Your research paper on culturally responsive pedagogy shows deep understanding of the subject matter. Your analysis of current curriculum gaps and proposed solutions demonstrate critical thinking skills essential for effective teaching.",
      grade: "A",
      date: "May 2023"
    },
    {
      professor: "Prof. Ana Rodriguez",
      subject: "Educational Psychology",
      feedback: "Outstanding performance in case study analysis. You consistently demonstrate understanding of learning theories and their practical applications in the classroom. Your peer teaching demonstrations were particularly impressive.",
      grade: "A-",
      date: "December 2022"
    }
  ];

  const sampleTestPapers = [
    {
      title: "Philippine History Comprehensive Exam",
      subject: "Philippine History",
      score: "95/100",
      description: "Comprehensive examination covering pre-colonial period to contemporary Philippines",
      highlights: ["Excellent essay on the impact of Spanish colonization", "Perfect scores on identification and timeline questions", "Insightful analysis of modern political developments"]
    },
    {
      title: "Teaching Methods Practical Exam",
      subject: "Methods of Teaching Social Studies",
      score: "98/100",
      description: "Practical demonstration of teaching skills and lesson plan development",
      highlights: ["Creative use of multimedia resources", "Effective classroom management techniques", "Clear learning objectives and assessment strategies"]
    },
    {
      title: "Research Methodology Final Project",
      subject: "Research Methods in Education",
      score: "94/100",
      description: "Action research proposal on improving student engagement in Social Studies",
      highlights: ["Well-formulated research questions", "Comprehensive literature review", "Innovative data collection methods"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl font-bold mb-4">Grades & Academic Feedback</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Academic performance records, professor feedback, and sample test papers showcasing my progress in the BSED-SS program
            </p>
          </div>
        </div>
      </div>

      {/* Grade Records */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <TrendingUp className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Performance</h2>
          <p className="text-lg text-gray-600">Semester-by-semester grade progression showing consistent improvement</p>
        </div>

        <div className="space-y-8">
          {gradeRecords.map((record, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{record.semester}</h3>
                <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg">
                  <span className="font-bold">GPA: {record.gpa}</span>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-gray-900 font-semibold">Subject</th>
                      <th className="text-center py-3 px-4 text-gray-900 font-semibold">Grade</th>
                      <th className="text-center py-3 px-4 text-gray-900 font-semibold">Units</th>
                    </tr>
                  </thead>
                  <tbody>
                    {record.subjects.map((subject, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700">{subject.name}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            subject.grade.startsWith('A') ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {subject.grade}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center text-gray-700">{subject.units}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professor Feedback */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MessageSquare className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professor Feedback</h2>
            <p className="text-lg text-gray-600">Constructive feedback and comments from my professors</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {professorFeedback.map((feedback, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{feedback.professor}</h3>
                    <p className="text-gray-600">{feedback.subject}</p>
                    <p className="text-sm text-gray-500">{feedback.date}</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Grade: {feedback.grade}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-700 italic">"{feedback.feedback}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Test Papers */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Star className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Test Papers & Projects</h2>
            <p className="text-lg text-gray-600">Notable examinations and projects demonstrating academic achievement</p>
          </div>

          <div className="space-y-8">
            {sampleTestPapers.map((paper, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                    <p className="text-gray-600 mb-2">{paper.subject}</p>
                    <p className="text-gray-700">{paper.description}</p>
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg text-center">
                    <p className="font-bold text-2xl">{paper.score}</p>
                    <p className="text-sm">Score</p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {paper.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Star className="h-4 w-4 text-yellow-500 mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Academic Goals */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Goals & Aspirations</h2>
            <p className="text-lg text-gray-600">My commitment to continuous improvement and excellence</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Current Academic Goals</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  Maintain GPA above 3.8 throughout my remaining semesters
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  Complete practice teaching with distinction
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  Conduct original research in Social Studies education
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  Graduate with Latin honors
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Areas for Improvement</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  Strengthen skills in educational technology integration
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  Develop more advanced classroom management techniques
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  Enhance research and publication skills
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  Gain more experience in special education inclusion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades;
