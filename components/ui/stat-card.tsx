"use client";

import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <motion.div 
        className="font-bold text-2xl md:text-3xl text-gray-900"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, type: "spring" }}
      >
        {value}
      </motion.div>
      <div className="text-gray-600 mt-1">{label}</div>
    </motion.div>
  );
}
