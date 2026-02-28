import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              HARINI K is currently pursuing B.Tech in Information Technology (2023–2027) at Panimalar Engineering College with a CGPA of 8.6. She is passionate about backend development, scalable API architecture, and cloud-native applications.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              With strong foundations in Java, Spring Boot, and database systems, she continuously works on improving her technical depth while contributing to impactful projects.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-8 glow-border"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <h4 className="font-semibold text-lg mb-1">B.Tech in Information Technology</h4>
            <p className="text-muted-foreground">Panimalar Engineering College</p>
            <p className="text-muted-foreground text-sm">2023 – 2027</p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
              <span className="text-primary font-bold text-xl">8.6</span>
              <span className="text-muted-foreground text-sm">CGPA</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
