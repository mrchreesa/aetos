import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const FadeInOnScroll = ({
  children,
  delay = 0,
  duration = 0.8,
  threshold = 0.15,
  translateY = 30,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        position: "relative",
        zIndex: 1,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${translateY}px)`,
        transition: `opacity ${duration}s ease-out ${delay}ms, transform ${duration}s ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

FadeInOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  duration: PropTypes.number,
  threshold: PropTypes.number,
  translateY: PropTypes.number,
};

export default FadeInOnScroll;
