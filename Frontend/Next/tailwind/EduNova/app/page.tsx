"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Play, Users, BookOpen, Award, Star, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function EduNovaLMS() {
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const courses = [
    {
      title: "Advanced React Development",
      instructor: "Sarah Chen",
      rating: 4.9,
      students: 2847,
      duration: "12 weeks",
      level: "Advanced",
      price: "$149",
      image: "/placeholder.svg?height=200&width=300",
      progress: 0,
    },
    {
      title: "UI/UX Design Mastery",
      instructor: "Marcus Rodriguez",
      rating: 4.8,
      students: 1923,
      duration: "8 weeks",
      level: "Intermediate",
      price: "$129",
      image: "/placeholder.svg?height=200&width=300",
      progress: 0,
    },
    {
      title: "Data Science Fundamentals",
      instructor: "Dr. Emily Watson",
      rating: 4.9,
      students: 3156,
      duration: "16 weeks",
      level: "Beginner",
      price: "$199",
      image: "/placeholder.svg?height=200&width=300",
      progress: 0,
    },
  ]

  const instructors = [
    {
      name: "Sarah Chen",
      title: "Senior React Developer",
      company: "Meta",
      rating: 4.9,
      students: 15420,
      courses: 12,
      image: "/placeholder.svg?height=120&width=120",
      specialties: ["React", "TypeScript", "Next.js"],
    },
    {
      name: "Marcus Rodriguez",
      title: "Lead UX Designer",
      company: "Google",
      rating: 4.8,
      students: 12350,
      courses: 8,
      image: "/placeholder.svg?height=120&width=120",
      specialties: ["Figma", "Design Systems", "User Research"],
    },
    {
      name: "Dr. Emily Watson",
      title: "Data Science Director",
      company: "Netflix",
      rating: 4.9,
      students: 18750,
      courses: 15,
      image: "/placeholder.svg?height=120&width=120",
      specialties: ["Python", "Machine Learning", "Statistics"],
    },
  ]

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Interactive Learning",
      description: "Engage with hands-on projects, quizzes, and real-world scenarios",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals and thought leaders",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificates",
      description: "Earn recognized certificates upon course completion",
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "On-Demand Access",
      description: "Learn at your own pace with lifetime access to content",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individual learners",
      features: ["Access to 100+ courses", "Basic certificates", "Community access", "Mobile app access"],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Best for serious learners",
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
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-[#0A0E27]" : "bg-gray-50"}`}>
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
                onClick={() => setIsDark(!isDark)}
                className="text-gray-700 dark:text-gray-300 hover:bg-white/10"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              <Button className="hidden md:flex bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] hover:from-[#00B8E6] hover:to-[#7A4FE6] text-white">
                Get Started
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-700 dark:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-md bg-white/10 dark:bg-black/20 border-t border-white/20">
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
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5FFF]/20 text-[#00D4FF] border-[#00D4FF]/30">
                  Learn Without Limits
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Master New Skills with{" "}
                  <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] bg-clip-text text-transparent">
                    EduNova
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Join thousands of learners advancing their careers with our premium online courses. Expert-led
                  instruction, hands-on projects, and industry-recognized certificates.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] hover:from-[#00B8E6] hover:to-[#7A4FE6] text-white"
                >
                  Start Learning Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF]/10 bg-transparent"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-[#00D4FF]" />
                  <span>50K+ Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-[#8B5FFF]" />
                  <span>500+ Courses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[#00D4FF]" />
                  <span>Industry Certified</span>
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="relative backdrop-blur-md bg-white/10 dark:bg-black/20 rounded-2xl border border-white/20 p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Learning Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#00D4FF]/10 to-[#8B5FFF]/10 rounded-lg border border-[#00D4FF]/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">React Mastery</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">75% Complete</p>
                      </div>
                    </div>
                    <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF]"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 dark:bg-black/20 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#8B5FFF] to-[#00D4FF] rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">UX Design</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">45% Complete</p>
                      </div>
                    </div>
                    <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-2/5 h-full bg-gradient-to-r from-[#8B5FFF] to-[#00D4FF]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5FFF]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#8B5FFF]/20 to-[#00D4FF]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose EduNova?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of online learning with our cutting-edge platform designed for modern learners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/10 dark:bg-black/20 border-white/20 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5FFF]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#00D4FF]">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our most popular courses taught by industry experts and loved by students worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/10 dark:bg-black/20 border-white/20 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] text-white">{course.level}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      {course.duration}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{course.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {course.students.toLocaleString()} students
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{course.title}</h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">by {course.instructor}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#00D4FF]">{course.price}</span>
                    <Button className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] hover:from-[#00B8E6] hover:to-[#7A4FE6] text-white">
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
      <section id="instructors" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Learn from the Best</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our instructors are industry leaders and experts who bring real-world experience to every lesson.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/10 dark:bg-black/20 border-white/20 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gradient-to-r from-[#00D4FF] to-[#8B5FFF]"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] text-white text-xs">
                        ⭐ {instructor.rating}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{instructor.name}</h3>
                  <p className="text-[#00D4FF] font-medium mb-1">{instructor.title}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{instructor.company}</p>

                  <div className="flex justify-center space-x-6 mb-4 text-sm">
                    <div className="text-center">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {instructor.students.toLocaleString()}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">Students</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900 dark:text-white">{instructor.courses}</p>
                      <p className="text-gray-600 dark:text-gray-400">Courses</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {instructor.specialties.map((specialty, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/20"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to fit your learning goals and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`backdrop-blur-md border-white/20 transition-all duration-300 relative ${
                  plan.popular
                    ? "bg-gradient-to-b from-[#00D4FF]/10 to-[#8B5FFF]/10 border-[#00D4FF]/30 scale-105"
                    : "bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] text-white">Most Popular</Badge>
                  </div>
                )}

                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-[#00D4FF]">{plan.price}</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] hover:from-[#00B8E6] hover:to-[#7A4FE6] text-white"
                        : "border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF]/10"
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
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get in touch with our team or start your free trial today.
            </p>
          </div>

          <Card className="backdrop-blur-md bg-white/10 dark:bg-black/20 border-white/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Full Name</label>
                    <Input
                      placeholder="Enter your full name"
                      className="bg-white/10 dark:bg-black/20 border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/10 dark:bg-black/20 border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Phone Number</label>
                    <Input
                      placeholder="Enter your phone number"
                      className="bg-white/10 dark:bg-black/20 border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about your learning goals..."
                      rows={6}
                      className="bg-white/10 dark:bg-black/20 border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 resize-none"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] hover:from-[#00B8E6] hover:to-[#7A4FE6] text-white">
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#8B5FFF] bg-clip-text text-transparent">
                  EduNova
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Learn Without Limits. Master new skills with our premium online learning platform.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00D4FF] transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
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

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2024 EduNova. All rights reserved. Learn Without Limits.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
