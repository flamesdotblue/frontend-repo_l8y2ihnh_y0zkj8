import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Z9BMpz-LA54Dlbrj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <Rocket className="mr-2 h-4 w-4 text-teal-300" />
          Engineering Student · Portfolio
        </div>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Building Things That Solve Real Problems
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          I’m an engineering student passionate about systems, software, and human‑centered design. I love turning complex ideas into elegant, tangible solutions.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center rounded-lg bg-white px-5 py-3 font-semibold text-gray-900 transition hover:opacity-90"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg border border-white/40 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
