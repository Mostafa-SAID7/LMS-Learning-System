import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Users, 
  Star, 
  PlayCircle, 
  BookOpen,
  Award,
  TrendingUp
} from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  image: string;
  rating: number;
  students: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  originalPrice?: number;
  category: string;
  skills: string[];
  description: string;
}

export const CourseCard = ({ 
  title, 
  instructor, 
  image, 
  rating, 
  students, 
  duration, 
  level, 
  price, 
  originalPrice, 
  category,
  skills,
  description 
}: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level) {
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

  return (
    <Card 
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-hover hover:-translate-y-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <div className="h-48 bg-gradient-primary rounded-t-lg flex items-center justify-center">
          <div className="text-center text-white">
            <BookOpen className="h-16 w-16 mx-auto mb-2 opacity-80" />
            <p className="text-sm opacity-90">{category}</p>
          </div>
        </div>
        
        {/* Overlay on Hover */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <PlayCircle className="h-12 w-12 text-white" />
        </div>
        
        {/* Level Badge */}
        <Badge className={`absolute top-4 left-4 ${getLevelColor(level)}`}>
          {level}
        </Badge>
        
        {/* Discount Badge */}
        {originalPrice && (
          <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
            Save {Math.round(((originalPrice - price) / originalPrice) * 100)}%
          </Badge>
        )}
      </div>

      {/* Course Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">by {instructor}</p>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Course Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{skills.length - 3} more
            </Badge>
          )}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">
                ${price}
              </span>
              {originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
          </div>
          
          <Button 
            size="sm" 
            className="group-hover:shadow-glow transition-all duration-300"
          >
            <Award className="h-4 w-4 mr-2" />
            Enroll Now
          </Button>
        </div>
      </div>

      {/* Progress Ring for Advanced Courses */}
      {level === "Advanced" && (
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
            <TrendingUp className="h-4 w-4 text-primary" />
          </div>
        </div>
      )}
    </Card>
  );
};