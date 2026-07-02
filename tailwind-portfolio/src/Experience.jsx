import React from "react";
import { motion } from "framer-motion";
import { Building2, BriefcaseBusiness } from "lucide-react";

const roles = [
  {
    company: "VentureSeed (via AORTEM)",
    role: "Frontend & SDK Developer",
    location: "Remote",
    stack: ["Vue", "Nuxt", "Firebase", "Dart", "OpenFeature", "Google Cloud"],
    highlights: [
      "Built dashboard interfaces and core SDK components for IntelliToggle, AORTEM’s feature-flag and automation product.",
      "Contributed to Firebase Dart Admin Auth SDK and OpenFeature provider integrations for multi-tenant rollouts.",
      "Integrated Stripe billing workflows and Cloud Functions while collaborating across product and engineering teams.",
    ],
  },
  {
    company: "Airtel Networks Limited",
    role: "Technology / Software Intern",
    location: "Lagos, Nigeria",
    stack: ["Software Operations", "Data", "Enterprise Systems"],
    highlights: [
      "Supported software, data, and operational workflows in a large-scale telecommunications environment.",
      "Applied programming, analytics, and problem-solving skills to real business challenges with technical teams.",
    ],
  },
  {
    company: "CodeBolt Systems",
    role: "Founder & Full-Stack Developer",
    location: "Lagos / Remote",
    stack: ["React", "Next.js", "Python", "Node.js", "Firebase", "PostgreSQL"],
    highlights: [
      "Founded a product-building initiative focused on SaaS applications, workflow automation, dashboards, and business tools.",
      "Lead projects from planning and architecture through implementation, deployment, and maintenance.",
    ],
  },
  {
    company: "ReadWrite Data Solutions",
    role: "Full-Stack Intern",
    location: "Lagos / Remote",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Zod", "Flask"],
    highlights: [
      "Implemented full-stack features, validated API inputs, and built responsive, accessible React interfaces.",
      "Contributed to REST endpoints, database queries, tests, code reviews, and Lighthouse improvements.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 text-indigo-700">
          <BriefcaseBusiness size={20} />
          <span className="text-sm font-semibold uppercase tracking-[0.18em]">Professional work</span>
        </div>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
          Experience that goes beyond{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
            portfolio demos
          </span>
        </h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          Product, SDK, cloud, data, and frontend work across startup, telecommunications, and consulting environments.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {roles.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl border border-slate-300 bg-white/40 p-6 backdrop-blur transition hover:border-slate-400 hover:bg-white/60"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-indigo-100 p-2 text-indigo-700">
                <Building2 size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{item.role}</h3>
                <p className="text-sm font-medium text-indigo-700">{item.company}</p>
                <p className="mt-1 text-xs text-slate-500">{item.location}</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-slate-200 bg-white/60 px-2 py-1 text-[11px] text-slate-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
