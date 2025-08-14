import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Star, 
  Users, 
  Award, 
  BookOpen, 
  ExternalLink,
  Calendar,
  Clock,
  MessageCircle
} from "lucide-react";

interface Instructor {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
  totalStudents: number;
  coursesCount: number;
  specializations: string[];
  bio: string;
  experience: string;
  achievements: string[];
  teachingPhilosophy: string;
  nextOfficeHours?: string;
  responseTime: string;
}

const instructors: Instructor[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    title: "Senior Software Engineer & AI Researcher",
    company: "Google DeepMind",
    avatar: "/api/placeholder/150/150",
    rating: 4.9,
    totalStudents: 45200,
    coursesCount: 12,
    specializations: ["Machine Learning", "Deep Learning", "Neural Networks", "Python"],
    bio: "Leading AI researcher with 10+ years of experience in machine learning and natural language processing. Published 50+ research papers and holds 8 patents in AI technology.",
    experience: "10+ years",
    achievements: [
      "PhD in Computer Science from MIT",
      "50+ published research papers",
      "8 patents in AI technology",
      "TEDx speaker on AI ethics"
    ],
    teachingPhilosophy: "I believe in learning by doing. My courses focus on practical applications of complex concepts, ensuring students can apply what they learn in real-world scenarios.",
    nextOfficeHours: "Today at 3:00 PM",
    responseTime: "Usually responds within 2 hours"
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    title: "Full Stack Architect & Tech Lead",
    company: "Netflix",
    avatar: "/api/placeholder/150/150",
    rating: 4.8,
    totalStudents: 38900,
    coursesCount: 15,
    specializations: ["React", "Node.js", "System Design", "Cloud Architecture"],
    bio: "Full-stack architect who has built scalable systems serving millions of users. Expert in modern web technologies and cloud infrastructure with extensive experience at top tech companies.",
    experience: "12+ years",
    achievements: [
      "Built systems serving 100M+ users",
      "Former Tech Lead at Uber",
      "Open source contributor",
      "Cloud architecture certified"
    ],
    teachingPhilosophy: "Technology evolves rapidly, but fundamentals remain constant. I teach timeless principles alongside cutting-edge tools to prepare students for any challenge.",
    nextOfficeHours: "Tomorrow at 2:00 PM",
    responseTime: "Usually responds within 1 hour"
  },
  {
    id: "3",
    name: "Jessica Park",
    title: "Senior UX Designer & Design Systems Lead",
    company: "Airbnb",
    avatar: "/api/placeholder/150/150",
    rating: 4.9,
    totalStudents: 29500,
    coursesCount: 8,
    specializations: ["UX Design", "Design Systems", "User Research", "Prototyping"],
    bio: "Award-winning UX designer with expertise in creating intuitive digital experiences. Led design teams at multiple unicorn startups and established design systems used by millions.",
    experience: "8+ years",
    achievements: [
      "UX Design Award Winner 2023",
      "Built design systems for 50M+ users",
      "Design mentor at IDEO",
      "Featured in Design Week"
    ],
    teachingPhilosophy: "Great design is invisible. I teach students to think like users first, designers second, creating experiences that feel natural and delightful.",
    nextOfficeHours: "Friday at 11:00 AM",
    responseTime: "Usually responds within 3 hours"
  }
];

export const InstructorSpotlight = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            👨‍🏫 Expert Instructors
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Learn from <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our instructors are seasoned professionals from top tech companies who bring 
            real-world experience and cutting-edge knowledge to every course.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid lg:grid-cols-3 gap-8 animate-slide-up">
          {instructors.map((instructor, index) => (
            <Card key={instructor.id} className="relative overflow-hidden hover:shadow-hover transition-all duration-300 group">
              {/* Header Section */}
              <div className="p-6 text-center border-b">
                <div className="relative inline-block mb-4">
                  <Avatar className="h-24 w-24 border-4 border-primary/20">
                    <AvatarImage src={instructor.avatar} alt={instructor.name} />
                    <AvatarFallback className="text-xl">
                      {instructor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                    <Award className="h-4 w-4" />
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-1">{instructor.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{instructor.title}</p>
                <Badge variant="outline" className="text-xs">
                  {instructor.company}
                </Badge>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-sm">{instructor.rating}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-bold text-sm">{(instructor.totalStudents / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <BookOpen className="h-4 w-4 text-secondary" />
                      <span className="font-bold text-sm">{instructor.coursesCount}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Courses</div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Bio */}
                <div>
                  <h4 className="font-semibold text-sm mb-2">About</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {instructor.bio}
                  </p>
                </div>

                {/* Specializations */}
                <div>
                  <h4 className="font-semibold text-sm mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-1">
                    {instructor.specializations.slice(0, 3).map((spec, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                    {instructor.specializations.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{instructor.specializations.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    {instructor.achievements.slice(0, 3).map((achievement, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Teaching Philosophy */}
                <div>
                  <h4 className="font-semibold text-sm mb-2">Teaching Philosophy</h4>
                  <p className="text-xs text-muted-foreground italic leading-relaxed line-clamp-3">
                    "{instructor.teachingPhilosophy}"
                  </p>
                </div>
              </div>

              {/* Footer Section */}
              <div className="p-6 pt-0 space-y-3">
                {/* Office Hours */}
                {instructor.nextOfficeHours && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>Next office hours: {instructor.nextOfficeHours}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{instructor.responseTime}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <BookOpen className="h-3 w-3 mr-2" />
                    View Courses
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageCircle className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-card">
            <h3 className="text-xl font-bold mb-4">
              Want to Become an Instructor?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Share your expertise with learners worldwide. Join our community of expert instructors.
            </p>
            <Button size="lg">
              Apply to Teach
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};