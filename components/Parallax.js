import React, { useEffect, useRef } from "react";

import PropTypes from "prop-types";

const Parallax = ({ children, speed = 0.25, className, style }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof window === "undefined") return undefined;

    const desktopMQ = window.matchMedia("(min-width: 1280px)");
    const reducedMotionMQ = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let target = 0;
    let current = 0;
    let rafId = null;
    let running = false;
    let enabled = desktopMQ.matches && !reducedMotionMQ.matches;

    const computeTarget = () => {
      if (!enabled) {
        target = 0;
        return;
      }
      const y = window.scrollY || window.pageYOffset || 0;
      const max = window.innerHeight;
      target = (y < max ? y : max) * speed;
    };

    const apply = (value) => {
      node.style.transform = `translate3d(0, ${value.toFixed(2)}px, 0)`;
    };

    const tick = () => {
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.05) {
        current = target;
        apply(current);
        running = false;
        rafId = null;
        return;
      }
      apply(current);
      rafId = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (!running) {
        running = true;
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const onScroll = () => {
      computeTarget();
      start();
    };

    const onResize = () => {
      enabled = desktopMQ.matches && !reducedMotionMQ.matches;
      computeTarget();
      start();
    };

    node.style.willChange = "transform";
    node.style.backfaceVisibility = "hidden";
    computeTarget();
    current = target;
    apply(current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const addMQ = (mq) => {
      if (mq.addEventListener) mq.addEventListener("change", onResize);
      else if (mq.addListener) mq.addListener(onResize);
    };
    const removeMQ = (mq) => {
      if (mq.removeEventListener) mq.removeEventListener("change", onResize);
      else if (mq.removeListener) mq.removeListener(onResize);
    };
    addMQ(desktopMQ);
    addMQ(reducedMotionMQ);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      removeMQ(desktopMQ);
      removeMQ(reducedMotionMQ);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      node.style.willChange = "";
      node.style.backfaceVisibility = "";
      node.style.transform = "";
    };
  }, [speed]);

  return React.createElement("div", { ref, className, style }, children);
};

Parallax.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  speed: PropTypes.number,
  style: PropTypes.object,
};

export default Parallax;
