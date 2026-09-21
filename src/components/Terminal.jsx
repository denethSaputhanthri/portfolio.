import { useEffect, useState, useRef } from "react";

const lines = [
  { type: "command", text: "$ who am i" },
  { type: "output", text: "deneth@developer:~$" },
  { type: "command", text: "$ cat profile.json" },
  { type: "json-open", text: "{" },
  {
    type: "json-line",
    text: '  "role": "Full Stack Developer",',
  },
  {
    type: "json-line",
    text: '  "focus": [',
  },
  {
    type: "json-value",
    text: '    "Web Development",',
  },
  {
    type: "json-value",
    text: '    "AI",',
  },
  {
    type: "json-value",
    text: '    "Backend Systems"',
  },
  {
    type: "json-line",
    text: "  ],",
  },
  {
    type: "json-line",
    text: '  "status": "Building..."',
  },
  { type: "json-close", text: "}" },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Prefer reduced motion — show everything immediately
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setVisibleLines(lines.length);
      return;
    }

    let current = 0;
    intervalRef.current = setInterval(() => {
      current += 1;
      setVisibleLines(current);
      if (current >= lines.length) {
        clearInterval(intervalRef.current);
      }
    }, 150);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const getLineColor = (type) => {
    switch (type) {
      case "command":
        return "text-text-primary";
      case "output":
        return "text-accent";
      case "json-open":
      case "json-close":
        return "text-text-muted";
      case "json-line":
        return "text-text-secondary";
      case "json-value":
        return "text-accent/80";
      default:
        return "text-text-secondary";
    }
  };

  return (
    <div className="terminal-window" role="img" aria-label="Developer terminal showing profile information">
      {/* Header */}
      <div className="terminal-header">
        <div className="terminal-dot" style={{ background: "#ef4444" }} />
        <div className="terminal-dot" style={{ background: "#f59e0b" }} />
        <div className="terminal-dot" style={{ background: "#22c55e" }} />
        <span className="ml-3 text-xs text-text-muted font-mono">
          terminal — deneth@dev
        </span>
      </div>

      {/* Body */}
      <div className="terminal-body">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`${getLineColor(line.type)} leading-7`}>
            {line.text}
          </div>
        ))}
        {/* Cursor */}
        {visibleLines < lines.length && (
          <span
            className={`inline-block w-2 h-4 bg-accent ml-1 ${
              cursorVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transition: "opacity 0.1s" }}
          />
        )}
        {visibleLines >= lines.length && (
          <div className="mt-2 text-text-muted">
            <span>deneth@developer:~$ </span>
            <span
              className={`inline-block w-2 h-4 bg-accent align-middle ${
                cursorVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transition: "opacity 0.1s" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
