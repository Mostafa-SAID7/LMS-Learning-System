import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  Users,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Globe,
  Zap,
  Target,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EdooLandingPage() {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master modern web development with React, Node.js, and databases",
      duration: "12 weeks",
      students: "2,847",
      rating: 4.9,
      price: "$299",
      image: "/placeholder.svg?height=200&width=300",
      category: "Development",
      level: "Intermediate",
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      description: "Learn SEO, social media marketing, and conversion optimization",
      duration: "8 weeks",
      students: "1,923",
      rating: 4.8,
      price: "$199",
      image: "/placeholder.svg?height=200&width=300",
      category: "Marketing",
      level: "Beginner",
    },
    {
      id: 3,
      title: "Data Science & Analytics",
      description: "Python, machine learning, and data visualization techniques",
      duration: "16 weeks",
      students: "1,456",
      rating: 4.9,
      price: "$399",
      image: "/placeholder.svg?height=200&width=300",
      category: "Data Science",
      level: "Advanced",
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      description: "Create beautiful and user-friendly digital experiences",
      duration: "10 weeks",
      students: "2,134",
      rating: 4.7,
      price: "$249",
      image: "/placeholder.svg?height=200&width=300",
      category: "Design",
      level: "Beginner",
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Build iOS and Android apps with React Native and Flutter",
      duration: "14 weeks",
      students: "987",
      rating: 4.8,
      price: "$349",
      image: "/placeholder.svg?height=200&width=300",
      category: "Development",
      level: "Intermediate",
    },
    {
      id: 6,
      title: "Cybersecurity Essentials",
      description: "Protect systems and networks from digital threats",
      duration: "12 weeks",
      students: "756",
      rating: 4.9,
      price: "$299",
      image: "/placeholder.svg?height=200&width=300",
      category: "Security",
      level: "Intermediate",
    },
  ]

  const certifications = [
    {
      title: "Professional Web Developer",
      description: "Industry-recognized certification for full-stack development",
      icon: <Globe className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Digital Marketing Expert",
      description: "Certified expertise in modern marketing strategies",
      icon: <Target className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Data Science Professional",
      description: "Advanced certification in data analysis and ML",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "UX Design Specialist",
      description: "Certified user experience design professional",
      icon: <Zap className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
    },
  ]

  const stats = [
    { number: "50,000+", label: "Students Enrolled" },
    { number: "200+", label: "Expert Instructors" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Edoo
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Courses
            </Link>
            <Link href="#certifications" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Certifications
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">🚀 New Courses Available</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Transform Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Career
                  </span>{" "}
                  with Expert-Led Courses
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join thousands of learners advancing their skills with our comprehensive online courses. Get certified
                  and boost your career with industry-recognized credentials.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8"
                >
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20" />
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Students learning online"
                width={800}
                height={600}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700">Featured Courses</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">Master In-Demand Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive catalog of courses designed by industry experts to help you achieve your
              career goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-700">{course.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                </div>

                <CardHeader className="space-y-2">
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">{course.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{course.price}</div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700">Bonus Certifications</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">Get Industry-Recognized Certificates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Boost your credibility with our professional certifications that are recognized by top companies
              worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-lg text-center"
              >
                <CardHeader className="space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {cert.icon}
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700">About Edoo</Badge>
                <h2 className="text-3xl lg:text-5xl font-bold">Empowering Learners Worldwide</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  At Edoo, we believe education should be accessible, engaging, and transformative. Our platform
                  connects learners with world-class instructors and cutting-edge curriculum.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "Expert-designed curriculum updated regularly",
                  "Interactive learning with hands-on projects",
                  "24/7 support from our dedicated team",
                  "Career guidance and job placement assistance",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Learn More About Us
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl blur-3xl opacity-20" />
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our team"
                width={600}
                height={500}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Stay Updated with Latest Courses</h2>
            <p className="text-xl text-blue-100">
              Subscribe to our newsletter and be the first to know about new courses, special offers, and learning tips.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gray-200 text-gray-700">Get in Touch</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">Ready to Start Learning?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our courses? Our team is here to help you choose the right learning path for your
              goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Email Us",
                description: "support@edoo.com",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Call Us",
                description: "+1 (555) 123-4567",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Visit Us",
                description: "123 Education St, Learning City",
                color: "from-purple-500 to-pink-500",
              },
            ].map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${contact.color} flex items-center justify-center text-white`}
                  >
                    {contact.icon}
                  </div>
                  <CardTitle>{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Edoo</span>
              </div>
              <p className="text-gray-400">
                Transforming lives through quality education and professional development.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Courses</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="#" className="block hover:text-white transition-colors">
                  Web Development
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Data Science
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Digital Marketing
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="#" className="block hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Careers
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Blog
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="#" className="block hover:text-white transition-colors">
                  Help Center
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Edoo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
