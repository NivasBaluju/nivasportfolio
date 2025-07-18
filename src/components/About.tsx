const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-4xl font-bold text-center mb-12 text-primary">
            About Me
          </h2>
          <div className="bg-card rounded-lg shadow-classic p-8 md:p-12">
            <p className="text-lg leading-relaxed text-foreground mb-6 font-sans">
              I am a passionate and detail-oriented Computer Science student with a strong foundation in programming, problem-solving, and software development. My goal is to create impactful digital solutions by combining technical skills with a user-first mindset.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6 font-sans">
              With a keen interest in web technologies, data analytics, and scalable systems, I am constantly exploring new tools and frameworks to stay ahead in the ever-evolving tech landscape. I thrive in collaborative environments and enjoy turning innovative ideas into working solutions.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-sans">
              Whether it’s through contributing to open-source projects, building full-stack applications, or learning from hands-on challenges, I am driven to grow as a developer and contribute meaningfully to the tech community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
