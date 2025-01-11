import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, isInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return [element, controls];
};

export const useScroll2 = (thresh = 0.09) => {
  const controls2 = useAnimation();
  const [element2, inView] = useInView({ threshold: thresh });

  useEffect(() => {
    if (inView) {
      controls2.start("show");
    } else {
      controls2.start("hidden");
    }
  }, [inView, controls2]);

  return [element2, controls2];
};
