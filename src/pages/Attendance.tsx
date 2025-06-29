
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, ArrowLeft, Check, X, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Attendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Emma Davis", status: "present", notes: "" },
    { id: 2, name: "Jake Wilson", status: "present", notes: "" },
    { id: 3, name: "Sofia Martinez", status: "present", notes: "" },
    { id: 4, name: "Alex Johnson", status: "absent", notes: "Doctor appointment" },
    { id: 5, name: "Maya Patel", status: "tardy", notes: "Arrived 10 min late" },
    { id: 6, name: "Ryan Chen", status: "present", notes: "" },
    { id: 7, name: "Isabella Garcia", status: "present", notes: "" },
    { id: 8, name: "Noah Thompson", status: "present", notes: "" }
  ]);

  const [date] = useState(new Date().toLocaleDateString());

  const updateAttendance = (studentId, status) => {
    setStudents(prev => 
      prev.map(student => 
        student.id === studentId ? { ...student, status } : student
      )
    );
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'present': return 'bg-green-100 text-green-800';
      case 'absent': return 'bg-red-100 text-red-800';
      case 'tardy': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'present': return <Check className="h-4 w-4" />;
      case 'absent': return <X className="h-4 w-4" />;
      case 'tardy': return <Clock className="h-4 w-4" />;
      default: return null;
    }
  };

  const presentCount = students.filter(s => s.status === 'present').length;
  const absentCount = students.filter(s => s.status === 'absent').length;
  const tardyCount = students.filter(s => s.status === 'tardy').length;
  const attendanceRate = Math.round((presentCount / students.length) * 100);

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
              <h1 className="text-xl font-semibold text-gray-900">Attendance</h1>
              <Badge variant="secondary" className="ml-3">5th Grade</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">{date}</span>
              <span className="text-sm text-gray-700">Ms. Johnson</span>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-green-600">Present</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{presentCount}</div>
              <div className="text-sm text-gray-600">Students</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-red-600">Absent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">{absentCount}</div>
              <div className="text-sm text-gray-600">Students</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-yellow-600">Tardy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">{tardyCount}</div>
              <div className="text-sm text-gray-600">Students</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{attendanceRate}%</div>
              <div className="text-sm text-gray-600">Present today</div>
            </CardContent>
          </Card>
        </div>

        {/* Student Roster */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Roster - {date}</CardTitle>
            <CardDescription>Click the buttons to mark attendance for each student</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {students.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-medium">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{student.name}</div>
                      {student.notes && (
                        <div className="text-sm text-gray-500">{student.notes}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(student.status)}>
                      <span className="flex items-center space-x-1">
                        {getStatusIcon(student.status)}
                        <span className="capitalize">{student.status}</span>
                      </span>
                    </Badge>
                    
                    <div className="flex space-x-1">
                      <Button
                        size="sm"
                        variant={student.status === 'present' ? 'default' : 'outline'}
                        onClick={() => updateAttendance(student.id, 'present')}
                        className="px-2"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant={student.status === 'tardy' ? 'default' : 'outline'}
                        onClick={() => updateAttendance(student.id, 'tardy')}
                        className="px-2"
                      >
                        <Clock className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant={student.status === 'absent' ? 'default' : 'outline'}
                        onClick={() => updateAttendance(student.id, 'absent')}
                        className="px-2"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <Button variant="outline">Save Draft</Button>
              <Button>Submit Attendance</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Attendance;
