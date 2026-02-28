import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            I Am{" "}
            <span className="text-gradient">Harini K</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-4 font-medium">
            Aspiring Backend Developer | Java & Spring Boot Enthusiast
          </p>
          <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Passionate about designing efficient, scalable backend systems and secure RESTful APIs.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary/40 text-foreground font-semibold rounded-lg hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
