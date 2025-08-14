import { HeroSection } from "@/components/HeroSection";
import { CourseCatalog } from "@/components/CourseCatalog";
import { LearningPaths } from "@/components/LearningPaths";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { InstructorSpotlight } from "@/components/InstructorSpotlight";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Course Catalog */}
      <CourseCatalog />
      
      {/* Learning Paths */}
      <LearningPaths />
      
      {/* Success Stories */}
      <TestimonialsSection />
      
      {/* Expert Instructors */}
      <InstructorSpotlight />
      
      {/* Footer Section */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Studiora</h3>
              <p className="text-background/80 text-sm">
                Empowering learners worldwide with creative, interactive education.
              </p>
              <div className="text-background/60 text-sm">
                © 2024 Studiora. All rights reserved.
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Learning</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Learning Paths</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Certificates</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Free Content</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Community</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Student Hub</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Instructors</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
