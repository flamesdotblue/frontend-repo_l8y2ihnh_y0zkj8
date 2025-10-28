import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Autonomous Line Follower Bot',
    description:
      'Designed and implemented PID control for a high‑speed line follower using IR sensors and STM32. Tuned for stability and sharp turns.',
    tags: ['STM32', 'PID', 'C/C++', 'Sensors'],
    link: '#',
    accent: 'from-teal-400/30 to-cyan-400/20',
  },
  {
    title: 'Smart Energy Dashboard',
    description:
      'Realtime web app that visualizes home energy usage, detects anomalies, and suggests savings using pattern analysis.',
    tags: ['React', 'FastAPI', 'WebSockets', 'Tailwind'],
    link: '#',
    accent: 'from-amber-400/30 to-pink-400/20',
  },
  {
    title: 'IoT Weather Station',
    description:
      'Deployed a low‑power station with MQTT to stream sensor data to the cloud with automated calibration and health checks.',
    tags: ['ESP32', 'MQTT', 'Python', 'Cloud'],
    link: '#',
    accent: 'from-indigo-400/30 to-fuchsia-400/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Projects</h2>
            <p className="mt-3 max-w-3xl text-white/70">
              A selection of hands‑on builds and software experiments. Each project focuses on reliability, performance, and clean design.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-lg border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10 md:inline-block"
          >
            Let’s collaborate
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b ${p.accent} p-5 transition`}
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-10 translate-x-10 rotate-45 rounded-3xl bg-white/10 blur-2xl" />

              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/20 bg-black/30 px-2 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:underline"
              >
                View details <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
