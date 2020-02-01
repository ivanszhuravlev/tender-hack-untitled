import { useEffect, useRef } from "react";
import { throttle } from "lodash";

export const useScroll = callback => {
  const prevScroll = useRef(document.documentElement.scrollTop);

  const throttledScrollHandler = () => {
    document.documentElement.scrollTop > prevScroll.current && callback();
    prevScroll.current = document.documentElement.scrollTop;
  };

  const handleScroll = () => throttle(throttledScrollHandler, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll());
    return () => window.removeEventListener("scroll", handleScroll());
  }, []);
};
