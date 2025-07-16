import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">
            Education
          </h2>
          
          <div className="bg-card rounded-lg shadow-classic p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="font-serif text-xl font-semibold text-primary">
                    Computer Science & Engineering
                  </h3>
                  <span className="text-muted-foreground font-medium">2023-2027</span>
                </div>
                <p className="text-secondary font-medium mb-4">VIT-AP University</p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">
                      Active member of the Math Club, organizing real-world application events.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">
                      Completed a soft computing project on "Fuzzy Logic-Based Vehicle Controller."
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">
                      Led a team of 10 in a presentation on suicide prevention, showcasing teamwork and research skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;