import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";

const EASING = "cubic-bezier(0.22, 0.61, 0.36, 1)";

const FadeInOnScroll = ({
  children,
  delay = 0,
  duration = 0.9,
  threshold = 0,
  rootMargin = "0px 0px -10% 0px",
  translateY = 32,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    if (mq.addEventListener) mq.addEventListener("change", sync);
    else if (mq.addListener) mq.addListener(sync);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", sync);
      else if (mq.removeListener) mq.removeListener(sync);
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const shouldAnimate = !reducedMotion;
  const visible = isVisible || !shouldAnimate;

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0, 0, 0)"
          : `translate3d(0, ${translateY}px, 0)`,
        transition: shouldAnimate
          ? `opacity ${duration}s ${EASING} ${delay}ms, transform ${duration}s ${EASING} ${delay}ms`
          : "none",
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
  rootMargin: PropTypes.string,
  translateY: PropTypes.number,
};

export default FadeInOnScroll;
