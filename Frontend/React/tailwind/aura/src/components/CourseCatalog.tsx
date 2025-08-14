import { useState } from "react";
import { CourseCard } from "./CourseCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Grid, List } from "lucide-react";
import { Input } from "@/components/ui/input";

const sampleCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Sarah Chen",
    image: "/placeholder-course.jpg",
    rating: 4.9,
    students: 12500,
    duration: "40 hours",
    level: "Beginner" as const,
    price: 89,
    originalPrice: 199,
    category: "Web Development",
    skills: ["React", "Node.js", "JavaScript", "MongoDB", "Express"],
    description: "Master full-stack web development with hands-on projects and real-world applications."
  },
  {
    id: "2",
    title: "AI & Machine Learning Fundamentals",
    instructor: "Prof. Michael Rodriguez",
    image: "/placeholder-course.jpg",
    rating: 4.8,
    students: 8900,
    duration: "32 hours",
    level: "Intermediate" as const,
    price: 129,
    originalPrice: 249,
    category: "Artificial Intelligence",
    skills: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    description: "Dive into AI and ML with practical projects using Python and modern frameworks."
  },
  {
    id: "3",
    title: "Advanced React & Next.js Mastery",
    instructor: "Jessica Kim",
    image: "/placeholder-course.jpg",
    rating: 4.9,
    students: 6750,
    duration: "28 hours",
    level: "Advanced" as const,
    price: 149,
    category: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "GraphQL"],
    description: "Build production-ready applications with advanced React patterns and Next.js features."
  },
  {
    id: "4",
    title: "Digital Marketing Strategy",
    instructor: "Alex Thompson",
    image: "/placeholder-course.jpg",
    rating: 4.7,
    students: 15200,
    duration: "24 hours",
    level: "Beginner" as const,
    price: 79,
    originalPrice: 159,
    category: "Marketing",
    skills: ["SEO", "Social Media", "Analytics", "Content Strategy"],
    description: "Learn modern digital marketing strategies to grow your business online."
  },
  {
    id: "5",
    title: "UI/UX Design Principles",
    instructor: "Emma Davis",
    image: "/placeholder-course.jpg",
    rating: 4.8,
    students: 9800,
    duration: "36 hours",
    level: "Intermediate" as const,
    price: 99,
    originalPrice: 179,
    category: "Design",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    description: "Create beautiful and functional user experiences with proven design methodologies."
  },
  {
    id: "6",
    title: "Cloud Architecture with AWS",
    instructor: "Robert Johnson",
    image: "/placeholder-course.jpg",
    rating: 4.9,
    students: 5600,
    duration: "45 hours",
    level: "Advanced" as const,
    price: 179,
    category: "Cloud Computing",
    skills: ["AWS", "Docker", "Kubernetes", "DevOps"],
    description: "Master cloud architecture and deployment strategies using Amazon Web Services."
  }
];

const categories = ["All", "Web Development", "Artificial Intelligence", "Frontend Development", "Marketing", "Design", "Cloud Computing"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export const CourseCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredCourses = sampleCourses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            📚 Course Catalog
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Explore Our <span className="text-primary">Learning Universe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover thousands of courses across technology, business, design, and more. 
            Learn from industry experts and advance your career.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses, instructors, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer transition-all hover:scale-105"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Level Filters and View Toggle */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-2">
              {levels.map((level) => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel(level)}
                >
                  {level}
                </Button>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {selectedLevel !== "All" && ` for ${selectedLevel} level`}
          </p>
        </div>

        {/* Course Grid */}
        <div className={`grid gap-8 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1 max-w-4xl mx-auto"
        } animate-slide-up`}>
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* Load More */}
        {filteredCourses.length > 0 && (
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Filter className="h-5 w-5 mr-2" />
              Load More Courses
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="mb-4">
              <Search className="h-16 w-16 mx-auto text-muted-foreground/50" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
            <Button onClick={() => {
              setSelectedCategory("All");
              setSelectedLevel("All");
              setSearchTerm("");
            }}>
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};