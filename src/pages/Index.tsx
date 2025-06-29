
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  MessageSquare, 
  GraduationCap, 
  Shield, 
  CheckCircle2, 
  Star,
  ArrowRight,
  Brain,
  Clock,
  Target
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduMasterOS
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
              🚀 The OS for Modern Classrooms
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Transform Education
              <br />
              <span className="text-gray-800">With AI-Powered Unity</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop juggling 10+ tools. EduMasterOS unifies AI lesson planning, real-time student engagement, 
              gradebook management, and parent communication in one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
                Start Free for Teachers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <img 
                src="/placeholder.svg" 
                alt="EduMasterOS Dashboard"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              The Education Crisis No One Talks About
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teachers waste 2+ hours daily switching between tools. Parents stay in the dark. 
              Students fall behind before anyone notices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <Clock className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="text-red-700">Time Wasted</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-600">Teachers spend 40% of their time on admin tasks instead of teaching</p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-orange-700">Communication Gap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-600">Parents only hear about problems after it's too late to help</p>
              </CardContent>
            </Card>
            
            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <Target className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle className="text-yellow-700">Missed Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-600">Students need help but teachers can't identify struggling learners in real-time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="features" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              One Platform. Infinite Possibilities.
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              EduMasterOS brings together everything educators need in a single, AI-powered platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <Brain className="h-12 w-12 text-blue-200 mb-4" />
                <CardTitle>AI Lesson Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">Generate differentiated lesson plans in minutes, not hours</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-purple-200 mb-4" />
                <CardTitle>Real-Time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-100">See who's struggling instantly with live comprehension tracking</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <Users className="h-12 w-12 text-indigo-200 mb-4" />
                <CardTitle>Parent Portal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-indigo-100">Keep parents informed with real-time grades and attendance</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-pink-200 mb-4" />
                <CardTitle>Unified Gradebook</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pink-100">All assignments, assessments, and attendance in one place</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stakeholder Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Built for Everyone in Education
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Teachers */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">For Teachers</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Save 2+ hours daily with AI lesson planning
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  See real-time student comprehension
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Streamlined grading and attendance
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Direct parent communication
                </li>
              </ul>
            </div>
            
            {/* Parents */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">For Parents</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Real-time grades and attendance
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Assignment tracking and due dates
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Direct teacher messaging
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Progress insights and recommendations
                </li>
              </ul>
            </div>
            
            {/* Admins */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">For Administrators</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  School-wide analytics and insights
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Compliance-ready reporting
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Teacher performance metrics
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Budget optimization tools
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Trusted by Educators Nationwide
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"EduMasterOS saved me 3 hours every day. I can finally focus on teaching instead of administrative tasks."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Martinez</p>
                    <p className="text-gray-500">5th Grade Teacher</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"Finally! I know exactly how my daughter is doing in real-time. No more surprises at parent-teacher conferences."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold">Jennifer Davis</p>
                    <p className="text-gray-500">Parent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"Our district saw a 40% improvement in parent engagement after implementing EduMasterOS."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">RT</span>
                  </div>
                  <div>
                    <p className="font-semibold">Robert Thompson</p>
                    <p className="text-gray-500">District Administrator</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">Free for teachers. Funded by schools and districts.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Teacher</CardTitle>
                <CardDescription>Perfect for individual educators</CardDescription>
                <div className="text-4xl font-bold text-green-600 mt-4">FREE</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    AI Lesson Planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    Gradebook & Attendance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    Parent Communication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    Real-time Quizzes
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Start Free
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">School</CardTitle>
                <CardDescription>For schools and districts</CardDescription>
                <div className="text-4xl font-bold text-blue-600 mt-4">$15</div>
                <div className="text-gray-500">per teacher/month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    Everything in Teacher
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    Admin Dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    Compliance Reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    SIS Integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    Priority Support
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-500">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">District</CardTitle>
                <CardDescription>Enterprise solution</CardDescription>
                <div className="text-4xl font-bold text-purple-600 mt-4">Custom</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    Everything in School
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    District Analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    Custom Integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    Dedicated Success Manager
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    White-label Option
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                  Let's Talk
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Classroom?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of educators who have already revolutionized their teaching with EduMasterOS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Start Your Free Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-3">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">EduMasterOS</span>
              </div>
              <p className="text-gray-400">
                Empowering educators with AI-powered tools for better student outcomes.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FERPA Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduMasterOS. All rights reserved. Built with ❤️ for educators.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
