import React from 'react';
import { Cpu, Wrench, Code, BookOpen } from 'lucide-react';

const skills = [
  { icon: Cpu, label: 'Embedded & Systems' },
  { icon: Code, label: 'Full‑Stack Development' },
  { icon: Wrench, label: 'Rapid Prototyping' },
  { icon: BookOpen, label: 'Technical Writing' },
];

const About = () => {
  return (
    <section id="about" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold md:text-4xl">About Me</h2>
          <p className="mt-3 max-w-3xl text-white/70">
            I’m an engineering student exploring the intersection of hardware and software. My work spans from microcontrollers and sensors to modern web apps and data-driven tools. I enjoy designing intuitive experiences and building reliable systems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {skills.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 shadow-[0_0_40px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-2">
                  <Icon className="h-5 w-5 text-teal-300" />
                </div>
                <p className="font-medium">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
