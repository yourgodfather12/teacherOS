
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { User, ArrowLeft, Eye, Activity, Zap, Users, Timer, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const LiveEngagement = () => {
  const [isLive, setIsLive] = useState(false);
  const [overallEngagement, setOverallEngagement] = useState(73);
  const [activeTime, setActiveTime] = useState(0);

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setActiveTime(prev => prev + 1);
        // Simulate engagement fluctuation
        setOverallEngagement(prev => prev + (Math.random() - 0.5) * 4);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isLive]);

  const students = [
    { name: "Emma Davis", engagement: 89, attention: "High", participation: 12, mood: "😊" },
    { name: "Jake Wilson", engagement: 65, attention: "Medium", participation: 8, mood: "😐" },
    { name: "Sofia Martinez", engagement: 94, attention: "High", participation: 15, mood: "🤩" },
    { name: "Alex Johnson", engagement: 34, attention: "Low", participation: 2, mood: "😴" },
    { name: "Maya Patel", engagement: 81, attention: "High", participation: 11, mood: "😊" }
  ];

  const realTimeMetrics = [
    { label: "Questions Asked", value: 23, change: "+3", icon: "❓" },
    { label: "Hands Raised", value: 15, change: "+2", icon: "🙋" },
    { label: "Collaborative Moments", value: 8, change: "+1", icon: "🤝" },
    { label: "Confusion Signals", value: 4, change: "-1", icon: "🤔" }
  ];

  const getEngagementColor = (score) => {
    if (score >= 80) return "text-green-600 bg-green-100";
    if (score >= 60) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
              <h1 className="text-xl font-semibold text-gray-900">Live Engagement Tracker</h1>
              <Badge variant={isLive ? "default" : "secondary"} className="ml-3">
                {isLive ? (
                  <>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                    LIVE
                  </>
                ) : (
                  "OFFLINE"
                )}
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => setIsLive(!isLive)}
                variant={isLive ? "destructive" : "default"}
              >
                {isLive ? "Stop Tracking" : "Start Live Session"}
              </Button>
              <span className="text-sm text-gray-700">Ms. Johnson</span>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Live Session Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Overall Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{Math.round(overallEngagement)}%</div>
              <Progress value={overallEngagement} className="mt-2 bg-white/20" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Timer className="h-5 w-5 mr-2 text-green-600" />
                Session Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{formatTime(activeTime)}</div>
              <div className="text-sm text-gray-600">Active learning time</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                Active Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">
                {students.filter(s => s.engagement > 60).length}/{students.length}
              </div>
              <div className="text-sm text-gray-600">Actively engaged</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-600" />
                Energy Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">High</div>
              <div className="text-sm text-gray-600">Class energy</div>
            </CardContent>
          </Card>
        </div>

        {/* Real-Time Metrics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
              Real-Time Participation Metrics
            </CardTitle>
            <CardDescription>Live tracking of classroom interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {realTimeMetrics.map((metric, index) => (
                <div key={index} className="text-center p-4 border rounded-lg bg-gray-50">
                  <div className="text-2xl mb-2">{metric.icon}</div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {metric.change}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Individual Student Tracking */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="h-5 w-5 mr-2 text-purple-600" />
              Individual Student Engagement
            </CardTitle>
            <CardDescription>Real-time monitoring of each student's participation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {students.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{student.mood}</div>
                    <div>
                      <div className="font-medium">{student.name}</div>
                      <div className="text-sm text-gray-600">
                        {student.participation} interactions today
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Attention</div>
                      <Badge variant="outline">{student.attention}</Badge>
                    </div>
                    
                    <div className="text-center min-w-24">
                      <div className="text-sm text-gray-600">Engagement</div>
                      <Badge className={getEngagementColor(student.engagement)}>
                        {student.engagement}%
                      </Badge>
                    </div>
                    
                    <div className="w-32">
                      <Progress value={student.engagement} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LiveEngagement;
