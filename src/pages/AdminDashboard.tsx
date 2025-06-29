
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">EduMasterOS</h1>
              <Badge variant="secondary" className="ml-3">Admin</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Welcome, Dr. Wilson</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">School Overview</h2>
          <p className="text-gray-600">Lincoln Elementary School</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">👥 Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">1,247</div>
              <div className="text-sm text-gray-600">+23 this month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">👩‍🏫 Active Teachers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">68</div>
              <div className="text-sm text-gray-600">92% platform usage</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">📊 Avg. Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">94.2%</div>
              <div className="text-sm text-gray-600">+1.3% vs last month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">🎯 Avg. Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">B+</div>
              <div className="text-sm text-gray-600">87.3% school avg</div>
            </CardContent>
          </Card>
        </div>

        {/* Grade Level Performance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>📈 Grade Level Performance</CardTitle>
            <CardDescription>Academic performance by grade</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <div className="font-medium">Kindergarten</div>
                  <div className="text-sm text-gray-600">156 students</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">95% Attendance</Badge>
                  <Badge className="bg-blue-100 text-blue-800">Excellent</Badge>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <div className="font-medium">1st Grade</div>
                  <div className="text-sm text-gray-600">142 students</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">93% Attendance</Badge>
                  <Badge className="bg-green-100 text-green-800">Good</Badge>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <div className="font-medium">2nd Grade</div>
                  <div className="text-sm text-gray-600">138 students</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-yellow-100 text-yellow-800">89% Attendance</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">Needs Improvement</Badge>
                </div>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <div className="font-medium">5th Grade</div>
                  <div className="text-sm text-gray-600">145 students</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">96% Attendance</Badge>
                  <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions & Reports */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>📋 Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full justify-start">Add New User</Button>
                <Button variant="outline" className="w-full justify-start">Manage Teachers</Button>
                <Button variant="outline" className="w-full justify-start">View All Students</Button>
                <Button variant="outline" className="w-full justify-start">System Settings</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📊 Generate Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">Attendance Report</Button>
                <Button variant="outline" className="w-full justify-start">Grade Report</Button>
                <Button variant="outline" className="w-full justify-start">Teacher Usage Report</Button>
                <Button variant="outline" className="w-full justify-start">Parent Engagement Report</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent System Activity */}
        <Card>
          <CardHeader>
            <CardTitle>🔄 Recent System Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <div className="font-medium">New teacher account created</div>
                  <div className="text-sm text-gray-600">Ms. Rodriguez - 3rd Grade</div>
                </div>
                <div className="text-sm text-gray-500">2 hours ago</div>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <div className="font-medium">Attendance report generated</div>
                  <div className="text-sm text-gray-600">December monthly report</div>
                </div>
                <div className="text-sm text-gray-500">1 day ago</div>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <div className="font-medium">System backup completed</div>
                  <div className="text-sm text-gray-600">All data successfully backed up</div>
                </div>
                <div className="text-sm text-gray-500">2 days ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
