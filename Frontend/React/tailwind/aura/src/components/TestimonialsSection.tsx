import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, Briefcase, MapPin } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  testimonial: string;
  course: string;
  outcome: string;
  beforeSalary?: string;
  afterSalary?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Martinez",
    role: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    testimonial: "Studiora completely transformed my career. The interactive courses and real-world projects gave me the confidence to transition from marketing to tech. The community support was incredible!",
    course: "Full Stack Web Developer Path",
    outcome: "Career Change Success",
    beforeSalary: "$45K",
    afterSalary: "$95K"
  },
  {
    id: "2",
    name: "Marcus Chen",
    role: "AI Research Engineer",
    company: "DeepMind Technologies",
    location: "London, UK",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    testimonial: "The AI & Machine Learning path at Studiora is hands down the best online education I've experienced. The instructors are world-class and the curriculum is cutting-edge.",
    course: "AI & Machine Learning Engineer Path",
    outcome: "Advanced Specialization",
    beforeSalary: "$80K",
    afterSalary: "$150K"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Lead UX Designer",
    company: "Design Studio Pro",
    location: "Barcelona, Spain",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    testimonial: "I loved how Studiora combines theory with practice. The design thinking workshops and portfolio feedback sessions were game-changers for my career growth.",
    course: "UX/UI Designer Path",
    outcome: "Promotion to Lead",
    beforeSalary: "$55K",
    afterSalary: "$85K"
  },
  {
    id: "4",
    name: "David Kim",
    role: "Cloud Solutions Architect",
    company: "Amazon Web Services",
    location: "Seattle, WA",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    testimonial: "The cloud architecture program exceeded my expectations. Real AWS projects, expert mentorship, and industry connections helped me land my dream job.",
    course: "Cloud Architecture Mastery",
    outcome: "Dream Job Achievement",
    beforeSalary: "$70K",
    afterSalary: "$130K"
  },
  {
    id: "5",
    name: "Priya Patel",
    role: "Data Science Manager",
    company: "Netflix",
    location: "Los Angeles, CA",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    testimonial: "Studiora's approach to data science education is revolutionary. The combination of theory, hands-on projects, and industry mentorship prepared me for leadership roles.",
    course: "Data Science Professional",
    outcome: "Management Transition",
    beforeSalary: "$90K",
    afterSalary: "$160K"
  },
  {
    id: "6",
    name: "Ahmed Hassan",
    role: "Cybersecurity Specialist",
    company: "Microsoft Security",
    location: "Dublin, Ireland",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    testimonial: "The cybersecurity bootcamp at Studiora gave me practical skills that I use daily. The instructors are industry veterans who share real-world insights.",
    course: "Cybersecurity Bootcamp",
    outcome: "Specialized Expertise",
    beforeSalary: "$60K",
    afterSalary: "$110K"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            ⭐ Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Real Students, <span className="text-primary">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful learners who transformed their careers with Studiora. 
            See how our students achieved their professional goals.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center animate-scale-in">
            <div className="text-4xl font-bold text-primary mb-2">92%</div>
            <div className="text-sm text-muted-foreground">Career Advancement</div>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-secondary mb-2">$45K</div>
            <div className="text-sm text-muted-foreground">Average Salary Increase</div>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-success mb-2">6 months</div>
            <div className="text-sm text-muted-foreground">Average Time to Career Change</div>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Student Satisfaction</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="relative overflow-hidden hover:shadow-hover transition-all duration-300 group">
              {/* Quote Background */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12 text-primary" />
              </div>

              <div className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Course Badge */}
                <Badge variant="outline" className="text-xs">
                  {testimonial.course}
                </Badge>

                {/* Author Info */}
                <div className="flex items-start gap-3 pt-4 border-t">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    
                    <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                      <Briefcase className="h-3 w-3" />
                      <span>{testimonial.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>

                {/* Outcome and Salary Info */}
                <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                  <div className="text-xs font-medium text-primary">
                    {testimonial.outcome}
                  </div>
                  {testimonial.beforeSalary && testimonial.afterSalary && (
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Before: {testimonial.beforeSalary}</span>
                      <span className="font-semibold text-success">After: {testimonial.afterSalary}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of successful learners who transformed their careers with Studiora. 
              Your journey to a better future starts with a single click.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
                Start Your Journey
              </button>
              <button className="border border-white/20 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Browse Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};