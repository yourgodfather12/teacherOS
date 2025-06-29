
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">EduMasterOS</h1>
              <Badge variant="secondary" className="ml-3">Student</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Welcome, Emma</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">My Learning Dashboard</h2>
          <p className="text-gray-600">5th Grade • Mrs. Johnson's Class</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">📊 My Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">A-</div>
              <div className="text-sm text-gray-600">Keep it up!</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">📝 To Do</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">3</div>
              <div className="text-sm text-gray-600">Assignments due</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">⭐ Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">285</div>
              <div className="text-sm text-gray-600">This week</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">🎯 Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">7</div>
              <div className="text-sm text-gray-600">Days completed</div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Assignments */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>📋 My Assignments</CardTitle>
            <CardDescription>What's due soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                <div>
                  <div className="font-medium text-red-900">Science Project - Solar System</div>
                  <div className="text-sm text-red-700">Due: Friday, Jan 3rd</div>
                </div>
                <Badge variant="destructive">Overdue</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <div>
                  <div className="font-medium text-orange-900">Math Homework - Chapter 6</div>
                  <div className="text-sm text-orange-700">Due: Tomorrow</div>
                </div>
                <Badge className="bg-orange-100 text-orange-800">Due Soon</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                <div>
                  <div className="font-medium text-green-900">Reading Journal</div>
                  <div className="text-sm text-green-700">Due: Next Week</div>
                </div>
                <Badge className="bg-green-100 text-green-800">On Track</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Grades */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>📊 Recent Grades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <div className="font-medium">Math Quiz - Fractions</div>
                  <div className="text-sm text-gray-600">December 28</div>
                </div>
                <Badge className="bg-green-100 text-green-800">A (94%)</Badge>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <div className="font-medium">English Essay - My Hero</div>
                  <div className="text-sm text-gray-600">December 26</div>
                </div>
                <Badge className="bg-blue-100 text-blue-800">B+ (88%)</Badge>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <div className="font-medium">Science Test - Weather</div>
                  <div className="text-sm text-gray-600">December 24</div>
                </div>
                <Badge className="bg-green-100 text-green-800">A- (91%)</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700">Start Assignment</Button>
          <Button variant="outline">View Calendar</Button>
          <Button variant="outline">Study Resources</Button>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
