
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LessonPlanner = () => {
  const [topic, setTopic] = useState("");
  const [gradeLevel, setGradeLevel] = useState("5th");
  const [subject, setSubject] = useState("Math");
  const [duration, setDuration] = useState("45");
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateLessonPlan = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedPlan({
        title: `${subject}: ${topic}`,
        objectives: [
          "Students will understand the basic concepts",
          "Students will be able to apply knowledge",
          "Students will demonstrate mastery through practice"
        ],
        activities: [
          { name: "Warm-up Activity", duration: "10 min", description: "Review previous concepts" },
          { name: "Main Lesson", duration: "25 min", description: "Introduce new topic with examples" },
          { name: "Practice Time", duration: "10 min", description: "Students work on guided practice" }
        ],
        materials: ["Whiteboard", "Worksheets", "Calculator", "Interactive slides"],
        assessment: "Exit ticket with 3 questions to check understanding"
      });
      setIsGenerating(false);
    }, 2000);
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
              <h1 className="text-xl font-semibold text-gray-900">AI Lesson Planner</h1>
              <Badge variant="secondary" className="ml-3">Teacher</Badge>
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle>Create New Lesson</CardTitle>
              <CardDescription>Tell me what you want to teach and I'll create a detailed lesson plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">What's today's topic?</label>
                <Input
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., Fractions and Decimals"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Math">Math</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                    <option value="Social Studies">Social Studies</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Grade Level</label>
                  <select
                    value={gradeLevel}
                    onChange={(e) => setGradeLevel(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="K">Kindergarten</option>
                    <option value="1st">1st Grade</option>
                    <option value="2nd">2nd Grade</option>
                    <option value="3rd">3rd Grade</option>
                    <option value="4th">4th Grade</option>
                    <option value="5th">5th Grade</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label>
                <Input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="45"
                />
              </div>
              <Button 
                onClick={generateLessonPlan} 
                className="w-full"
                disabled={!topic || isGenerating}
              >
                {isGenerating ? "Generating..." : "Generate Lesson Plan"}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Plan */}
          {generatedPlan && (
            <Card>
              <CardHeader>
                <CardTitle>{generatedPlan.title}</CardTitle>
                <CardDescription>{gradeLevel} Grade • {duration} minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Learning Objectives</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    {generatedPlan.objectives.map((obj, index) => (
                      <li key={index}>{obj}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Activities</h4>
                  <div className="space-y-3">
                    {generatedPlan.activities.map((activity, index) => (
                      <div key={index} className="border-l-4 border-blue-400 pl-4">
                        <div className="flex justify-between items-center">
                          <h5 className="font-medium">{activity.name}</h5>
                          <Badge variant="outline">{activity.duration}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Materials Needed</h4>
                  <div className="flex flex-wrap gap-2">
                    {generatedPlan.materials.map((material, index) => (
                      <Badge key={index} variant="secondary">{material}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Assessment</h4>
                  <p className="text-sm text-gray-600">{generatedPlan.assessment}</p>
                </div>

                <div className="flex space-x-3">
                  <Button className="flex-1">Save Lesson</Button>
                  <Button variant="outline" className="flex-1">Edit Plan</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default LessonPlanner;
