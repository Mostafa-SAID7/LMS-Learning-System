"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BookOpen,
  Users,
  Award,
  Play,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  Moon,
  Sun,
  Menu,
  X,
  Globe,
  Zap,
  Target,
  TrendingUp,
  Brain,
  Lightbulb,
  Rocket,
  Shield,
} from "lucide-react"
import { useTheme } from "next-themes"

export default function LearnSphereLMS() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const courses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Chen",
      rating: 4.9,
      students: 12500,
      duration: "8 weeks",
      price: 149,
      image: "/placeholder.svg?height=200&width=300",
      category: "Development",
      level: "Advanced",
    },
    {
      id: 2,
      title: "UI/UX Design Mastery",
      instructor: "Marcus Johnson",
      rating: 4.8,
      students: 8900,
      duration: "6 weeks",
      price: 129,
      image: "/placeholder.svg?height=200&width=300",
      category: "Design",
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      instructor: "Dr. Emily Rodriguez",
      rating: 4.9,
      students: 15200,
      duration: "10 weeks",
      price: 199,
      image: "/placeholder.svg?height=200&width=300",
      category: "Data Science",
      level: "Beginner",
    },
  ]

  const instructors = [
    {
      name: "Sarah Chen",
      title: "Senior Full-Stack Developer",
      company: "Google",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4.9,
      students: 25000,
      courses: 12,
    },
    {
      name: "Marcus Johnson",
      title: "Lead UX Designer",
      company: "Apple",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4.8,
      students: 18500,
      courses: 8,
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Data Science Director",
      company: "Microsoft",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4.9,
      students: 32000,
      courses: 15,
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: 29,
      period: "month",
      description: "Perfect for individual learners",
      features: ["Access to 100+ courses", "Mobile app access", "Basic support", "Certificate of completion"],
      popular: false,
    },
    {
      name: "Professional",
      price: 79,
      period: "month",
      description: "Best for serious learners",
      features: [
        "Access to 500+ courses",
        "Priority support",
        "Offline downloads",
        "Live workshops",
        "Career guidance",
        "Advanced analytics",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: 199,
      period: "month",
      description: "For teams and organizations",
      features: [
        "Unlimited course access",
        "Team management",
        "Custom learning paths",
        "Dedicated support",
        "Advanced reporting",
        "API access",
        "White-label options",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-charcoal to-navy text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-navy/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-purple rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-electric-blue to-purple bg-clip-text text-transparent">
                LearnSphere
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="hover:text-electric-blue transition-colors">
                Courses
              </a>
              <a href="#instructors" className="hover:text-electric-blue transition-colors">
                Instructors
              </a>
              <a href="#pricing" className="hover:text-electric-blue transition-colors">
                Pricing
              </a>
              <a href="#contact" className="hover:text-electric-blue transition-colors">
                Contact
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:bg-white/10"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button
                variant="outline"
                className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-navy bg-transparent"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-electric-blue to-purple hover:from-electric-blue/80 hover:to-purple/80">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hover:bg-white/10"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-md bg-navy/95 border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              <a href="#courses" className="block hover:text-electric-blue transition-colors">
                Courses
              </a>
              <a href="#instructors" className="block hover:text-electric-blue transition-colors">
                Instructors
              </a>
              <a href="#pricing" className="block hover:text-electric-blue transition-colors">
                Pricing
              </a>
              <a href="#contact" className="block hover:text-electric-blue transition-colors">
                Contact
              </a>
              <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="hover:bg-white/10"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>
                <Button
                  variant="outline"
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-navy bg-transparent"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-electric-blue/20 to-purple/20 text-electric-blue border-electric-blue/30">
                  🚀 Expand Your Universe of Knowledge
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Master New Skills with{" "}
                  <span className="bg-gradient-to-r from-electric-blue to-purple bg-clip-text text-transparent">
                    LearnSphere
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Join millions of learners worldwide in our premium learning ecosystem. Access expert-led courses,
                  interactive projects, and career-focused content.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-electric-blue to-purple hover:from-electric-blue/80 hover:to-purple/80 text-lg px-8"
                >
                  Start Learning Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-blue">50K+</div>
                  <div className="text-sm text-gray-400">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple">500+</div>
                  <div className="text-sm text-gray-400">Expert Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-blue">95%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Learning Dashboard</h3>
                    <Badge className="bg-green-500/20 text-green-400">Live</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-purple rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">React Masterclass</div>
                        <div className="text-xs text-gray-400">Progress: 75%</div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                          <div className="bg-gradient-to-r from-electric-blue to-purple h-2 rounded-full w-3/4"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple to-electric-blue rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">UI/UX Design</div>
                        <div className="text-xs text-gray-400">Progress: 45%</div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                          <div className="bg-gradient-to-r from-purple to-electric-blue h-2 rounded-full w-2/5"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-purple rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Data Science</div>
                        <div className="text-xs text-gray-400">Progress: 90%</div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                          <div className="bg-gradient-to-r from-electric-blue to-purple h-2 rounded-full w-9/10"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="glass-card p-4 rounded-lg">
                      <div className="text-2xl font-bold text-electric-blue">12</div>
                      <div className="text-xs text-gray-400">Completed</div>
                    </div>
                    <div className="glass-card p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple">3</div>
                      <div className="text-xs text-gray-400">In Progress</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Learning{" "}
              <span className="bg-gradient-to-r from-electric-blue to-purple bg-clip-text text-transparent">
                Categories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover courses across multiple disciplines designed by industry experts
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Globe, name: "Web Development", courses: 120 },
              { icon: Brain, name: "Data Science", courses: 85 },
              { icon: Lightbulb, name: "Design", courses: 95 },
              { icon: Rocket, name: "Marketing", courses: 70 },
              { icon: Shield, name: "Cybersecurity", courses: 45 },
              { icon: Zap, name: "AI & ML", courses: 60 },
              { icon: Users, name: "Business", courses: 110 },
              { icon: Award, name: "Certification", courses: 200 },
            ].map((category, index) => (
              <Card
                key={index}
                className="glass-card border-white/10 hover:border-electric-blue/50 transition-all duration-300 cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-purple rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-400">{category.courses} courses</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-electric-blue to-purple bg-clip-text text-transparent">
                Courses
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hand-picked courses from our top-rated instructors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="glass-card border-white/10 hover:border-electric-blue/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-electric-blue/20 to-purple/20 text-electric-blue border-electric-blue/30">
                      {course.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      {course.level}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-electric-blue transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-400">by {course.instructor}</p>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="text-2xl font-bold text-electric-blue">${course.price}</div>
                      <Button className="bg-gradient-to-r from-electric-blue to-purple hover:from-electric-blue/80 hover:to-purple/80">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-navy bg-transparent"
            >
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              World-Class{" "}
              <span className="bg-gradient-to-r from-electric-blue to-purple bg-clip-text text-transparent">
                Instructors
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Learn from industry experts and thought leaders</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card
                key={index}
                className="glass-card border-white/10 hover:border-electric-blue/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4 ring-2 ring-electric-blue/50 group-hover:ring-electric-blue transition-all">
                    <AvatarImage src={instructor.image || "/placeholder.svg"} alt={instructor.name} />
                    <AvatarFallback className="bg-gradient-to-r from-electric-blue to-purple text-white text-lg">
                      {instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
                  <p className="text-electric-blue font-medium mb-1">{instructor.title}</p>
                  <p className="text-gray-400 text-sm mb-4">{instructor.company}</p>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-lg font-bold text-electric-blue">{instructor.rating}</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple">{(instructor.students / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-gray-400">Students</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-electric-blue">{instructor.courses}</div>
                      <div className="text-xs text-gray-400">Courses</div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-navy bg-transparent"
                  >
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-electric-blue to-purple bg-clip-text text-transparent">
                Learning Plan
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your learning goals and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`glass-card border-white/10 transition-all duration-300 relative ${
                  plan.popular
                    ? "border-electric-blue/50 scale-105 shadow-2xl shadow-electric-blue/20"
                    : "hover:border-electric-blue/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-electric-blue to-purple text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-electric-blue">${plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-electric-blue to-purple hover:from-electric-blue/80 hover:to-purple/80"
                        : "bg-transparent border border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-navy"
                    }`}
                    size="lg"
                  >
                    {plan.popular ? "Get Started" : "Choose Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in{" "}
              <span className="bg-gradient-to-r from-electric-blue to-purple bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-300">Have questions? We'd love to hear from you.</p>
          </div>

          <Card className="glass-card border-white/10">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      className="bg-white/5 border-white/20 focus:border-electric-blue"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      className="bg-white/5 border-white/20 focus:border-electric-blue"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-white/5 border-white/20 focus:border-electric-blue"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    className="bg-white/5 border-white/20 focus:border-electric-blue"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    className="bg-white/5 border-white/20 focus:border-electric-blue resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-electric-blue to-purple hover:from-electric-blue/80 hover:to-purple/80"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-purple rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-electric-blue to-purple bg-clip-text text-transparent">
                  LearnSphere
                </span>
              </div>
              <p className="text-gray-400">Expand your universe of knowledge with our premium learning platform.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-electric-blue transition-colors">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric-blue transition-colors">
                    Instructors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric-blue transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric-blue transition-colors">
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-electric-blue transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric-blue transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric-blue transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric-blue transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-electric-blue transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric-blue transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric-blue transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-electric-blue transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LearnSphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
