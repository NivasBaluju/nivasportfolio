const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-center mb-12 text-primary tracking-tight">
            About Me
          </h2>
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
            <p className="font-sans text-lg md:text-xl text-foreground leading-relaxed mb-6 tracking-wide">
              I’m a <span className="font-semibold text-primary">passionate and detail-oriented</span> Computer Science student with a strong foundation in programming, problem-solving, and software development. I aim to create impactful digital solutions by combining technical skills with a user-first mindset.
            </p>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-loose mb-6 tracking-normal">
              My interests include web technologies, data analytics, and scalable systems. I stay updated with emerging tools and frameworks to remain effective in the ever-evolving tech landscape. I value collaboration and enjoy transforming innovative ideas into real-world applications.
            </p>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-loose tracking-normal">
              Whether contributing to open-source, developing full-stack apps, or tackling hands-on challenges, I’m committed to growing as a developer and making a meaningful impact in the tech world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
