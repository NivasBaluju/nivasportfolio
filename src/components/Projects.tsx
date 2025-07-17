import { Code, ExternalLink, Github } from "lucide-react";

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
                className="bg-card rounded-lg shadow-classic hover:shadow-lifted transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-secondary bg-accent px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                    {project.title}
                  </h3>

                  <p className="text-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-secondary mb-2">
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

                    <div className="flex space-x-4 pt-4 border-t border-border">
                      <a
                        href="#"
                        aria-label="View source code on GitHub"
                        className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">View Code</span>
                      </a>
                      <a
                        href="#"
                        aria-label="Open project details"
                        className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live Demo</span>
                      </a>
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
