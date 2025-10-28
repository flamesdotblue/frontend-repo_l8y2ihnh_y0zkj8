import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-black to-black py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Let’s Build Something</h2>
        <p className="mt-3 text-white/70">
          I’m open to internships, research collaborations, and interesting side projects. Feel free to reach out!
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="mailto:student@example.com"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 font-medium backdrop-blur transition hover:bg-white/20"
          >
            <Mail className="h-4 w-4 text-teal-300" /> Email Me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 font-medium backdrop-blur transition hover:bg-white/20"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 font-medium backdrop-blur transition hover:bg-white/20"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>

        <p className="mt-10 text-xs text-white/50">
          © {new Date().getFullYear()} Your Name — Crafted with care.
        </p>
      </div>
    </section>
  );
};

export default Contact;
