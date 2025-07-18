import { Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Fuzzy Logic Vehicle Controller",
      description:
        "Designed and implemented a fuzzy logic-based control system to dynamically manage vehicle braking, steering, and acceleration. Utilized Python and scikit-fuzzy to simulate intelligent real-time decisions with clear visualizations of control behavior.",
      technologies: ["Python", "scikit-fuzzy", "Matplotlib", "Fuzzy Logic"],
      category: "Soft Computing",
    },
    {
      title: "Stock Price Visualization",
      description:
        "Created an interactive dashboard to analyze and visualize historical stock data. Leveraged Yahoo Finance API and Python libraries for data extraction, trend identification, and insightful visual representation.",
      technologies: ["Python", "Yahoo Finance API", "Pandas", "Matplotlib"],
      category: "Data Analytics",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">
            Projects & Research
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-muted p-3 rounded-full">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Projects;
