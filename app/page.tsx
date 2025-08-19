"use client";
import React from "react";
import MatrixRain from "./components/MatrixRain";
import Typewriter from "./components/Typewriter";
import TerminalFrame from "./components/TerminalFrame";
import SkillsGrid from "./components/SkillsGrid";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative font-mono">
      <MatrixRain />
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <header className="mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl text-[--hacker-accent] tracking-wide">
            <Typewriter text="> Welcome to my portfolio (wip)" />
          </h1>
        </header>

        <TerminalFrame title="~/portfolio $">
          <div className="space-y-6">
            <section>
              <div className="text-[--hacker-dim] text-xs mb-2">about.txt</div>
              <p className="text-sm md:text-base leading-relaxed">

              </p>
            </section>

            <section>
              <div className="text-[--hacker-dim] text-xs mb-2">links/</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <li><a className="a-like" href="https://github.com/Rayan1159">github →</a></li>
                <li><a className="a-like" href="#">linkedin →</a></li>
                <li><a className="a-like" href="#">projects →</a></li>
                <li><a className="a-like" href="#">contact →</a></li>
              </ul>
            </section>

            <section>
              <div className="text-[--hacker-dim] text-xs mb-2">skills/</div>
              <SkillsGrid />
            </section>

            <section>
              <div className="text-[--hacker-dim] text-xs mb-2">jobs/</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-3 p-3 rounded border border-[--hacker-grid] bg-black/20">
                  <span className="inline-flex items-center justify-center w-6 h-6 text-xs bg-[--hacker-bg-dim] border border-[--hacker-grid] rounded">1</span>
                  <span className="text-[--hacker-fg]/90">bhvk (web engineer)</span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded border border-[--hacker-grid] bg-black/20">
                  <span className="inline-flex items-center justify-center w-6 h-6 text-xs bg-[--hacker-bg-dim] border border-[--hacker-grid] rounded">2</span>
                  <span className="text-[--hacker-fg]/90">digiteam (backend and frontend dev)</span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded border border-[--hacker-grid] bg-black/20">
                  <span className="inline-flex items-center justify-center w-6 h-6 text-xs bg-[--hacker-bg-dim] border border-[--hacker-grid] rounded">3</span>
                  <span className="text-[--hacker-fg]/90">bitsenbytes (web dev)</span>
                </li>
              </ul>
            </section>

            <section>
              <div className="text-[--hacker-dim] text-xs mb-2">stack.json</div>
              <div className="text-xs md:text-sm bg-black/40 border border-[--hacker-grid] rounded p-3 overflow-auto">
                  {`{
                      "framework": "Next.js",
                      "language": "TypeScript",
                      "styling": "TailwindCSS",
                      "hosting": "Vercel",
                 }`}
              </div>
            </section>
          </div>
        </TerminalFrame>

        <footer className="mt-10 md:mt-14 text-xs text-[--hacker-dim]">
          <span className="opacity-80">Bas Kruithof © {new Date().getFullYear()} — built with </span>
          <a className="a-like" href="https://nextjs.org" target="_blank" rel="noreferrer">Next.js</a>
        </footer>
      </div>
    </div>
  );
}
