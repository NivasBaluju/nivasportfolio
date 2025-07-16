import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "MATH CLUB",
      role: "EVENT MANAGER",
      period: "2023-2027",
      description: "Led event management in the Math Club, organizing interactive events to showcase real-world math applications. Enhanced teamwork, leadership, and organizational skills through successful event execution."
    },
    {
      title: "MINOR PROJECT",
      role: "DATA ANALYTICS",
      period: "2024-2025",
      description: "Stock Price Analysis and Visualization: Extract historical stock prices using the Yahoo Finance API and analyze trends through visualizations. Utilize Python with Pandas and Matplotlib to identify key insights."
    },
    {
      title: "SOFT COMPUTING PROJECT",
      role: "",
      period: "2024-2025",
      description: "Developed a fuzzy logic-based vehicle controller using Python to manage braking, steering, and acceleration based on real-time inputs. Utilized scikit-fuzzy and Matplotlib to visualize decision-making and control surfaces."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-card rounded-lg shadow-classic p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-primary">
                          {exp.title}
                        </h3>
                        {exp.role && (
                          <p className="text-secondary font-medium">{exp.role}</p>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;