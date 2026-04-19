import { useEffect, useRef } from 'react';

function Reveal({ as: Tag = 'div', delay, className = '', children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`fade-up ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
