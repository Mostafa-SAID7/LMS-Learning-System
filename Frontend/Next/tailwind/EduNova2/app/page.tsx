"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Play, Users, BookOpen, Award, Star, ChevronRight, Menu, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function EduNovaLMS() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  const courses = [
    {
      title: "Advanced React Development",
      instructor: "Sarah Chen",
      rating: 4.9,
      students: 12500,
      duration: "8 weeks",
      level: "Advanced",
      price: "$149",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Marcus Johnson",
      rating: 4.8,
      students: 8900,
      duration: "12 weeks",
      level: "Intermediate",
      price: "$199",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "UI/UX Design Mastery",
      instructor: "Elena Rodriguez",
      rating: 4.9,
      students: 15200,
      duration: "6 weeks",
      level: "Beginner",
      price: "$129",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Data Science with Python",
      instructor: "Alex Kumar",
      rating: 4.7,
      students: 9800,
      duration: "10 weeks",
      level: "Intermediate",
      price: "$179",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const instructors = [
    {
      name: "Sarah Chen",
      title: "Senior React Developer",
      company: "Google",
      rating: 4.9,
      students: 25000,
      courses: 12,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Dr. Marcus Johnson",
      title: "ML Research Scientist",
      company: "OpenAI",
      rating: 4.8,
      students: 18500,
      courses: 8,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Elena Rodriguez",
      title: "Lead UX Designer",
      company: "Apple",
      rating: 4.9,
      students: 32000,
      courses: 15,
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individual learners",
      features: [
        "Access to 100+ courses",
        "Basic progress tracking",
        "Community access",
        "Mobile app access",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      description: "Best for serious learners",
      features: [
        "Access to all 500+ courses",
        "Advanced analytics",
        "Priority support",
        "Offline downloads",
        "Certificates of completion",
        "1-on-1 mentoring sessions",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team management",
        "Custom learning paths",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
      ],
      popular: false,
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-[#0A0E27]" : "bg-gray-50"}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 dark:bg-[#0A0E27]/80 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] bg-clip-text text-transparent">
                EduNova
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-gray-700 dark:text-gray-300 hover:text-[#00D4FF] transition-colors">
                Courses
              </a>
              <a
                href="#instructors"
                className="text-gray-700 dark:text-gray-300 hover:text-[#00D4FF] transition-colors"
              >
                Instructors
              </a>
              <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-[#00D4FF] transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-[#00D4FF] transition-colors">
                Contact
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              <Button className="hidden md:flex bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] hover:from-[#00B8E6] hover:to-[#7A4FE6] text-white">
                Get Started
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-md bg-white/10 dark:bg-[#1A1D29]/90 border-t border-white/20">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#courses"
                className="block text-gray-700 dark:text-gray-300 hover:text-[#00D4FF] transition-colors"
              >
                Courses
              </a>
              <a
                href="#instructors"
                className="block text-gray-700 dark:text-gray-300 hover:text-[#00D4FF] transition-colors"
              >
                Instructors
              </a>
              <a
                href="#pricing"
                className="block text-gray-700 dark:text-gray-300 hover:text-[#00D4FF] transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block text-gray-700 dark:text-gray-300 hover:text-[#00D4FF] transition-colors"
              >
                Contact
              </a>
              <Button className="w-full bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] hover:from-[#00B8E6] hover:to-[#7A4FE6] text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E27] via-[#1A1D29] to-[#0A0E27]" />

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-[#00D4FF]/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B5FFF]/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5FFF]/20 text-[#00D4FF] border-[#00D4FF]/30">
              🚀 Learn Without Limits
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#00D4FF] to-[#8B5FFF] bg-clip-text text-transparent">
              Master Skills with
              <br />
              <span className="text-[#00D4FF]">EduNova</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of learners advancing their careers with our cutting-edge courses, expert instructors, and
              interactive learning platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] hover:from-[#00B8E6] hover:to-[#7A4FE6] text-white px-8 py-4 text-lg"
            >
              Start Learning Today
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF]/10 px-8 py-4 text-lg bg-transparent"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-white/10 dark:bg-[#1A1D29]/40 rounded-2xl border border-white/20 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="text-sm text-gray-400">Student Dashboard</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="backdrop-blur-sm bg-gradient-to-br from-[#00D4FF]/20 to-[#8B5FFF]/20 rounded-lg p-4 border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">12</div>
                  <div className="text-sm text-gray-300">Courses Completed</div>
                </div>
                <div className="backdrop-blur-sm bg-gradient-to-br from-[#8B5FFF]/20 to-[#00D4FF]/20 rounded-lg p-4 border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">89%</div>
                  <div className="text-sm text-gray-300">Average Score</div>
                </div>
                <div className="backdrop-blur-sm bg-gradient-to-br from-[#00D4FF]/20 to-[#8B5FFF]/20 rounded-lg p-4 border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">156h</div>
                  <div className="text-sm text-gray-300">Learning Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our most popular courses designed by industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="group backdrop-blur-md bg-white/5 dark:bg-[#1A1D29]/40 border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] text-white">{course.level}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 backdrop-blur-sm bg-black/50 rounded-full px-2 py-1 text-sm text-white">
                    {course.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-[#00D4FF] transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">by {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-300">{course.rating}</span>
                      <span className="text-sm text-gray-400">({course.students.toLocaleString()})</span>
                    </div>
                    <div className="text-xl font-bold text-[#00D4FF]">{course.price}</div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] hover:from-[#00B8E6] hover:to-[#7A4FE6] text-white">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#8B5FFF] bg-clip-text text-transparent">
              Why Choose EduNova?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of online learning with our advanced platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Interactive Learning",
                description: "Engage with hands-on projects, quizzes, and real-world simulations",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Instructors",
                description: "Learn from industry professionals and thought leaders",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Certificates",
                description: "Earn recognized certificates to boost your career prospects",
              },
              {
                icon: <Play className="w-8 h-8" />,
                title: "Flexible Learning",
                description: "Study at your own pace with lifetime access to content",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community Support",
                description: "Connect with peers and mentors in our vibrant community",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Premium Quality",
                description: "High-quality content updated regularly with latest trends",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/5 dark:bg-[#1A1D29]/40 border border-white/10 hover:border-[#8B5FFF]/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white group-hover:text-[#8B5FFF] transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent">
              Meet Our Instructors
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Learn from the best in the industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/5 dark:bg-[#1A1D29]/40 border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 group text-center"
              >
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <img
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      className="w-24 h-24 rounded-full mx-auto border-4 border-gradient-to-r from-[#00D4FF] to-[#8B5FFF]"
                    />
                  </div>
                  <CardTitle className="text-white group-hover:text-[#00D4FF] transition-colors">
                    {instructor.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {instructor.title} at {instructor.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#00D4FF]">{instructor.rating}</div>
                      <div className="text-sm text-gray-400">Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#8B5FFF]">{instructor.students.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">Students</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#00D4FF]">{instructor.courses}</div>
                      <div className="text-sm text-gray-400">Courses</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#8B5FFF] bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options to fit your learning goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`backdrop-blur-md border transition-all duration-300 group relative overflow-hidden ${
                  plan.popular
                    ? "bg-gradient-to-b from-[#00D4FF]/10 to-[#8B5FFF]/10 border-[#00D4FF]/50 scale-105"
                    : "bg-white/5 dark:bg-[#1A1D29]/40 border-white/10 hover:border-[#8B5FFF]/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className={plan.popular ? "pt-12" : ""}>
                  <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-[#00D4FF]">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-300">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-[#00D4FF] mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] hover:from-[#00B8E6] hover:to-[#7A4FE6] text-white"
                        : "border-[#8B5FFF] text-[#8B5FFF] hover:bg-[#8B5FFF]/10"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your learning journey? Contact us today!
            </p>
          </div>

          <Card className="backdrop-blur-md bg-white/5 dark:bg-[#1A1D29]/40 border border-white/10">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00D4FF]"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00D4FF]"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00D4FF]"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00D4FF] min-h-[120px]"
                    placeholder="Tell us about your learning goals..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] hover:from-[#00B8E6] hover:to-[#7A4FE6] text-white py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] bg-clip-text text-transparent">
                  EduNova
                </span>
              </div>
              <p className="text-gray-400 mb-4">Learn Without Limits</p>
              <p className="text-gray-400 text-sm">
                Empowering learners worldwide with cutting-edge education technology.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    Instructors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    Certificates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    System Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduNova. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
