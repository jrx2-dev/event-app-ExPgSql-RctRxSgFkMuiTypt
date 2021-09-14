import { motion } from "framer-motion";

export function whithFade<P>(WrappedComponent: React.ComponentType<P>) {
  const withFade = (props: P) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <WrappedComponent {...props} />
    </motion.div>
  );

  return withFade;
}
