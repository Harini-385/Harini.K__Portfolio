import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Welcome to my portfolio</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Hi! I Am{" "}
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

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 animate-float">
              <img src={profilePhoto} alt="Harini K" className="w-full h-full object-cover" />
            </div>
            {/* Floating badges */}
            <motion.div
              className="absolute -right-4 top-8 glass-card px-4 py-3 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-2xl font-bold text-primary">8.6</p>
              <p className="text-xs text-muted-foreground">CGPA</p>
            </motion.div>
            <motion.div
              className="absolute -left-8 bottom-12 glass-card px-4 py-3 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <p className="text-xs text-muted-foreground">Specialized in</p>
              <p className="text-sm font-semibold text-foreground">Backend Dev</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
