import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowRight, 
  Clock, 
  Trophy, 
  Target,
  CheckCircle,
  PlayCircle
} from "lucide-react";

interface LearningPath {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  completionRate: number;
  enrolledStudents: number;
  steps: {
    title: string;
    duration: string;
    completed?: boolean;
  }[];
  skills: string[];
  careerOutcome: string;
}

const learningPaths: LearningPath[] = [
  {
    id: "1",
    title: "Full Stack Web Developer",
    description: "Master both frontend and backend development with modern technologies",
    duration: "6 months",
    difficulty: "Intermediate",
    completionRate: 87,
    enrolledStudents: 15420,
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"],
    careerOutcome: "Full Stack Developer",
    steps: [
      { title: "HTML & CSS Foundations", duration: "2 weeks", completed: true },
      { title: "JavaScript Essentials", duration: "3 weeks", completed: true },
      { title: "React Development", duration: "4 weeks", completed: false },
      { title: "Backend with Node.js", duration: "4 weeks", completed: false },
      { title: "Database Management", duration: "3 weeks", completed: false },
      { title: "Deployment & DevOps", duration: "2 weeks", completed: false }
    ]
  },
  {
    id: "2",
    title: "AI & Machine Learning Engineer",
    description: "Build intelligent systems and master machine learning algorithms",
    duration: "8 months",
    difficulty: "Advanced",
    completionRate: 92,
    enrolledStudents: 8950,
    skills: ["Python", "TensorFlow", "PyTorch", "Statistics", "Deep Learning"],
    careerOutcome: "ML Engineer",
    steps: [
      { title: "Python Programming", duration: "3 weeks", completed: false },
      { title: "Statistics & Mathematics", duration: "4 weeks", completed: false },
      { title: "Machine Learning Basics", duration: "5 weeks", completed: false },
      { title: "Deep Learning", duration: "6 weeks", completed: false },
      { title: "NLP & Computer Vision", duration: "4 weeks", completed: false },
      { title: "MLOps & Deployment", duration: "3 weeks", completed: false }
    ]
  },
  {
    id: "3",
    title: "UX/UI Designer",
    description: "Create beautiful and functional user experiences",
    duration: "4 months",
    difficulty: "Beginner",
    completionRate: 94,
    enrolledStudents: 12300,
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    careerOutcome: "UX/UI Designer",
    steps: [
      { title: "Design Fundamentals", duration: "2 weeks", completed: false },
      { title: "User Research", duration: "3 weeks", completed: false },
      { title: "Wireframing & Prototyping", duration: "3 weeks", completed: false },
      { title: "Visual Design", duration: "4 weeks", completed: false },
      { title: "Design Systems", duration: "2 weeks", completed: false },
      { title: "Portfolio Building", duration: "2 weeks", completed: false }
    ]
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-success text-success-foreground";
    case "Intermediate":
      return "bg-secondary text-secondary-foreground";
    case "Advanced":
      return "bg-primary text-primary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const LearningPaths = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            🎯 Learning Paths
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your <span className="text-primary">Career Journey</span> Starts Here
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Structured learning paths designed by industry experts to take you from 
            beginner to professional. Follow the roadmap to your dream career.
          </p>
        </div>

        {/* Learning Paths Grid */}
        <div className="grid lg:grid-cols-3 gap-8 animate-slide-up">
          {learningPaths.map((path) => (
            <Card key={path.id} className="relative overflow-hidden hover:shadow-hover transition-all duration-300 group">
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <Badge className={getDifficultyColor(path.difficulty)}>
                    {path.difficulty}
                  </Badge>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                    <div className="text-2xl font-bold text-primary">{path.completionRate}%</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {path.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {path.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{path.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy className="h-4 w-4" />
                    <span>{path.enrolledStudents.toLocaleString()} enrolled</span>
                  </div>
                </div>

                {/* Career Outcome */}
                <div className="flex items-center gap-2 mb-6">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Career Goal: {path.careerOutcome}</span>
                </div>
              </div>

              {/* Learning Steps */}
              <div className="px-6 pb-4">
                <h4 className="font-semibold mb-3 text-sm">Learning Roadmap</h4>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {path.steps.slice(0, 4).map((step, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      {step.completed ? (
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      ) : (
                        <div className="w-4 h-4 border-2 border-muted rounded-full flex-shrink-0" />
                      )}
                      <span className={step.completed ? "text-muted-foreground line-through" : ""}>
                        {step.title}
                      </span>
                      <span className="text-xs text-muted-foreground ml-auto">
                        {step.duration}
                      </span>
                    </div>
                  ))}
                  {path.steps.length > 4 && (
                    <div className="text-xs text-muted-foreground text-center pt-2">
                      +{path.steps.length - 4} more steps
                    </div>
                  )}
                </div>
              </div>

              {/* Skills */}
              <div className="px-6 pb-4">
                <h4 className="font-semibold mb-2 text-sm">Skills You'll Learn</h4>
                <div className="flex flex-wrap gap-1">
                  {path.skills.slice(0, 4).map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {path.skills.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{path.skills.length - 4}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="px-6 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Your Progress</span>
                  <span className="text-sm text-muted-foreground">2/6 completed</span>
                </div>
                <Progress value={33} className="h-2" />
              </div>

              {/* CTA */}
              <div className="p-6 pt-0">
                <Button className="w-full group-hover:shadow-glow transition-all duration-300">
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Continue Learning
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card p-8 rounded-2xl shadow-card">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">
                Not sure which path to choose?
              </h3>
              <p className="text-muted-foreground">
                Take our AI-powered career assessment to find your perfect learning path
              </p>
            </div>
            <Button size="lg" className="flex-shrink-0">
              Take Assessment
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};