
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

const ParentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">EduMasterOS</h1>
              <Badge variant="secondary" className="ml-3">Parent</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Welcome, Mr. Davis</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Emma's Progress</h2>
          <p className="text-gray-600">5th Grade • Mrs. Johnson's Class</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">📊 Overall Grade</CardTitle>
              <CardDescription>Current average</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">A-</div>
              <div className="text-sm text-gray-600">92% average</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">📅 Attendance</CardTitle>
              <CardDescription>This month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-sm text-gray-600">2 days absent</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">📝 Assignments</CardTitle>
              <CardDescription>Completion status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">3</div>
              <div className="text-sm text-gray-600">Pending submissions</div>
            </CardContent>
          </Card>
        </div>

        {/* Subject Grades */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Subject Grades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <div className="font-medium">Mathematics</div>
                <Badge className="bg-green-100 text-green-800">A</Badge>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <div className="font-medium">English Language Arts</div>
                <Badge className="bg-green-100 text-green-800">A-</Badge>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <div className="font-medium">Science</div>
                <Badge className="bg-blue-100 text-blue-800">B+</Badge>
              </div>
              <div className="flex justify-between items-center py-2">
                <div className="font-medium">Social Studies</div>
                <Badge className="bg-green-100 text-green-800">A</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Updates */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-start py-3 border-b">
                <div>
                  <div className="font-medium">Math Quiz - Fractions</div>
                  <div className="text-sm text-gray-600">Grade: A (94%)</div>
                  <div className="text-sm text-green-600">Great improvement on word problems!</div>
                </div>
                <div className="text-sm text-gray-500">Today</div>
              </div>
              <div className="flex justify-between items-start py-3 border-b">
                <div>
                  <div className="font-medium">Science Project Due</div>
                  <div className="text-sm text-gray-600">Solar System Model</div>
                  <div className="text-sm text-orange-600">Due: Friday, Jan 3rd</div>
                </div>
                <div className="text-sm text-gray-500">2 days ago</div>
              </div>
              <div className="flex justify-between items-start py-3">
                <div>
                  <div className="font-medium">Positive Behavior Note</div>
                  <div className="text-sm text-gray-600">Excellent participation in class discussions</div>
                  <div className="text-sm text-green-600">Keep up the great work!</div>
                </div>
                <div className="text-sm text-gray-500">3 days ago</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700">Message Teacher</Button>
          <Button variant="outline">View All Assignments</Button>
          <Button variant="outline">Attendance Calendar</Button>
        </div>
      </main>
    </div>
  );
};

export default ParentDashboard;
