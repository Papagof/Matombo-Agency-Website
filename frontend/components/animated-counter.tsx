"use client";

import * as React from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const decimalPlaces =
    decimals ?? (Number.isInteger(value) ? 0 : 1);

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: 1600,
    bounce: 0,
  });
  const [display, setDisplay] = React.useState("0");

  React.useEffect(() => {
    if (inView) {
      if (reduce) {
        motionValue.jump(value);
      } else {
        motionValue.set(value);
      }
    }
  }, [inView, value, motionValue, reduce]);

  React.useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplay(
        latest.toLocaleString("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        })
      );
    });
  }, [spring, decimalPlaces]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
