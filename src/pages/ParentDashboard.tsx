
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { User, MessageCircle, Calendar, TrendingUp, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ParentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">EduMasterOS</h1>
              <Badge variant="secondary" className="ml-3">Parent Portal</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Welcome, Sarah Davis</span>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Child Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Emma's Progress Dashboard</h2>
          <p className="text-gray-600">5th Grade • Ms. Johnson's Class</p>
        </div>

        {/* 🔥 NEW AI-Powered Parent Insights */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Zap className="h-5 w-5 mr-2 text-yellow-500" />
            🔥 Advanced AI Insights
          </h3>
          <Link to="/parent/insights">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-purple-600" />
                  🤖 Personalized Learning Analytics
                </CardTitle>
                <CardDescription>AI-powered predictions, learning style analysis, and growth forecasting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-600">3.9</div>
                    <div className="text-xs text-gray-600">Predicted GPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">87%</div>
                    <div className="text-xs text-gray-600">Engagement Score</div>
                  </div>
                  <div className="text-center">
                    <Badge className="bg-purple-100 text-purple-800 text-xs">Visual Learner</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Current Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Overall Grade */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">📊 Overall Grade</CardTitle>
              <CardDescription>Current semester average</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">A-</div>
              <div className="text-sm text-gray-600">3.7 GPA</div>
              <Badge className="mt-2 bg-green-100 text-green-800">+0.3 from last month</Badge>
            </CardContent>
          </Card>

          {/* Attendance */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">🟢 Attendance</CardTitle>
              <CardDescription>This month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">96%</div>
              <div className="text-sm text-gray-600">18 of 19 days</div>
              <Progress value={96} className="mt-2" />
            </CardContent>
          </Card>

          {/* Assignments */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">📝 Assignments</CardTitle>
              <CardDescription>Completion rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">12/14</div>
              <div className="text-sm text-gray-600">86% completed</div>
              <div className="text-xs text-orange-600 mt-1">2 assignments due soon</div>
            </CardContent>
          </Card>

          {/* Teacher Messages */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">💬 Messages</CardTitle>
              <CardDescription>From teachers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-indigo-600">2</div>
              <div className="text-sm text-gray-600">New messages</div>
              <Button size="sm" className="mt-2 w-full">
                <MessageCircle className="h-4 w-4 mr-2" />
                View Messages
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Subject Breakdown */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              Subject Performance
            </CardTitle>
            <CardDescription>Current grades and trends across all subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Mathematics</span>
                  <Badge className="bg-green-100 text-green-800">A</Badge>
                </div>
                <Progress value={89} />
                <div className="text-sm text-gray-600">Strong in fractions, working on word problems</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Reading</span>
                  <Badge className="bg-green-100 text-green-800">A+</Badge>
                </div>
                <Progress value={94} />
                <div className="text-sm text-gray-600">Excellent comprehension, loves chapter books</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Science</span>
                  <Badge className="bg-blue-100 text-blue-800">B+</Badge>
                </div>
                <Progress value={82} />
                <div className="text-sm text-gray-600">Great curiosity, needs support with lab reports</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Social Studies</span>
                  <Badge className="bg-blue-100 text-blue-800">B+</Badge>
                </div>
                <Progress value={85} />
                <div className="text-sm text-gray-600">Enjoys discussions, improving map skills</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Art</span>
                  <Badge className="bg-green-100 text-green-800">A</Badge>
                </div>
                <Progress value={91} />
                <div className="text-sm text-gray-600">Creative and detailed work</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Physical Education</span>
                  <Badge className="bg-green-100 text-green-800">A</Badge>
                </div>
                <Progress value={88} />
                <div className="text-sm text-gray-600">Great teamwork and effort</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Updates & Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Teacher Updates */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Updates</CardTitle>
              <CardDescription>Latest news from Emma's teachers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-start py-3 border-b">
                  <div>
                    <div className="font-medium">🌟 Excellent participation in math group</div>
                    <div className="text-sm text-gray-600">Emma helped explain fractions to classmates</div>
                    <div className="text-xs text-gray-500 mt-1">Ms. Johnson • Math</div>
                  </div>
                  <div className="text-xs text-gray-500">2 hours ago</div>
                </div>

                <div className="flex justify-between items-start py-3 border-b">
                  <div>
                    <div className="font-medium">📚 Reading level assessment completed</div>
                    <div className="text-sm text-gray-600">Emma is reading at 6th grade level</div>
                    <div className="text-xs text-gray-500 mt-1">Mrs. Peterson • Reading</div>
                  </div>
                  <div className="text-xs text-gray-500">1 day ago</div>
                </div>

                <div className="flex justify-between items-start py-3">
                  <div>
                    <div className="font-medium">🔬 Science project reminder</div>
                    <div className="text-sm text-gray-600">Weather tracking project due Friday</div>
                    <div className="text-xs text-gray-500 mt-1">Mr. Garcia • Science</div>
                  </div>
                  <div className="text-xs text-gray-500">2 days ago</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Events
              </CardTitle>
              <CardDescription>Important dates and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <div>
                    <div className="font-medium text-red-800">Science Project Due</div>
                    <div className="text-sm text-red-600">Weather tracking assignment</div>
                  </div>
                  <Badge variant="destructive">Tomorrow</Badge>
                </div>

                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <div className="font-medium text-yellow-800">Math Quiz</div>
                    <div className="text-sm text-yellow-600">Chapter 6: Division</div>
                  </div>
                  <Badge className="bg-yellow-200 text-yellow-800">Dec 31</Badge>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-medium text-blue-800">Parent-Teacher Conference</div>
                    <div className="text-sm text-blue-600">Progress review meeting</div>
                  </div>
                  <Badge className="bg-blue-200 text-blue-800">Jan 15</Badge>
                </div>

                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <div className="font-medium text-green-800">Winter Break</div>
                    <div className="text-sm text-green-600">School holiday</div>
                  </div>
                  <Badge className="bg-green-200 text-green-800">Jan 20-24</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ParentDashboard;
