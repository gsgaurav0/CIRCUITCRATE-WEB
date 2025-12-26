import React from "react";

export const Component = () => {
  return (
    <section className="grid place-content-center gap-2 bg-black w-full min-h-screen text-white py-20">
      <FlipLink href="https://x.com/thisis_vaib">Twitter</FlipLink>
      <FlipLink href="https://linkedin.com/in/vaib215">Linkedin</FlipLink>
      <FlipLink href="https://github.com/vaib215">Github</FlipLink>
      <FlipLink href="https://instagram.com/thisis_vaib">Instagram</FlipLink>
    </section>
  );
};

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group text-white hover:text-cyan-400 relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl transition-colors duration-300"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div className="flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </a>
  );
};

