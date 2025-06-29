
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">EduMasterOS</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/signin">
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started Free</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-4">
          Free for Teachers • Trusted by 10,000+ Educators
        </Badge>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          The <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Operating System</span><br />
          for Modern Classrooms
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform education with AI-powered lesson planning, real-time student engagement, 
          and unified classroom management. Everything teachers need in one beautiful platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signin">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              Start Teaching Smarter
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            Watch Demo
          </Button>
        </div>
      </section>

      {/* Features for Different Users */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Everyone in Education</h2>
          <p className="text-lg text-gray-600">One platform, three powerful experiences</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Teachers */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👩‍🏫
              </div>
              <CardTitle className="text-xl text-gray-900">For Teachers</CardTitle>
              <CardDescription>AI-powered teaching tools that save hours every day</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">AI lesson planner with differentiation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Real-time comprehension tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">One-click attendance & grading</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Parent communication hub</span>
                </div>
              </div>
              <Link to="/signin">
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Explore Teacher Tools
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Parents */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👨‍👩‍👧‍👦
              </div>
              <CardTitle className="text-xl text-gray-900">For Parents</CardTitle>
              <CardDescription>Stay connected with your child's education journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Real-time grades & attendance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Assignment tracking & due dates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Direct teacher messaging</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Progress insights & alerts</span>
                </div>
              </div>
              <Link to="/signin">
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Access Parent Portal
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Admins */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                🏫
              </div>
              <CardTitle className="text-xl text-gray-900">For Admins</CardTitle>
              <CardDescription>District-wide insights and compliance made simple</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">School-wide analytics dashboard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Compliance reporting automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Teacher usage & engagement stats</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Budget & ROI tracking</span>
                </div>
              </div>
              <Link to="/signin">
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                  View Admin Features
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Classroom?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of educators already using EduMasterOS to create engaging, 
            data-driven learning experiences.
          </p>
          <Link to="/signin">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Get Started Free Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
