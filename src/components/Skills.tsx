import { Code2, Users, Lightbulb, Target } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Programming", skills: ["Python", "Java", "C", "C++", "SQL"] },
    { name: "Data Analytics", skills: ["Pandas", "Matplotlib", "Yahoo Finance API"] },
    { name: "Data Visualization", skills: ["Charting & Graphs using Python"] },
    { name: "API Integration", skills: ["Experience with financial data APIs"] }
  ];

  const professionalSkills = [
    "Leadership & Event Management",
    "Digital Marketing",
    "Negotiation & Critical Thinking",
    "Teamwork & Creativity"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">
            Skill Summary
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="bg-card rounded-lg shadow-classic p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary">
                  Technical Skills
                </h3>
              </div>
              
              <div className="space-y-6">
                {technicalSkills.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-secondary mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      {category.name}:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div className="bg-card rounded-lg shadow-classic p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary">
                  Professional Skills
                </h3>
              </div>
              
              <div className="space-y-4">
                {professionalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Lightbulb className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Achievements Section */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold text-secondary mb-4">Key Achievements:</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground text-sm">
                      Successfully led Math Club events with real-world applications
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground text-sm">
                      Developed innovative fuzzy logic vehicle control system
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground text-sm">
                      Created comprehensive stock analysis visualization tools
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

export default Skills;