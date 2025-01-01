import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName, sectionTitle) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <motion.div
          initial={{ opacity: 0, y: -50, }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 1.25,
            // delay: delay,
          }}
        >
          <h2 className={`${styles.sectionHeadText} text-center mb-5`}>
            {sectionTitle}
          </h2>
        </motion.div >
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
