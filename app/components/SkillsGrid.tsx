import React from "react";

interface Skill {
  name: string;
  src: string;
}

const skills: Skill[] = [
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Kotlin", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Vue.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
];

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center gap-3 p-3 rounded border border-[--hacker-grid] bg-black/20 hover:bg-black/30 transition-colors"
          title={skill.name}
        >
          <div className="w-7 h-7 shrink-0 rounded bg-[--hacker-bg-dim] grid place-items-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={skill.src}
              alt={`${skill.name} icon`}
              className="w-5 h-5 object-contain"
              loading="lazy"
            />
          </div>
          <span className="text-xs md:text-sm text-[--hacker-fg]/90">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
