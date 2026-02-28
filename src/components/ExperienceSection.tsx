import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Application Development Intern",
    company: "Test Yantra Software Solutions",
    period: "Feb 2025 – Apr 2025",
    responsibilities: [
      "Worked with HTML, CSS, JavaScript, React.js, and Firebase",
      "Built and deployed responsive web applications",
    ],
  },
  {
    role: "Frontend Web Development Intern",
    company: "CodTech IT Solutions",
    period: "May 30, 2025 – June 30, 2025",
    responsibilities: [
      "Implemented modern UI components",
      "Contributed to real-time development and deployment tasks",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="md:w-1/2" />
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 ring-4 ring-background z-10" />
                <div className="md:w-1/2 ml-14 md:ml-0">
                  <div className="glass-card p-6 glow-border">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="text-primary" size={18} />
                      <span className="text-xs text-primary font-medium">{exp.period}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{exp.role}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
