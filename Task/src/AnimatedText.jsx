import { useEffect, useRef, useState } from "react";

const AnimatedText = ({ text, className = "" }) => {
  const textRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // true when in view, false when out
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <h2 ref={textRef} className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block opacity-0 transition-opacity duration-500 ${
            inView ? "animate-letter" : ""
          }`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

export default AnimatedText;
