
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { User, ArrowLeft, Brain, TrendingUp, AlertTriangle, Target, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";

const AIAnalytics = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  
  const aiInsights = [
    {
      type: "prediction",
      title: "Emma Davis at risk of falling behind in Math",
      confidence: 87,
      action: "Recommend additional practice with fractions",
      priority: "high",
      icon: AlertTriangle,
      color: "text-red-600"
    },
    {
      type: "opportunity", 
      title: "Jake Wilson ready for advanced reading",
      confidence: 92,
      action: "Suggest moving to Level 6 reading group",
      priority: "medium",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      type: "engagement",
      title: "Class engagement drops after 2:30 PM",
      confidence: 78,
      action: "Schedule interactive activities for late afternoon",
      priority: "medium",
      icon: Brain,
      color: "text-blue-600"
    }
  ];

  const learningStyles = [
    { name: "Visual", percentage: 45, color: "bg-purple-500" },
    { name: "Kinesthetic", percentage: 30, color: "bg-green-500" },
    { name: "Auditory", percentage: 25, color: "bg-blue-500" }
  ];

  const predictiveMetrics = [
    { metric: "Class Average Trajectory", current: 84, predicted: 87, trend: "+3%" },
    { metric: "Assignment Completion Rate", current: 78, predicted: 85, trend: "+7%" },
    { metric: "Engagement Score", current: 72, predicted: 76, trend: "+4%" }
  ];

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
              <h1 className="text-xl font-semibold text-gray-900">AI Analytics Hub</h1>
              <Badge variant="secondary" className="ml-3 bg-gradient-to-r from-purple-100 to-blue-100">
                <Brain className="h-3 w-3 mr-1" />
                AI Powered
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Ms. Johnson</span>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Insights Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🤖 AI-Generated Insights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {aiInsights.map((insight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <insight.icon className={`h-5 w-5 ${insight.color}`} />
                    <Badge variant={insight.priority === 'high' ? 'destructive' : 'secondary'}>
                      {insight.confidence}% confident
                    </Badge>
                  </div>
                  <CardTitle className="text-sm">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{insight.action}</p>
                  <Button size="sm" className="w-full">
                    Apply Suggestion
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Predictive Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2 text-blue-600" />
                Predictive Metrics
              </CardTitle>
              <CardDescription>30-day forecasting based on current trends</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {predictiveMetrics.map((metric, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{metric.metric}</span>
                    <span className="text-sm font-bold text-green-600">{metric.trend}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-gray-500">Current: {metric.current}%</span>
                    <Progress value={metric.current} className="flex-1" />
                    <span className="text-xs text-blue-600">→ {metric.predicted}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-5 w-5 mr-2 text-purple-600" />
                Learning Style Distribution
              </CardTitle>
              <CardDescription>AI-detected preferences across your class</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {learningStyles.map((style, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{style.name} Learners</span>
                    <span className="text-sm font-bold">{style.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`${style.color} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${style.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Smart Interventions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-5 w-5 mr-2 text-yellow-600" />
              Smart Intervention Recommendations
            </CardTitle>
            <CardDescription>AI-powered personalized learning adjustments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg bg-blue-50">
                <h4 className="font-medium text-blue-900 mb-2">Struggling Students</h4>
                <p className="text-sm text-blue-700 mb-3">3 students need extra support in multiplication</p>
                <Button size="sm" variant="outline" className="w-full">
                  Generate Support Plan
                </Button>
              </div>
              <div className="p-4 border rounded-lg bg-green-50">
                <h4 className="font-medium text-green-900 mb-2">Advanced Learners</h4>
                <p className="text-sm text-green-700 mb-3">2 students ready for challenge activities</p>
                <Button size="sm" variant="outline" className="w-full">
                  Create Extensions
                </Button>
              </div>
              <div className="p-4 border rounded-lg bg-purple-50">
                <h4 className="font-medium text-purple-900 mb-2">Engagement Boost</h4>
                <p className="text-sm text-purple-700 mb-3">Class energy low - suggest movement break</p>
                <Button size="sm" variant="outline" className="w-full">
                  Apply Suggestion
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AIAnalytics;
