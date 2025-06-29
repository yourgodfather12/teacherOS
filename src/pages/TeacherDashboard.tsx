
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">EduMasterOS</h1>
              <Badge variant="secondary" className="ml-3">Teacher</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Welcome, Ms. Johnson</span>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Today's Overview</h2>
          <p className="text-gray-600">Monday, December 29, 2025</p>
        </div>

        {/* Main Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link to="/teacher/lessons">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">📅 AI Lesson Planner</CardTitle>
                <CardDescription>Create personalized lessons</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">Generate</div>
                <div className="text-sm text-gray-600">Differentiated lesson plans</div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/teacher/gradebook">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">📊 Gradebook</CardTitle>
                <CardDescription>Track student progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">B+</div>
                <div className="text-sm text-gray-600">Class average</div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/teacher/attendance">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">🟢 Attendance</CardTitle>
                <CardDescription>Quick daily check-in</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">92%</div>
                <div className="text-sm text-gray-600">Present today</div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/teacher/messages">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">💬 Messages</CardTitle>
                <CardDescription>Parent communication</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">3</div>
                <div className="text-sm text-gray-600">New messages</div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/teacher/lessons">
              <Button className="bg-blue-600 hover:bg-blue-700">+ New Lesson</Button>
            </Link>
            <Link to="/teacher/attendance">
              <Button variant="outline">Mark Attendance</Button>
            </Link>
            <Link to="/teacher/messages">
              <Button variant="outline">Send Message</Button>
            </Link>
            <Button variant="outline">Create Assignment</Button>
          </div>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <div className="font-medium">Math Quiz - Chapter 5</div>
                  <div className="text-sm text-gray-600">3 students completed</div>
                </div>
                <div className="text-sm text-gray-500">2 hours ago</div>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <div className="font-medium">Parent message from Mrs. Smith</div>
                  <div className="text-sm text-gray-600">About homework help</div>
                </div>
                <div className="text-sm text-gray-500">5 hours ago</div>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <div className="font-medium">Lesson plan generated</div>
                  <div className="text-sm text-gray-600">Fractions and Decimals</div>
                </div>
                <div className="text-sm text-gray-500">1 day ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TeacherDashboard;
