const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            About Me
          </h2>
          <div className="bg-card rounded-2xl shadow-classic p-8 md:p-12">
            <p className="text-xl md:text-[1.25rem] leading-relaxed text-foreground mb-6 font-medium">
              I’m a <span className="text-primary font-semibold">passionate and detail-oriented</span> Computer Science student with a solid foundation in programming, problem-solving, and software development. My mission is to craft meaningful digital solutions that combine technical depth with a user-first perspective.
            </p>
            <p className="text-base md:text-lg leading-loose text-muted-foreground mb-6 italic">
              Fascinated by modern web technologies, data-driven insights, and scalable architectures, I actively explore new tools and frameworks to stay sharp in the dynamic tech ecosystem. I thrive in collaborative teams and enjoy translating ideas into functional, impactful systems.
            </p>
            <p className="text-base md:text-lg leading-loose text-muted-foreground border-l-4 border-primary pl-4">
              From contributing to open-source to building full-stack apps and embracing hands-on challenges, I’m committed to growing as a developer and giving back to the tech community through continuous learning and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
