import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 45,
  className = ""
}) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");

    let index = 0;

    const interval = setInterval(() => {
      index++;

      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }

    }, speed);

    return () => clearInterval(interval);

  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText}
      <span className="typing-cursor">|</span>
    </span>
  );
}