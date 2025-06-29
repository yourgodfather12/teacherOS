
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { User, ArrowLeft, TrendingUp, Brain, Target, Calendar, Award, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const ParentInsights = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("month");
  
  const childData = {
    name: "Emma Davis",
    grade: "5th Grade",
    overallGPA: 3.7,
    predictedGPA: 3.9,
    engagementScore: 87,
    learningStyle: "Visual-Kinesthetic"
  };

  const subjectInsights = [
    {
      subject: "Mathematics",
      current: 89,
      trend: "+5%",
      prediction: 92,
      confidence: 94,
      insights: "Excelling in fractions, may struggle with word problems",
      nextMilestone: "Master division by decimals"
    },
    {
      subject: "Reading",
      current: 94,
      trend: "+2%", 
      prediction: 96,
      confidence: 87,
      insights: "Advanced comprehension, ready for higher level texts",
      nextMilestone: "Analyze complex character development"
    },
    {
      subject: "Science",
      current: 82,
      trend: "-3%",
      prediction: 85,
      confidence: 76,
      insights: "Strong in life science, needs support in physics concepts",
      nextMilestone: "Understand forces and motion"
    }
  ];

  const behaviorInsights = [
    { metric: "Focus & Attention", score: 85, change: "+8%" },
    { metric: "Collaboration", score: 92, change: "+3%" },
    { metric: "Initiative", score: 78, change: "+12%" },
    { metric: "Organization", score: 71, change: "-2%" }
  ];

  const weeklyPattern = [
    { day: "Mon", engagement: 88, mood: "😊" },
    { day: "Tue", engagement: 92, mood: "😄" },
    { day: "Wed", engagement: 76, mood: "😐" },
    { day: "Thu", engagement: 84, mood: "😊" },
    { day: "Fri", engagement: 68, mood: "😴" }
  ];

  const aiRecommendations = [
    {
      type: "strength",
      title: "Leverage Visual Learning Style",
      description: "Emma learns best with diagrams and visual aids. Consider educational videos and infographics for homework support.",
      priority: "medium",
      icon: Brain
    },
    {
      type: "support",
      title: "Wednesday Energy Dip",
      description: "Emma's engagement drops mid-week. Try a fun learning activity or extra encouragement on Wednesdays.",
      priority: "low",
      icon: TrendingUp
    },
    {
      type: "opportunity",
      title: "Ready for Advanced Reading",
      description: "Emma is reading above grade level. Consider chapter books or joining the advanced reading group.",
      priority: "high",
      icon: Target
    }
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/parent" className="mr-4">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">Advanced Insights</h1>
              <Badge variant="secondary" className="ml-3 bg-gradient-to-r from-purple-100 to-pink-100">
                <Brain className="h-3 w-3 mr-1" />
                AI Powered
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">{childData.name}'s Parent</span>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Child Overview */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{childData.name}</h2>
              <p className="text-gray-600">{childData.grade} • Learning Style: {childData.learningStyle}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">{childData.overallGPA}</div>
              <div className="text-sm text-gray-600">Current GPA</div>
            </div>
          </div>
        </div>

        {/* Predictive Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Predicted GPA</CardTitle>
              <CardDescription className="text-green-100">End of semester forecast</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{childData.predictedGPA}</div>
              <div className="text-sm">+{((childData.predictedGPA - childData.overallGPA) * 100 / childData.overallGPA).toFixed(1)}% improvement expected</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Engagement Score</CardTitle>
              <CardDescription>Overall classroom participation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">{childData.engagementScore}%</div>
              <Progress value={childData.engagementScore} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Weekly Mood</CardTitle>
              <CardDescription>Energy patterns throughout the week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                {weeklyPattern.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs text-gray-600 mb-1">{day.day}</div>
                    <div className="text-lg">{day.mood}</div>
                    <div className="text-xs text-gray-500">{day.engagement}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subject Deep Dive */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              Subject Performance & Predictions
            </CardTitle>
            <CardDescription>AI-powered insights for each subject area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {subjectInsights.map((subject, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">{subject.subject}</h4>
                      <p className="text-sm text-gray-600">{subject.insights}</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      {subject.confidence}% confidence
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{subject.current}%</div>
                      <div className="text-sm text-gray-600">Current Grade</div>
                      <Badge variant="outline" className="mt-1">{subject.trend}</Badge>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{subject.prediction}%</div>
                      <div className="text-sm text-gray-600">Predicted Grade</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-blue-600 font-medium">Next Milestone</div>
                      <div className="text-sm text-gray-700">{subject.nextMilestone}</div>
                    </div>
                  </div>
                  
                  <Progress value={subject.current} className="mb-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Current: {subject.current}%</span>
                    <span>Target: {subject.prediction}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Behavioral Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-purple-600" />
                Social-Emotional Development
              </CardTitle>
              <CardDescription>Key behavioral metrics and growth areas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {behaviorInsights.map((behavior, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{behavior.metric}</span>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">{behavior.change}</Badge>
                      <span className="text-sm font-bold">{behavior.score}%</span>
                    </div>
                  </div>
                  <Progress value={behavior.score} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-5 w-5 mr-2 text-green-600" />
                AI Recommendations
              </CardTitle>
              <CardDescription>Personalized suggestions for supporting learning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiRecommendations.map((rec, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <rec.icon className="h-4 w-4 text-gray-600" />
                    <Badge className={getPriorityColor(rec.priority)}>
                      {rec.priority}
                    </Badge>
                  </div>
                  <h5 className="font-medium text-sm mb-1">{rec.title}</h5>
                  <p className="text-xs text-gray-600">{rec.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ParentInsights;
