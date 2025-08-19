import React from "react";

export default function TerminalFrame({
  title = "~/portfolio",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="terminal-frame border border-[--hacker-grid] bg-[--hacker-bg] text-[--hacker-fg] shadow-[0_0_0_1px_var(--hacker-grid)_inset,0_20px_80px_rgba(0,0,0,.6)] rounded-md overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-[--hacker-grid] bg-[--hacker-bg-dim] text-[--hacker-dim]">
        <span className="inline-flex gap-1">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_0_1px_rgba(0,0,0,.4)_inset]"/>
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_0_1px_rgba(0,0,0,.4)_inset]"/>
          <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_0_1px_rgba(0,0,0,.4)_inset]"/>
        </span>
        <span className="text-xs tracking-widest uppercase ml-2 opacity-80">{title}</span>
      </div>
      <div className="p-4 md:p-6">
        {children}
      </div>
    </div>
  );
}
