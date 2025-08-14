"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Play, Users, BookOpen, Award, Star, ChevronRight, Menu, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function EduNovaLMS() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const courses = [
    {
      title: "Advanced React Development",
      instructor: "Sarah Chen",
      rating: 4.9,
      students: 2847,
      duration: "12 weeks",
      level: "Advanced",
      price: "$149",
      image: "/react-development-course.png",
    },
    {
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Marcus Johnson",
      rating: 4.8,
      students: 1923,
      duration: "16 weeks",
      level: "Intermediate",
      price: "$199",
      image: "/machine-learning-course.png",
    },
    {
      title: "UI/UX Design Mastery",
      instructor: "Elena Rodriguez",
      rating: 4.9,
      students: 3156,
      duration: "10 weeks",
      level: "Beginner",
      price: "$129",
      image: "/ui-ux-design-course.png",
    },
    {
      title: "Data Science with Python",
      instructor: "Alex Kumar",
      rating: 4.7,
      students: 2134,
      duration: "14 weeks",
      level: "Intermediate",
      price: "$179",
      image: "/data-science-python-course.png",
    },
  ]

  const instructors = [
    {
      name: "Sarah Chen",
      title: "Senior React Developer",
      company: "Google",
      rating: 4.9,
      students: 15000,
      courses: 8,
      image: "/female-tech-instructor.png",
    },
    {
      name: "Dr. Marcus Johnson",
      title: "ML Research Scientist",
      company: "OpenAI",
      rating: 4.8,
      students: 12000,
      courses: 6,
      image: "/male-professor-ai.png",
    },
    {
      name: "Elena Rodriguez",
      title: "Lead UX Designer",
      company: "Apple",
      rating: 4.9,
      students: 18000,
      courses: 12,
      image: "/creative-female-designer.png",
    },
  ]

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Interactive Learning",
      description: "Engage with hands-on projects and real-world scenarios",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals and thought leaders",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Completion",
      description: "Earn recognized certificates to boost your career",
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Self-Paced Learning",
      description: "Study at your own pace with lifetime access",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for beginners",
      features: ["Access to 50+ courses", "Basic certificates", "Community support", "Mobile app access"],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "For serious learners",
      features: [
        "Access to 500+ courses",
        "Verified certificates",
        "1-on-1 mentoring",
        "Priority support",
        "Offline downloads",
        "Advanced analytics",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For teams and organizations",
      features: [
        "Unlimited course access",
        "Custom learning paths",
        "Team management",
        "Advanced reporting",
        "API access",
        "Dedicated support",
      ],
      popular: false,
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark bg-[#0A0E27]" : "bg-gray-50"}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 dark:bg-black/20 border-b border-white/20">
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
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              <Button className="hidden md:flex bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] hover:from-[#00B8E6] hover:to-[#7A4FE6] text-white border-0">
                Get Started
              </Button>

              {/* Mobile menu button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 dark:bg-black/20 backdrop-blur-md border-t border-white/20">
            <div className="px-4 py-4 space-y-4">
              <a href="#courses" className="block text-gray-700 dark:text-gray-300 hover:text-[#00D4FF]">
                Courses
              </a>
              <a href="#instructors" className="block text-gray-700 dark:text-gray-300 hover:text-[#00D4FF]">
                Instructors
              </a>
              <a href="#pricing" className="block text-gray-700 dark:text-gray-300 hover:text-[#00D4FF]">
                Pricing
              </a>
              <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-[#00D4FF]">
                Contact
              </a>
              <Button className="w-full bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] text-white">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <Badge className="mb-4 bg-white/10 backdrop-blur-sm text-white border-white/20">
              🚀 New: AI-Powered Learning Paths
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Learn Without
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] bg-clip-text text-transparent">Limits</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your career with cutting-edge courses taught by industry experts. Join millions of learners on
              EduNova.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] hover:from-[#00B8E6] hover:to-[#7A4FE6] text-white text-lg px-8 py-4"
            >
              Start Learning Today
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl">
              <div className="bg-gradient-to-br from-[#1A1D29] to-[#0A0E27] rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Learning Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-[#00D4FF] mb-1">12</div>
                    <div className="text-sm text-gray-400">Courses Completed</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-[#8B5FFF] mb-1">89%</div>
                    <div className="text-sm text-gray-400">Average Score</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-[#39FF14] mb-1">156h</div>
                    <div className="text-sm text-gray-400">Learning Time</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">React Advanced Concepts</span>
                    <span className="text-[#00D4FF] text-sm">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] h-2 rounded-full w-[85%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] bg-clip-text text-transparent">
                Why Choose EduNova?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of online learning with our cutting-edge platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 hover:border-[#00D4FF]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white/5 dark:bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] bg-clip-text text-transparent">
                Featured Courses
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Master in-demand skills with our expertly crafted curriculum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 hover:border-[#00D4FF]/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#8B5FFF] text-white">{course.level}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{course.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">by {course.instructor}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {course.rating} ({course.students})
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{course.duration}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#00D4FF]">{course.price}</span>
                    <Button size="sm" className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] text-white">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] bg-clip-text text-transparent">
                World-Class Instructors
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn from industry leaders and experts who are shaping the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card
                key={index}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 hover:border-[#00D4FF]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gradient-to-r from-[#00D4FF] to-[#8B5FFF]"
                  />
                  <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{instructor.name}</h3>
                  <p className="text-[#00D4FF] mb-1">{instructor.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{instructor.company}</p>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-[#8B5FFF]">{instructor.rating}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#00D4FF]">{instructor.students.toLocaleString()}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Students</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#39FF14]">{instructor.courses}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Courses</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white/5 dark:bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-white/10 dark:bg-white/5 backdrop-blur-md border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular
                    ? "border-[#00D4FF] shadow-lg shadow-[#00D4FF]/20"
                    : "border-white/20 hover:border-[#00D4FF]/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-[#00D4FF]">{plan.price}</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-[#39FF14] mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] hover:from-[#00B8E6] hover:to-[#7A4FE6] text-white"
                        : "bg-white/10 hover:bg-white/20 text-gray-900 dark:text-white border border-white/20"
                    }`}
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
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ready to start your learning journey? Contact us today!
            </p>
          </div>

          <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input
                      className="bg-white/10 border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                    <Input
                      className="bg-white/10 border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    className="bg-white/10 border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <Textarea
                    rows={4}
                    className="bg-white/10 border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Tell us about your learning goals..."
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] hover:from-[#00B8E6] hover:to-[#7A4FE6] text-white text-lg py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0E27] border-t border-white/10 py-12">
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
              <p className="text-sm text-gray-500">Transform your career with cutting-edge online education.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
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
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
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
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
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

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-500">© 2024 EduNova. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
