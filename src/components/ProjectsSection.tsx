import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dynamic IT Support and Triage Agent",
    description:
      "Developed a backend system for automated IT ticket triage using RESTful microservices and GenAI-powered categorization. Implemented Hybrid RAG (vector + keyword search) integrated with LLMs for solution retrieval and diagnostic summarization. Deployed on AWS, GCP, and Azure using Docker and Kubernetes for scalable and fault-tolerant execution.",
    tech: ["Node.js", "FastAPI", "LangChain", "OpenAI/Azure", "Pinecone", "AWS", "GCP", "Docker", "Kubernetes", "DynamoDB"],
  },
  {
    title: "MindHero – Gamified Behavioral Analytics",
    description:
      "Architected scalable RESTful APIs in Node.js powering a gamified behavioral analytics engine with transactional XP computation and streak validation. Implemented JWT-based RBAC authentication and containerized backend services using Docker for secure cloud-native deployment.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "JWT", "RBAC", "Docker", "RESTful APIs"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="glass-card p-8 glow-border group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold pr-4">{project.title}</h3>
                <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" size={18} />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
