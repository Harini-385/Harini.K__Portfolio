import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "harinigkram@gmail.com", href: "mailto:harinigkram@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 6374347247", href: "tel:+916374347247" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/harini-k-8246a5295", href: "https://linkedin.com/in/harini-k-8246a5295" },
  { icon: Github, label: "GitHub", value: "github.com/Harini-385", href: "https://github.com/Harini-385" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Open to internship and backend development opportunities.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 glow-border flex items-center gap-4 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                <item.icon className="text-primary" size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
