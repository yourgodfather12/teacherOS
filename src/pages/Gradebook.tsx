
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, ArrowLeft, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Gradebook = () => {
  const [students] = useState([
    { id: 1, name: "Emma Davis", grades: { math_quiz: 94, english_essay: 88, science_test: 91, homework: 85 }, average: 89.5 },
    { id: 2, name: "Jake Wilson", grades: { math_quiz: 78, english_essay: 82, science_test: 76, homework: 90 }, average: 81.5 },
    { id: 3, name: "Sofia Martinez", grades: { math_quiz: 96, english_essay: 94, science_test: 98, homework: 92 }, average: 95 },
    { id: 4, name: "Alex Johnson", grades: { math_quiz: 68, english_essay: 72, science_test: 65, homework: 58 }, average: 65.75 },
    { id: 5, name: "Maya Patel", grades: { math_quiz: 89, english_essay: 91, science_test: 87, homework: 95 }, average: 90.5 }
  ]);

  const assignments = [
    { key: 'math_quiz', name: 'Math Quiz - Ch 5', date: 'Dec 28', type: 'Quiz' },
    { key: 'english_essay', name: 'My Hero Essay', date: 'Dec 26', type: 'Essay' },
    { key: 'science_test', name: 'Weather Test', date: 'Dec 24', type: 'Test' },
    { key: 'homework', name: 'Weekly Homework', date: 'Dec 22', type: 'Homework' }
  ];

  const getGradeColor = (grade) => {
    if (grade >= 90) return "bg-green-100 text-green-800";
    if (grade >= 80) return "bg-blue-100 text-blue-800";
    if (grade >= 70) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  const getLetterGrade = (grade) => {
    if (grade >= 97) return "A+";
    if (grade >= 93) return "A";
    if (grade >= 90) return "A-";
    if (grade >= 87) return "B+";
    if (grade >= 83) return "B";
    if (grade >= 80) return "B-";
    if (grade >= 77) return "C+";
    if (grade >= 73) return "C";
    if (grade >= 70) return "C-";
    if (grade >= 67) return "D+";
    if (grade >= 65) return "D";
    return "F";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/teacher" className="mr-4">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">Gradebook</h1>
              <Badge variant="secondary" className="ml-3">5th Grade Math</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Assignment
              </Button>
              <span className="text-sm text-gray-700">Ms. Johnson</span>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Class Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Class Average</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">B+</div>
              <div className="text-sm text-gray-600">84.4% overall</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">4</div>
              <div className="text-sm text-gray-600">This week</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Need Help</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">2</div>
              <div className="text-sm text-gray-600">Students below 70%</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Missing Work</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">3</div>
              <div className="text-sm text-gray-600">Assignments overdue</div>
            </CardContent>
          </Card>
        </div>

        {/* Gradebook Table */}
        <Card>
          <CardHeader>
            <CardTitle>Student Grades</CardTitle>
            <CardDescription>Click on any grade to edit or add comments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Student</th>
                    {assignments.map((assignment) => (
                      <th key={assignment.key} className="text-center py-3 px-2 font-medium min-w-24">
                        <div className="text-sm">{assignment.name}</div>
                        <div className="text-xs text-gray-500">{assignment.date}</div>
                      </th>
                    ))}
                    <th className="text-center py-3 px-4 font-medium">Average</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{student.name}</td>
                      {assignments.map((assignment) => (
                        <td key={assignment.key} className="text-center py-3 px-2">
                          <Badge className={getGradeColor(student.grades[assignment.key])}>
                            {student.grades[assignment.key]}%
                          </Badge>
                        </td>
                      ))}
                      <td className="text-center py-3 px-4">
                        <div className="flex flex-col items-center">
                          <Badge className={getGradeColor(student.average)}>
                            {getLetterGrade(student.average)}
                          </Badge>
                          <div className="text-xs text-gray-500 mt-1">
                            {student.average}%
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Gradebook;
