import Navigation from "../components/Navigation"
import { FileText, TrendingUp } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Grades = () => {
  const gradeRecords = [
    {
      semester: "First Year - First Semester",
      year: "1st Year",
      sem: "1st Sem",
      gpa: "3.75",
      status: "completed",
      subjects: [
        { name: "Introduction to Teaching", grade: "A", units: 3 },
        { name: "Philippine History", grade: "A-", units: 3 },
        { name: "English Communication", grade: "A", units: 3 },
        { name: "Mathematics in Modern World", grade: "B+", units: 3 },
        { name: "Physical Education 1", grade: "A", units: 2 },
        { name: "National Service Training Program 1", grade: "A", units: 3 },
      ],
    },
    {
      semester: "First Year - Second Semester",
      year: "1st Year",
      sem: "2nd Sem",
      gpa: "3.85",
      status: "completed",
      subjects: [
        { name: "Child and Adolescent Development", grade: "A", units: 3 },
        { name: "World History", grade: "A", units: 3 },
        { name: "Filipino Literature", grade: "A-", units: 3 },
        { name: "Science and Society", grade: "B+", units: 3 },
        { name: "Arts Appreciation", grade: "A", units: 3 },
        { name: "Physical Education 2", grade: "A", units: 2 },
        { name: "National Service Training Program 2", grade: "A", units: 3 },
      ],
    },
    {
      semester: "Second Year - First Semester",
      year: "2nd Year",
      sem: "1st Sem",
      gpa: "3.90",
      status: "completed",
      subjects: [
        { name: "Methods of Teaching Social Studies", grade: "A", units: 3 },
        { name: "Curriculum Development", grade: "A", units: 3 },
        { name: "Educational Psychology", grade: "A-", units: 3 },
        { name: "Philippine Government and Constitution", grade: "A", units: 3 },
        { name: "Research Methods in Education", grade: "A-", units: 3 },
        { name: "Physical Education 3", grade: "A", units: 2 },
      ],
    },
    {
      semester: "Second Year - Second Semester",
      year: "2nd Year",
      sem: "2nd Sem",
      gpa: "3.88",
      status: "completed",
      subjects: [
        { name: "Assessment in Learning 1", grade: "A", units: 3 },
        { name: "Asian History", grade: "A-", units: 3 },
        { name: "Sociology and Anthropology", grade: "A", units: 3 },
        { name: "Economics for Social Studies Teachers", grade: "B+", units: 3 },
        { name: "Technology for Teaching and Learning 1", grade: "A", units: 3 },
        { name: "Physical Education 4", grade: "A", units: 2 },
      ],
    },
    {
      semester: "Third Year - First Semester",
      year: "3rd Year",
      sem: "1st Sem",
      gpa: "3.92",
      status: "completed",
      subjects: [
        { name: "Assessment in Learning 2", grade: "A", units: 3 },
        { name: "Geography of the Philippines", grade: "A", units: 3 },
        { name: "Political Science", grade: "A-", units: 3 },
        { name: "Technology for Teaching and Learning 2", grade: "A", units: 3 },
        { name: "Classroom Management", grade: "A", units: 3 },
        { name: "Elective 1: Peace Education", grade: "A", units: 3 },
      ],
    },
    {
      semester: "Third Year - Second Semester",
      year: "3rd Year",
      sem: "2nd Sem",
      gpa: "TBA",
      status: "current",
      subjects: [
        { name: "Field Study 1", grade: "TBA", units: 3 },
        { name: "Field Study 2", grade: "TBA", units: 3 },
        { name: "Contemporary Issues in Social Studies", grade: "TBA", units: 3 },
        { name: "Research in Social Studies Education", grade: "TBA", units: 3 },
        { name: "Elective 2: Environmental Education", grade: "TBA", units: 3 },
        { name: "Elective 3: Gender and Society", grade: "TBA", units: 3 },
      ],
    },
    {
      semester: "Fourth Year - First Semester",
      year: "4th Year",
      sem: "1st Sem",
      gpa: "TBA",
      status: "upcoming",
      subjects: [
        { name: "Practice Teaching 1", grade: "TBA", units: 6 },
        { name: "Teaching Internship", grade: "TBA", units: 6 },
        { name: "Seminar in Social Studies Education", grade: "TBA", units: 3 },
      ],
    },
    {
      semester: "Fourth Year - Second Semester",
      year: "4th Year",
      sem: "2nd Sem",
      gpa: "TBA",
      status: "upcoming",
      subjects: [
        { name: "Practice Teaching 2", grade: "TBA", units: 6 },
        { name: "Capstone Project", grade: "TBA", units: 3 },
        { name: "Professional Ethics for Teachers", grade: "TBA", units: 3 },
        { name: "Licensure Examination Review", grade: "TBA", units: 3 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 via-slate-800 to-gray-800 text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-16 md:w-20 h-16 md:h-20 bg-lavender-400/20 rounded-full animate-pulse shadow-lg shadow-lavender-400/30"></div>
          <div className="absolute bottom-10 right-10 w-12 md:w-16 h-12 md:h-16 bg-lilac-400/20 rounded-full animate-bounce shadow-lg shadow-lilac-400/30"></div>
          <div className="absolute top-1/2 left-1/3 w-8 md:w-12 h-8 md:h-12 bg-rose-400/20 rounded-full animate-pulse delay-700 shadow-lg shadow-rose-400/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <FileText className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 md:mb-6 text-lavender-400 drop-shadow-lg" />
            <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">Grades & Academic Feedback</h1>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
              Academic performance records showcasing my progress in the BSED-SS program
            </p>
          </div>
        </div>
      </div>

      {/* Grade Records */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <TrendingUp className="h-8 w-8 md:h-12 md:w-12 mx-auto text-peach-400 mb-3 md:mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Academic Performance</h2>
          <p className="text-base md:text-lg text-gray-300">Semester-by-semester grade progression showing consistent improvement</p>
        </div>

        {/* Overall GPA Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <Card className="bg-gray-800/80 backdrop-blur-sm border-peach-400/30 shadow-xl shadow-peach-500/10">
            <CardHeader className="text-center p-4 md:p-6">
              <CardTitle className="text-base md:text-lg text-white">Current GPA</CardTitle>
              <CardDescription className="text-sm md:text-base text-gray-400">Completed Semesters</CardDescription>
            </CardHeader>
            <CardContent className="text-center p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-peach-300 mb-2">3.86</div>
              <div className="text-xs md:text-sm text-gray-400">Excellent Standing</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/80 backdrop-blur-sm border-coral-400/30 shadow-xl shadow-coral-500/10">
            <CardHeader className="text-center p-4 md:p-6">
              <CardTitle className="text-base md:text-lg text-white">Total Units</CardTitle>
              <CardDescription className="text-sm md:text-base text-gray-400">Completed Credits</CardDescription>
            </CardHeader>
            <CardContent className="text-center p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-coral-300 mb-2">85</div>
              <div className="text-xs md:text-sm text-gray-400">Units Earned</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/80 backdrop-blur-sm border-rose-400/30 shadow-xl shadow-rose-500/10">
            <CardHeader className="text-center p-4 md:p-6">
              <CardTitle className="text-base md:text-lg text-white">Progress</CardTitle>
              <CardDescription className="text-sm md:text-base text-gray-400">Degree Completion</CardDescription>
            </CardHeader>
            <CardContent className="text-center p-4 md:p-6">
              <div className="text-2xl md:text-2xl font-bold text-rose-300 mb-2">62.5%</div>
              <div className="text-xs md:text-sm text-gray-400">5 of 8 Semesters</div>
            </CardContent>
          </Card>
        </div>

        {/* Semester Tabs */}
        <Tabs defaultValue="year-1" className="w-full">
          {/* Year Selection */}
          <TabsList className="grid w-full grid-cols-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 mb-6">
            <TabsTrigger
              value="year-1"
              className="text-sm md:text-base data-[state=active]:bg-lavender-500/20 data-[state=active]:text-lavender-300 text-gray-400 hover:text-white transition-colors"
            >
              1st Year
            </TabsTrigger>
            <TabsTrigger
              value="year-2"
              className="text-sm md:text-base data-[state=active]:bg-lavender-500/20 data-[state=active]:text-lavender-300 text-gray-400 hover:text-white transition-colors"
            >
              2nd Year
            </TabsTrigger>
            <TabsTrigger
              value="year-3"
              className="text-sm md:text-base data-[state=active]:bg-lavender-500/20 data-[state=active]:text-lavender-300 text-gray-400 hover:text-white transition-colors"
            >
              3rd Year
            </TabsTrigger>
            <TabsTrigger
              value="year-4"
              className="text-sm md:text-base data-[state=active]:bg-lavender-500/20 data-[state=active]:text-lavender-300 text-gray-400 hover:text-white transition-colors"
            >
              4th Year
            </TabsTrigger>
          </TabsList>

          {/* Year 1 Content */}
          <TabsContent value="year-1">
            <Tabs defaultValue="semester-0" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50">
                <TabsTrigger
                  value="semester-0"
                  className="text-sm md:text-base data-[state=active]:bg-lavender-500/20 data-[state=active]:text-lavender-300 text-gray-400 hover:text-white transition-colors"
                >
                  1st Semester
                </TabsTrigger>
                <TabsTrigger
                  value="semester-1"
                  className="text-sm md:text-base data-[state=active]:bg-lavender-500/20 data-[state=active]:text-lavender-300 text-gray-400 hover:text-white transition-colors"
                >
                  2nd Semester
                </TabsTrigger>
              </TabsList>
              <TabsContent value="semester-0" className="mt-4 md:mt-8">
                <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-lavender-400/30 shadow-lavender-500/10">
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <CardTitle className="text-lg md:text-2xl text-white flex items-center gap-2 md:gap-3">
                          {gradeRecords[0].semester}
                        </CardTitle>
                        <CardDescription className="text-sm md:text-base text-gray-400">
                          Academic Performance Summary
                        </CardDescription>
                      </div>
                      <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg border backdrop-blur-sm bg-gradient-to-r from-peach-500/20 to-coral-500/20 text-peach-300 border-peach-400/30">
                        <span className="text-sm md:text-base font-bold">GPA: {gradeRecords[0].gpa}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Subject</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Grade</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Units</th>
                          </tr>
                        </thead>
                        <tbody>
                          {gradeRecords[0].subjects.map((subject, idx) => (
                            <tr key={idx} className="border-b border-gray-700 hover:bg-lavender-500/5 transition-colors">
                              <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-gray-300">{subject.name}</td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center">
                                <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r from-rose-500/20 to-coral-500/20 text-rose-300 border border-rose-400/30">
                                  {subject.grade}
                                </span>
                              </td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base text-gray-300">{subject.units}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="semester-1" className="mt-4 md:mt-8">
                <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-lavender-400/30 shadow-lavender-500/10">
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <CardTitle className="text-lg md:text-2xl text-white flex items-center gap-2 md:gap-3">
                          {gradeRecords[1].semester}
                        </CardTitle>
                        <CardDescription className="text-sm md:text-base text-gray-400">
                          Academic Performance Summary
                        </CardDescription>
                      </div>
                      <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg border backdrop-blur-sm bg-gradient-to-r from-peach-500/20 to-coral-500/20 text-peach-300 border-peach-400/30">
                        <span className="text-sm md:text-base font-bold">GPA: {gradeRecords[1].gpa}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Subject</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Grade</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Units</th>
                          </tr>
                        </thead>
                        <tbody>
                          {gradeRecords[1].subjects.map((subject, idx) => (
                            <tr key={idx} className="border-b border-gray-700 hover:bg-lavender-500/5 transition-colors">
                              <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-gray-300">{subject.name}</td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center">
                                <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r from-rose-500/20 to-coral-500/20 text-rose-300 border border-rose-400/30">
                                  {subject.grade}
                                </span>
                              </td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base text-gray-300">{subject.units}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* Year 2 Content */}
          <TabsContent value="year-2">
            <Tabs defaultValue="semester-2" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50">
                <TabsTrigger
                  value="semester-2"
                  className="text-sm md:text-base data-[state=active]:bg-lavender-500/20 data-[state=active]:text-lavender-300 text-gray-400 hover:text-white transition-colors"
                >
                  1st Semester
                </TabsTrigger>
                <TabsTrigger
                  value="semester-3"
                  className="text-sm md:text-base data-[state=active]:bg-lavender-500/20 data-[state=active]:text-lavender-300 text-gray-400 hover:text-white transition-colors"
                >
                  2nd Semester
                </TabsTrigger>
              </TabsList>
              <TabsContent value="semester-2" className="mt-4 md:mt-8">
                <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-lavender-400/30 shadow-lavender-500/10">
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <CardTitle className="text-lg md:text-2xl text-white flex items-center gap-2 md:gap-3">
                          {gradeRecords[2].semester}
                        </CardTitle>
                        <CardDescription className="text-sm md:text-base text-gray-400">
                          Academic Performance Summary
                        </CardDescription>
                      </div>
                      <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg border backdrop-blur-sm bg-gradient-to-r from-peach-500/20 to-coral-500/20 text-peach-300 border-peach-400/30">
                        <span className="text-sm md:text-base font-bold">GPA: {gradeRecords[2].gpa}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Subject</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Grade</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Units</th>
                          </tr>
                        </thead>
                        <tbody>
                          {gradeRecords[2].subjects.map((subject, idx) => (
                            <tr key={idx} className="border-b border-gray-700 hover:bg-lavender-500/5 transition-colors">
                              <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-gray-300">{subject.name}</td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center">
                                <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r from-rose-500/20 to-coral-500/20 text-rose-300 border border-rose-400/30">
                                  {subject.grade}
                                </span>
                              </td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base text-gray-300">{subject.units}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="semester-3" className="mt-4 md:mt-8">
                <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-lavender-400/30 shadow-lavender-500/10">
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <CardTitle className="text-lg md:text-2xl text-white flex items-center gap-2 md:gap-3">
                          {gradeRecords[3].semester}
                        </CardTitle>
                        <CardDescription className="text-sm md:text-base text-gray-400">
                          Academic Performance Summary
                        </CardDescription>
                      </div>
                      <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg border backdrop-blur-sm bg-gradient-to-r from-peach-500/20 to-coral-500/20 text-peach-300 border-peach-400/30">
                        <span className="text-sm md:text-base font-bold">GPA: {gradeRecords[3].gpa}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Subject</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Grade</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Units</th>
                          </tr>
                        </thead>
                        <tbody>
                          {gradeRecords[3].subjects.map((subject, idx) => (
                            <tr key={idx} className="border-b border-gray-700 hover:bg-lavender-500/5 transition-colors">
                              <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-gray-300">{subject.name}</td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center">
                                <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r from-rose-500/20 to-coral-500/20 text-rose-300 border border-rose-400/30">
                                  {subject.grade}
                                </span>
                              </td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base text-gray-300">{subject.units}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* Year 3 Content */}
          <TabsContent value="year-3">
            <Tabs defaultValue="semester-4" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50">
                <TabsTrigger
                  value="semester-4"
                  className="text-sm md:text-base data-[state=active]:bg-lavender-500/20 data-[state=active]:text-lavender-300 text-gray-400 hover:text-white transition-colors"
                >
                  1st Semester
                </TabsTrigger>
                <TabsTrigger
                  value="semester-5"
                  className="text-sm md:text-base data-[state=active]:bg-lavender-500/20 data-[state=active]:text-lavender-300 text-gray-400 hover:text-white transition-colors"
                >
                  2nd Semester
                </TabsTrigger>
              </TabsList>
              <TabsContent value="semester-4" className="mt-4 md:mt-8">
                <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-lavender-400/30 shadow-lavender-500/10">
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <CardTitle className="text-lg md:text-2xl text-white flex items-center gap-2 md:gap-3">
                          {gradeRecords[4].semester}
                        </CardTitle>
                        <CardDescription className="text-sm md:text-base text-gray-400">
                          Academic Performance Summary
                        </CardDescription>
                      </div>
                      <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg border backdrop-blur-sm bg-gradient-to-r from-peach-500/20 to-coral-500/20 text-peach-300 border-peach-400/30">
                        <span className="text-sm md:text-base font-bold">GPA: {gradeRecords[4].gpa}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Subject</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Grade</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Units</th>
                          </tr>
                        </thead>
                        <tbody>
                          {gradeRecords[4].subjects.map((subject, idx) => (
                            <tr key={idx} className="border-b border-gray-700 hover:bg-lavender-500/5 transition-colors">
                              <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-gray-300">{subject.name}</td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center">
                                <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r from-rose-500/20 to-coral-500/20 text-rose-300 border border-rose-400/30">
                                  {subject.grade}
                                </span>
                              </td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base text-gray-300">{subject.units}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="semester-5" className="mt-4 md:mt-8">
                <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-sky-400/30 shadow-sky-500/10">
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <CardTitle className="text-lg md:text-2xl text-white flex items-center gap-2 md:gap-3">
                          {gradeRecords[5].semester}
                          <span className="text-xs md:text-sm bg-sky-600/50 text-sky-300 px-2 py-1 rounded-full">
                            Current Semester
                          </span>
                        </CardTitle>
                        <CardDescription className="text-sm md:text-base text-gray-400">
                          Ongoing Semester
                        </CardDescription>
                      </div>
                      <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg border backdrop-blur-sm bg-gradient-to-r from-sky-500/20 to-lavender-500/20 text-sky-300 border-sky-400/30">
                        <span className="text-sm md:text-base font-bold">GPA: {gradeRecords[5].gpa}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Subject</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Grade</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Units</th>
                          </tr>
                        </thead>
                        <tbody>
                          {gradeRecords[5].subjects.map((subject, idx) => (
                            <tr key={idx} className="border-b border-gray-700 hover:bg-lavender-500/5 transition-colors">
                              <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-gray-300">{subject.name}</td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center">
                                <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-semibold bg-gray-600/20 text-gray-400 border border-gray-500/30">
                                  {subject.grade}
                                </span>
                              </td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base text-gray-300">{subject.units}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 p-3 md:p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                      <p className="text-xs md:text-sm text-gray-400 text-center">
                        📅 This semester's grades will be updated once available
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* Year 4 Content */}
          <TabsContent value="year-4">
            <Tabs defaultValue="semester-6" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50">
                <TabsTrigger
                  value="semester-6"
                  className="text-sm md:text-base data-[state=active]:bg-lavender-500/20 data-[state=active]:text-lavender-300 text-gray-400 hover:text-white transition-colors"
                >
                  1st Semester
                </TabsTrigger>
                <TabsTrigger
                  value="semester-7"
                  className="text-sm md:text-base data-[state=active]:bg-lavender-500/20 data-[state=active]:text-lavender-300 text-gray-400 hover:text-white transition-colors"
                >
                  2nd Semester
                </TabsTrigger>
              </TabsList>
              <TabsContent value="semester-6" className="mt-4 md:mt-8">
                <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-gray-500/30 shadow-gray-500/10">
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <CardTitle className="text-lg md:text-2xl text-white flex items-center gap-2 md:gap-3">
                          {gradeRecords[6].semester}
                          <span className="text-xs md:text-sm bg-gray-600/50 text-gray-300 px-2 py-1 rounded-full">
                            To be announced
                          </span>
                        </CardTitle>
                        <CardDescription className="text-sm md:text-base text-gray-400">
                          Upcoming Semester
                        </CardDescription>
                      </div>
                      <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg border backdrop-blur-sm bg-gray-600/20 text-gray-400 border-gray-500/30">
                        <span className="text-sm md:text-base font-bold">GPA: {gradeRecords[6].gpa}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Subject</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Grade</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Units</th>
                          </tr>
                        </thead>
                        <tbody>
                          {gradeRecords[6].subjects.map((subject, idx) => (
                            <tr key={idx} className="border-b border-gray-700 hover:bg-lavender-500/5 transition-colors">
                              <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-gray-300">{subject.name}</td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center">
                                <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-semibold bg-gray-600/20 text-gray-400 border border-gray-500/30">
                                  {subject.grade}
                                </span>
                              </td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base text-gray-300">{subject.units}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 p-3 md:p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                      <p className="text-xs md:text-sm text-gray-400 text-center">
                        📅 This semester's grades will be updated once available
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="semester-7" className="mt-4 md:mt-8">
                <Card className="bg-gray-800/80 backdrop-blur-sm shadow-xl border-gray-500/30 shadow-gray-500/10">
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <CardTitle className="text-lg md:text-2xl text-white flex items-center gap-2 md:gap-3">
                          {gradeRecords[7].semester}
                          <span className="text-xs md:text-sm bg-gray-600/50 text-gray-300 px-2 py-1 rounded-full">
                            To be announced
                          </span>
                        </CardTitle>
                        <CardDescription className="text-sm md:text-base text-gray-400">
                          Upcoming Semester
                        </CardDescription>
                      </div>
                      <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg border backdrop-blur-sm bg-gray-600/20 text-gray-400 border-gray-500/30">
                        <span className="text-sm md:text-base font-bold">GPA: {gradeRecords[7].gpa}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Subject</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Grade</th>
                            <th className="text-center py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-white font-semibold">Units</th>
                          </tr>
                        </thead>
                        <tbody>
                          {gradeRecords[7].subjects.map((subject, idx) => (
                            <tr key={idx} className="border-b border-gray-700 hover:bg-lavender-500/5 transition-colors">
                              <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-gray-300">{subject.name}</td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center">
                                <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-semibold bg-gray-600/20 text-gray-400 border border-gray-500/30">
                                  {subject.grade}
                                </span>
                              </td>
                              <td className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base text-gray-300">{subject.units}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 p-3 md:p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                      <p className="text-xs md:text-sm text-gray-400 text-center">
                        📅 This semester's grades will be updated once available
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>

      {/* Academic Goals */}
      <div className="bg-gray-800/50 backdrop-blur-sm py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Academic Goals & Aspirations</h2>
            <p className="text-base md:text-lg text-gray-300">My commitment to continuous improvement and excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-700/50 hover:border-mint-400/30 transition-all duration-300 shadow-xl shadow-mint-500/10">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">Current Academic Goals</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-mint-400 mr-3 mt-0.5" />
                  <span className="text-sm md:text-base">Maintain GPA above 3.8 throughout my remaining semesters</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-mint-400 mr-3 mt-0.5" />
                  <span className="text-sm md:text-base">Complete practice teaching with distinction</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-mint-400 mr-3 mt-0.5" />
                  <span className="text-sm md:text-base">Conduct original research in Social Studies education</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-mint-400 mr-3 mt-0.5" />
                  <span className="text-sm md:text-base">Graduate with Latin honors</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-700/50 hover:border-sage-400/30 transition-all duration-300 shadow-xl shadow-sage-500/10">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">Areas for Improvement</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-sage-400 mr-3 mt-0.5" />
                  <span className="text-sm md:text-base">Strengthen skills in educational technology integration</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-sage-400 mr-3 mt-0.5" />
                  <span className="text-sm md:text-base">Develop more advanced classroom management techniques</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-sage-400 mr-3 mt-0.5" />
                  <span className="text-sm md:text-base">Enhance research and publication skills</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-sage-400 mr-3 mt-0.5" />
                  <span className="text-sm md:text-base">Gain more experience in special education inclusion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grades
