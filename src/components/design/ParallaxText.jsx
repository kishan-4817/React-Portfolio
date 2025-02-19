import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useRef(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useTransform(scrollY, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(scrollVelocity, (latest) => {
    baseX.current = baseX.current + latest * baseVelocity;
    return baseX.current;
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div
        style={{ x }}
        className="flex whitespace-nowrap flex-nowrap text-8xl font-bold text-dark-800"
      >
        <span className="block mr-4">{children}</span>
        <span className="block mr-4">{children}</span>
        <span className="block mr-4">{children}</span>
        <span className="block mr-4">{children}</span>
      </motion.div>
    </div>
  );
}

export default ParallaxText; 