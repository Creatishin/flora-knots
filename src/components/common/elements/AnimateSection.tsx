import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimateSection({
  children,
  className
}: Readonly<{ children: React.JSX.Element; className?: string }>) {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      className={className}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInVariants}
    >
      {children}
    </motion.div>
  );
}

export default AnimateSection;
