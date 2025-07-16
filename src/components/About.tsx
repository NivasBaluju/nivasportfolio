const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">
            About Me
          </h2>
          <div className="bg-card rounded-lg shadow-classic p-8 md:p-12">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Highly motivated Computer Science student with strong programming and 
              analytical skills. Quick to adapt, eager to learn, and committed to delivering quality 
              results through teamwork and precision.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              As an aspiring tech leader, I am passionate about leveraging data analytics 
              and modern technologies to solve real-world problems. My journey in computer 
              science has equipped me with both technical expertise and leadership skills 
              that I continue to develop through hands-on projects and collaborative experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;