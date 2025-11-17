"use client";

import { motion } from "framer-motion";
import styles from "./ManScene.module.css";

const spoonVariants = {
  initial: { rotate: -20, y: -4 },
  animate: {
    rotate: [-20, -8, -20],
    y: [-4, 0, -4],
    transition: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: 3,
      ease: "easeInOut"
    }
  }
};

const eyelidVariants = {
  initial: { scaleY: 1 },
  animate: {
    scaleY: [1, 1, 0.15, 1],
    transition: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: 5,
      ease: "easeInOut",
      times: [0, 0.4, 0.45, 1]
    }
  }
};

const scoopVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -4, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: 3,
      ease: "easeInOut"
    }
  }
};

const headVariants = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, -2, 0, 2, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: 6,
      ease: "easeInOut"
    }
  }
};

export function ManScene() {
  return (
    <div className={styles.container}>
      <motion.div className={styles.figure} initial="initial" animate="animate">
        <motion.div className={styles.head} variants={headVariants}>
          <div className={styles.face}>
            <div className={styles.hairline} />
            <div className={styles.eyeRow}>
              <div className={styles.eye}>
                <div className={styles.pupil} />
                <motion.div className={styles.eyelid} variants={eyelidVariants} />
              </div>
              <div className={styles.eye}>
                <div className={styles.pupil} />
                <motion.div className={styles.eyelid} variants={eyelidVariants} />
              </div>
            </div>
            <div className={styles.nose} />
            <div className={styles.mouth}>
              <div className={styles.lipTop} />
              <div className={styles.teeth} />
              <div className={styles.lipBottom} />
            </div>
          </div>
        </motion.div>
        <div className={styles.torso}>
          <div className={styles.shirt} />
          <div className={styles.armLeft} />
          <motion.div className={styles.armRight} variants={spoonVariants}>
            <motion.div className={styles.hand} variants={spoonVariants}>
              <motion.div className={styles.cone} variants={scoopVariants}>
                <div className={styles.scoop}>
                  <div className={styles.scoopHighlight} />
                </div>
                <div className={styles.coneBody}>
                  <div className={styles.conePattern} />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <div className={styles.table}>
        <div className={styles.sunsetGlow} />
        <div className={styles.shadow} />
      </div>
    </div>
  );
}
