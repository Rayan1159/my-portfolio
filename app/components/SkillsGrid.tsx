import React from "react";

interface Skill {
  name: string;
  hoverColor?: string;
  src: string;
}

const skills: Skill[] = [
  { name: "JavaScript", hoverColor: "#ddda30", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", hoverColor: "#16baf8", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "PHP", hoverColor: "#6116f8", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Java", hoverColor: "#f85216", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Kotlin", hoverColor: "#f85216", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "MySQL", hoverColor: "#16baf8", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "React", hoverColor: "#0477a1", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", hoverColor: "#9bdaed", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Vue.js", hoverColor: "#6eef68", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
];

export default function SkillsGrid() {
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className={`flex items-center gap-3 p-3 rounded border border-[--hacker-grid]bg-black/20 hover:bg-black/30 transition-colors`}
          title={skill.name}
          onMouseEnter={() => setHoveredSkill(skill.name)}
          onMouseLeave={() => setHoveredSkill(null)}
          style={{
              background:
                hoveredSkill === skill.name ? skill.hoverColor : 'transparent',
          }}
        >
          <div className="w-7 h-7 shrink-0 rounded bg-[--hacker-bg-dim] grid place-items-center overflow-hidden">
            <img
              src={skill.src}
              alt={`${skill.name} icon`}
              className="w-5 h-5 object-contain"
              loading="lazy"
            />
          </div>
          <span className={`text-xs md:text-sm text-[--hacker-fg]/90`}>{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
