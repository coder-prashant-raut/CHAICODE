import React from "react";
const codeSnippets = [
  `// Productivity level: 404 Not Found`,
  `git commit -m "final-final-FINAL.js"`,
  `const debug = true; // until it's not`,
  `if (coffee === empty) return chaos;`,
  `// Feature or bug? Let the users decide.`,
  `const sleep = () => new Promise(() => {});`,
  `// Note to self: Understand this later`,
  `rm -rf /pain`,
  `function estimateDeadline() { return "maybe"; }`,
  `// Code now, cry in production later`,
  `const weekend = deploy ? null : "freedom";`,
  `while (alive) code();`,
  `try { code() } catch(e) { blameBackend(); }`,
  `const fixBug = () => console.log("Works for me");`,
  `// When StackOverflow is down, I am too.`,
];

export default function CodeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {codeSnippets.map((line, index) => {
        const top = Math.random() * 90;
        const left = Math.random() * 90;
        const delay = Math.random() * 5;
        const duration = 5 + Math.random() * 6;

        return (
          <p
            key={index}
            className="absolute z-0 text-orange-400/10 text-xs md:text-sm font-mono animate-floating "
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              whiteSpace: "nowrap",
            }}
          >
            {line}
          </p>
        );
      })}
    </div>
  );
}
