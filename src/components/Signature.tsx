"use client";
import { motion } from "motion/react";

const delay = 0.1;
const duration = 0.1;
export const Signature = ({ className }: { className?: string }) => {
  return (
    <motion.svg
      className={className}
      width="212"
      height="158"
      viewBox="0 0 212 158"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M6.91721 125.23C5.63866 127.749 6.76046 127.323 6.76046 126.857C6.76046 117.961 4.14899 108.921 2.81037 100.148C2.69422 99.3867 1.4024 91.5777 2.33773 94.84C4.1841 101.28 6.65937 107.584 9.13098 113.803C14.355 126.948 20.4962 139.694 25.4177 152.963C26.4445 155.731 27.2353 157.181 26.9798 153.204C26.4115 144.356 23.5214 135.373 21.9328 126.665C16.0601 94.4742 12.1326 60.869 16.4865 28.225C18.409 13.81 19.5147 24.201 23.1927 31.6878"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration, ease: "easeInOut" }}
      />
      <motion.path
        d="M35.64 148.896C46.8391 163.332 41.2474 130.381 40.2219 126.299C38.6164 119.908 36.8639 113.039 34.1226 107.02C33.1206 104.821 34.3907 108.603 34.6774 109.139"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration, delay, ease: "easeInOut" }}
      />
      <motion.path
        d="M44.9979 98.4747C43.8124 97.6034 36.3072 93.7561 38.0802 98.1463"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration, delay: delay * 2, ease: "easeInOut" }}
      />
      <motion.path
        d="M45.8934 129.796C46.4259 132.516 46.943 134.927 48.055 137.538C48.5152 138.619 55.0154 151.156 55.6194 146.509C56.8107 137.344 55.3408 127.754 55.3408 118.543C55.3408 113.692 62.9759 131.341 63.7882 133.312C64.5874 135.251 70.9475 146.467 70.9621 145.913C71.165 138.188 68.7156 130.656 68.2445 122.964C67.8038 115.766 80.3921 142.316 80.3921 125.48"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration, delay: delay * 3, ease: "easeInOut" }}
      />
      <motion.path
        d="M83.3248 87.0126C82.7112 86.2637 81.228 82.3245 80.8846 83.9164"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration, delay: delay * 4, ease: "easeInOut" }}
      />
      <motion.path
        d="M94.8766 117.677C102.895 117.555 93.4869 109.274 90.8718 116.26C88.854 121.65 92.9509 145.036 101.809 137.592C107.667 132.67 108.902 118.356 109.619 111.263C109.905 108.424 109.732 102.234 107.816 108.154"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration, delay: delay * 5, ease: "easeInOut" }}
      />
      <motion.path
        d="M113.592 89.3582C112.725 88.8804 108.661 86.1693 110.1 88.9516"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration, delay: delay * 6, ease: "easeInOut" }}
      />
      <motion.path
        d="M116.525 111.813C115.178 116.168 115.085 120.835 120.368 122.907C129.745 126.585 127.909 104.59 127.655 99.9221C127.412 95.4497 126.224 99.4641 126.201 101.676C126.131 108.463 126.323 115.001 129.012 121.354C130.382 124.589 135.059 129.459 138.315 125.062C142.067 119.995 141.549 111.35 139.738 105.676C138.376 101.409 136.305 97.2842 135.205 92.9435C134.356 89.5963 137.69 99.3877 138.988 102.587C141.479 108.725 151.6 125.489 154.586 110.118C156.025 102.707 155.685 94.9766 157.78 87.6833C159.781 80.7152 163.187 90.9491 164.037 93.311C166.601 100.435 173.345 131.1 156.397 124.996"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration, delay: delay * 7, ease: "easeInOut" }}
      />
      <motion.path
        d="M155.994 8.10672C156.275 6.81628 156.924 6.30573 158.336 6.76973C168.854 10.2271 174.709 35.3006 177.187 43.7094C184.885 69.8348 191.71 97.5402 193.259 124.811C193.597 130.781 196.883 147.637 192.933 153.065"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration, delay: delay * 8, ease: "easeInOut" }}
      />
      <motion.path
        d="M168.508 71.9539C172.679 71.9539 178.459 68.3907 181.995 66.6771C197.972 58.9357 215.91 42.0848 207.807 22.5043C204.478 14.4609 197.194 5.57786 188.647 2.9099C177.419 0.595075 166.286 6.72022 157.587 13.0351C132.486 31.2558 109.969 61.2461 102.197 91.4849"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration, delay: delay * 9, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};
