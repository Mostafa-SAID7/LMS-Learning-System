import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Users, Award, Building2, TrendingUp } from "lucide-react";

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
}

const StatCounter = ({ end, label, suffix = "" }: StatCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev < end) {
          return Math.min(prev + Math.ceil(end / 100), end);
        }
        return end;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-primary">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:60px_60px]" />
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                🚀 New Interactive Learning Experience
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Learn with
                <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent block">
                  Creative Aura
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Transform your skills with our next-generation educational platform. 
                Interactive courses, AI-powered recommendations, and real-world projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Start Learning Free
                  <TrendingUp className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <PlayCircle className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Award className="h-4 w-4" />
                Accredited Courses
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Building2 className="h-4 w-4" />
                Industry Partners
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="animate-slide-up">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-glow">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Join Our Learning Community
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <StatCounter end={50000} label="Active Students" suffix="+" />
                <StatCounter end={1200} label="Courses Available" suffix="+" />
                <StatCounter end={95} label="Success Rate" suffix="%" />
                <StatCounter end={150} label="Expert Instructors" suffix="+" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/90">
                  <Users className="h-5 w-5 text-secondary" />
                  <span>Live community of learners</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <Award className="h-5 w-5 text-success" />
                  <span>Industry-recognized certificates</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <TrendingUp className="h-5 w-5 text-primary-glow" />
                  <span>AI-powered learning paths</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-float">
        <div className="w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 bg-success/20 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};