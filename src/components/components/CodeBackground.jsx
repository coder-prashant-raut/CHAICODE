import React from "react";

const codeSnippets = [
  `// TODO: Fix it later 😅`,
  `const chai = "life booster";`,
  `throw new Error("It worked on my machine");`,
  `// Why is this bug smiling at me? 🐛`,
  `useEffect(() => {}, [Tea🍵])`,
  `<CodeIsPoetry />`,
  `// Debugging: The art of removing bugs you didn't know you had`,
  `while (!success) tryAgain();`,
  `// Pro Tip: Don't deploy on Fridays 😬`,
  `const motivation = () => "Just 5 more minutes of coding"`,
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
