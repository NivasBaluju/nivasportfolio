const Hero = () => {
  return (
    <section className="bg-gradient-hero text-primary-foreground min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
          NIVAS BALUJU
        </h1>
        <div className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          <p className="mb-2">CSE Undergraduate</p>
          <p className="mb-2">Data Analytics Enthusiast</p>
          <p>Aspiring Tech Leader</p>
        </div>
        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto bg-primary-foreground text-primary px-8 py-3 rounded hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium"
          >
            Learn More About Me
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded hover:bg-primary-foreground hover:text-primary transition-all duration-300 font-medium"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
